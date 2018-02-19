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
Two code posts in one day, aren&#8217;t you lot lucky?

I&#8217;m currently working on a small project working with Microsoft ASP.NET MVC. I admit I&#8217;m rather enjoying the experience, it&#8217;s nice to get back to proper bare metal GETs and POSTs with non of the fluff of normal ASP.NET getting in the way. Since this is a relatively simple project I&#8217;m using Linq to SQL rather than the Entity framework. Whilst putting some boilerplate code together (after following the excellent [NerdDinner](http://nerddinnerbook.s3.amazonaws.com/Intro.htm) tutorial) I realised there was a lack of a simple generic repository for common object operations. So I present to you my basic, generic repository:

<pre class="brush: csharp; title: ; notranslate" title="">using System.Data.Linq.Mapping;
using System.Linq;
using System.Linq.Expressions;
using BrandingScience.Models;
using System;&lt;/p&gt;

&lt;p&gt;public abstract class Repository&lt;T, C&gt; where T : class where C : System.Data.Linq.DataContext, new()
{
    private C db = new C();&lt;/p&gt;

&lt;pre&gt;&lt;code&gt;// Query Methods
public IQueryable&lt;T&gt; FindAll()
{
    return db.GetTable&lt;T&gt;();
}


public T Get(int id)
{
    MetaTable mapping = db.Mapping.GetTable(typeof(T));
    MetaDataMember pkfield = mapping.RowType.DataMembers.SingleOrDefault(d =&gt; d.IsPrimaryKey);

    ParameterExpression param = Expression.Parameter(typeof(T), "e");
    var p = Expression.Lambda&lt;Func&lt;T, bool&gt;&gt;(
          Expression.Equal(Expression.Property(param, pkfield.Name),
          Expression.Constant(id)),
          new ParameterExpression[] { param });

    return db.GetTable&lt;T&gt;().SingleOrDefault(p);

}

// Insert/Delete
public void Add(T t)
{
    db.GetTable&lt;T&gt;().InsertOnSubmit(t);
}

public void Delete(T t)
{
    db.GetTable&lt;T&gt;().DeleteOnSubmit(t);
}

// Persistence
public void Save()
{
    db.SubmitChanges();
}
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;}
</pre>

T is the table class you want to create the repository for, C is the DataContext created by Linq to SQL. Pretty straightforward. A typical implementation looks like this:

<pre class="brush: csharp; title: ; notranslate" title="">public class JobRepository : Repository&lt;Job, MyDataContext&gt;
{
}&lt;/p&gt;

&lt;p&gt;public static void Main(string[] args)
{
    JobRepository jobRepository = new JobRepository();
    List&lt;Job&gt; allJobs = jobRepository.FindAll();&lt;/p&gt;

&lt;pre&gt;&lt;code&gt;// Return a single item and change the title.
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
&lt;/code&gt;&lt;/pre&gt;

&lt;p&gt;}
</pre>

This version currently does not support dependancy injection, which is something I&#8217;ll be looking into shortly. But for now, it saves a heck of a lot of time to just get the simple stuff done. I&#8217;m surprised MS didn&#8217;t actually ship Linq to SQL with something similar.