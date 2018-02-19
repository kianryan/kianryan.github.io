---
id: 354
title: SQL Server NULLs and their impact
date: 2010-09-22T10:04:28+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2010/09/sql-server-nulls-and-their-impact/
permalink: /2010/09/sql-server-nulls-and-their-impact/
dsq_thread_id:
  - "1394057505"
categories:
  - Code
---
This is part rant, part discussion&#8230;

In this modern world, developing database driven applications has become pretty damn straightforward, even for us .NET coders. Start a project, grab a ORM framework of choice (Subsonic, Entity Framework, Linq 2 SQL), define a database, create your tables, generate your classes and POW! Job done.

Which is awesome. Apart from the fact that your class behaviour is now tightly defined to your database behaviour (by default, I appreciate you can change this). Which means in turn, you really should be taking great care in defining your databases, since the closer this maps your domain model, the easier your job becomes.

So why on earth leave your columns set to NULL unless you actually intend to allow NULL values? I appreciate that SQL Server allows a column as null by default, but it has so many implications if you&#8217;re not intending it it&#8217;s untrue. Lets take the following examples:

<div>
  <pre class="brush: csharp; title: ; notranslate" title="">
int? Age { get; set; }

if (Age &gt; 0)
{
    Console.Writeline("This is awesome folks!");
}
</pre>
</div>

<div>
  <pre class="brush: csharp; title: ; notranslate" title="">
int Age { get; set; }

if (Age &gt; 0)
{
    Console.Writeline("This is awesome folks!");
}
</pre>
</div>

Clearly the two are not equivalent. The first wont even compile, since the compiler has enough sense to recognise that int? could be null and therefore the expression int? > int is not valid.

It could be argued that Age _may indeed_ be nullable, nullable indicating a genuine lack of this piece of knowledge. If this is the case, then we need to take that into account.

<pre class="brush: csharp; title: ; notranslate" title="">int? Age { get; set; }&lt;/p&gt;

&lt;p&gt;if (Age == null)
    Console.Writeline(&quot;We don't have an age for this person...&quot;);
else if (Age.value &gt; 0)
    Console.Writeline(&quot;This is awesome folks!&quot;);
</pre>

In this case we have a potential for three different things to be happening, all of which need to be taken into account. Each one is a semantically important case which requires understanding and testing.

But often a field being left nullable is just a sign of laziness on the part of the database being developed. The giveaway is when the following code is spotted:

<pre class="brush: csharp; title: ; notranslate" title="">int? Age { get; set; }&lt;/p&gt;

&lt;p&gt;if ((Age ?? 0) &gt; 0)
{
    Console.Writeline(&quot;This is awesome folks!&quot;);
}
</pre>

The ?? operator is an expressive operator used to define a default behaviour, not to correct a mistake made elsewhere by the developer. It would seem common sense to go back and change the model so that the code reflects the first example, but more often than not I see developers opting for option above.

Please use NULL wisely.