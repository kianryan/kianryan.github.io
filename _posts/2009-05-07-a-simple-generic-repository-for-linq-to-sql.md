---
id: 217
title: A Simple Generic Repository for Linq to SQL
date: 2009-05-07T17:02:52+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/05/a-simple-generic-repository-for-linq-to-sql/
permalink: /2009/05/a-simple-generic-repository-for-linq-to-sql/
ljID:
  - "129"
dsq_thread_id:
  - "174926281"
categories:
  - Code
---
Two code posts in one day, aren’t you lot lucky?

I’m currently working on a small project working with Microsoft ASP.NET MVC. I admit I’m rather enjoying the experience, it’s nice to get back to proper bare metal GETs and POSTs with non of the fluff of normal ASP.NET getting in the way. Since this is a relatively simple project I’m using Linq to SQL rather than the Entity framework. Whilst putting some boilerplate code together (after following the excellent [NerdDinner](http://nerddinnerbook.s3.amazonaws.com/Intro.htm) tutorial) I realised there was a lack of a simple generic repository for common object operations. So I present to you my basic, generic repository:

<pre class="brush: csharp; title: ; notranslate" title="">using System.Data.Linq.Mapping;
using System.Linq;
using System.Linq.Expressions;
using BrandingScience.Models;
using System;</p>

<p>public abstract class Repository<T, C> where T : class where C : System.Data.Linq.DataContext, new()
{
    private C db = new C();</p>

<pre><code>// Query Methods
public IQueryable<T> FindAll()
{
    return db.GetTable<T>();
}


public T Get(int id)
{
    MetaTable mapping = db.Mapping.GetTable(typeof(T));
    MetaDataMember pkfield = mapping.RowType.DataMembers.SingleOrDefault(d => d.IsPrimaryKey);

    ParameterExpression param = Expression.Parameter(typeof(T), "e");
    var p = Expression.Lambda<Func<T, bool>>(
          Expression.Equal(Expression.Property(param, pkfield.Name),
          Expression.Constant(id)),
          new ParameterExpression[] { param });

    return db.GetTable<T>().SingleOrDefault(p);

}

// Insert/Delete
public void Add(T t)
{
    db.GetTable<T>().InsertOnSubmit(t);
}

public void Delete(T t)
{
    db.GetTable<T>().DeleteOnSubmit(t);
}

// Persistence
public void Save()
{
    db.SubmitChanges();
}
</code></pre>

<p>}
</pre>

T is the table class you want to create the repository for, C is the DataContext created by Linq to SQL. Pretty straightforward. A typical implementation looks like this:

<pre class="brush: csharp; title: ; notranslate" title="">public class JobRepository : Repository<Job, MyDataContext>
{
}</p>

<p>public static void Main(string[] args)
{
    JobRepository jobRepository = new JobRepository();
    List<Job> allJobs = jobRepository.FindAll();</p>

<pre><code>// Return a single item and change the title.
Job job = jobRepository.Get(1);
job.Title = "Mutated Gerkhin Production";

// Create a new item.
Job newJob = new Job();
newJob.Title = "Mutated Gerkhin Anti-Coagulant Production";
jobRepository.Add(newJob);

// Delete an old item.
Job removeJob = jobRepository.Get(2);
Console.WriteLine(removeJob.Title); // Output: Survival of human race.
jobRepository.Delete(removeJob);

// Save all changes to the repository.
jobRepository.Save();
</code></pre>

<p>}
</pre>

This version currently does not support dependancy injection, which is something I’ll be looking into shortly. But for now, it saves a heck of a lot of time to just get the simple stuff done. I’m surprised MS didn’t actually ship Linq to SQL with something similar.