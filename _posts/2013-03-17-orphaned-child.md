---
id: 921
title: 'Entity Framework Gotchas – Strategies for Orphaned Child Objects'
date: 2013-03-17T12:01:36+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=921
permalink: /2013/03/orphaned-child/
dsq_thread_id:
  - "1144138797"
categories:
  - Code
---
Entity Framework provides a powerful framework for expressing relations between objects mapped to the database, but it is not without its shortcomings. One particular theme does keep coming around – removing child objects from parents.

All code examples are available on [GitHub](https://github.com/kianryan/OrphanedObjects)

Let’s take a pretty basic set of relationships:

<div>
  <pre class="brush: csharp; title: ; notranslate" title="">
    public class Parent
    {
        public virtual int Id { get; set; }

        private ICollection<Child> _children; 
        public virtual ICollection<Child> Children
        {
            get { return _children ?? (_children = new Collection<Child>()); }
            set { _children = value; }
        } 
    }

    public class Child
    {
        public virtual int Id { get; set; }

        public virtual int ParentId { get; set; }
        public virtual Parent Parent { get; set; }
    }

    public class Context : DbContext
    {
        public DbSet<Parent> Parents { get; set; }
        public DbSet<Child> Children { get; set; }
    }
</pre>
</div>

The above code defines two classes, Parent and Child, with Parent containing a collection of Child objects called Children. New instances of Child can be created and added to the Children collection of Parent:

<div>
  <pre class="brush: csharp; title: ; notranslate" title="">
        _context = new Context();

        // Setting up the scenario.
        var parent = new Parent();
        var child = new Child();
        parent.Children.Add(child);

        _context.Parents.Add(parent);
        _context.SaveChanges();
</pre>
</div>

But, trying to remove the child from the parent causes an exception (I note the exception in EF5 is significantly friendlier than the exception in EF4):

<div>
  <pre class="brush: csharp; title: ; notranslate" title="">
        // Causing the exception
        var parent = _context.Parents.First();
        var child = parent.Children.First();

        parent.Children.Remove(child);

        _context.SaveChanges();
</pre>
</div>

When the above is run, the child is “orphaned” from the parent. That is, it is removed from its parent’s collection, the Parent is set to null, but the object itself is not marked for deletion. On executing SaveChanges, the null Parent reference can’t be saved (since the foreign key ParentId is not null) and an exception is thrown. The scenario makes perfect sense, but is very aggravating.

So how do we get the above lump of code to work as expected?

## Solution 1 – Explicitly Remove The Child

The naive implementation of this problem is to explicitly remove the child object from the context, marking it for deletion.

<div>
  <pre class="brush: csharp; title: ; notranslate" title="">
        var parent = _context.Parents.First();
        var child = parent.Children.First();

        parent.Children.Remove(child);
        _context.Children.Remove(child);

        _context.SaveChanges();
</pre>
</div>

However, the call to remove the child from the context needs to be done on every instance the child is removed from the Parent’s collection. This is tedious at best, but asking for a single call to be missed somewhere in your code. It also assumes that at the point of removing the child object, your code has direct access to the context. In these situations, you may see this as a reasonable overhead. However, if the removal occurs in one of your objects, it’s unreasonable to ask it to have access to the context. In this case, we use a tracking list to return a collection of objects to be deleted as a side-effect of the method. It’s still the programmers responsibility to remove these items from the context, but it keeps the POCO relatively vanilla (free from context).

<div>
  <pre class="brush: csharp; title: ; notranslate" title="">
    partial class Parent
    {
        public bool RemoveChild(Child child, out IEnumerable<Child> toRemove)
        {
            var removeTracker = new List<Child>();

            Children.Remove(child);
            removeTracker.Add(child);

            // Side-effects occuring as of business logic.

            toRemove = removeTracker;
            return true;
        }
    }
</pre>
</div>

This still makes explicit removal the responsibility of the programmer, but does keep the object clean. Keeping the tracking list as an output parameter also helps to avoid cluttering the meaning of the return type. The downside to this approach is it needs to be used _everywhere_ a Child object is removed – it’s a far from perfect solution.

## Solution 2 – Identifying Relationships

An Identifying relationship is a relationship which is part of the primary key, making it identifying. Currently, our ParentId is non-identifying. That is, whilst our object requires a ParentId to exist, there is nothing identifying that the ParentId is part of the identification of the object. Entity Framework provides the attribute [Key] for marking properties as part of the Key, and has a built in mechanism for handling the removal of child objects in identifying relationships.

<div>
  <pre class="brush: csharp; title: ; notranslate" title="">
    public class Child
    {
        [Key, Column(Order = 1)]
        public virtual int Id { get; set; }

        [Key, Column(Order = 2)]
        public virtual int ParentId { get; set; }
        public virtual Parent Parent { get; set; }
    }
</pre>
</div>

The Key attribute marks both Id and ParentId as part of the primary key. Column order needs to be determined for composite keys, hence the Column attribute. With the change in key, our original code now works fine with no additional work, works in every instance where a child object is removed, and incurs no additional overhead. When the child object is removed from the parent, EF realises that the object can no longer exist, and marks it for deletion.

If you’ve got control over your database schema, this (to me) looks like the cleanest option to you. It’s simple, and once you’ve handled the change, there’s no need to mess about with any additional hacks.

## Solution 3 – SaveChanges

Our final solution is a variant of our first solution. In our first solution, we kept a list of the objects we intended to remove, and then removed them later. We can defer this process even further, by looking for orphaned objects and removing them when we call SaveChanges.

<div>
  <pre class="brush: csharp; title: ; notranslate" title="">
    partial class Context
    {
        public override int SaveChanges()
        {
            var toRemove = Children.Local.Where(x => x.Parent == null).ToList();
            foreach (var child in toRemove)
                Children.Remove(child);

            return base.SaveChanges();
        }
    }
</pre>
</div>

In the above code, on calling SaveChanges, we look through all local Child objects looking for orphans, and then remove these from the context. On calling the base SaveChanges context, our save is successful since all orphans have been handled.

This solution works, but is not without its problems. Primarily, this needs to be done for each entity which is a child of another entity, and I’ve not (as yet) found a nice way to do this using generics. It does work well where you’re working with an existing database schema, or composite keys are not an option. There is also a performance penalty to pay in executing the query to check for null objects, you are searching every object in the local collection. If there are 200,000 objects in the local Children collection, this may take a second to execute, and that may, or may not, be acceptable to you.