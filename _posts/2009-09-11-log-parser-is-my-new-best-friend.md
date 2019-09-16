---
id: 265
title: Log Parser Is My New Best Friend
date: 2009-09-11T11:24:21+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/09/log-parser-is-my-new-best-friend/
permalink: /2009/09/log-parser-is-my-new-best-friend/
ljID:
  - "147"
dsq_thread_id:
  - "283348495"
categories:
  - Code
---
SEO may be something of a dark art, but even if we don’t practice it, as web developers we’re usually responsible for putting into place the mechanisms that allow the Mouldy-morts to practice their forbidden forms. Recently, that usually consists of dropping analytics code onto a page to track your users every move, but what do you do when someone’s “forgotten” the analytics code, or it fails for some unknown reason?

Step up to the plate server logs! Both IIS and Apache quite happily dump their site logs for you to parse through them. But this is where the fun bit comes in, since they can get quite large. How large? This morning I’ve had to wade through 102GB of logs. Most unix monkeys will probably laugh at their windows using counterparts, and with their long hair and sandals decry, “102GB! Hah, I _eat_ 102GB of server logs for breakfast with my organically grown shredded wheat!”. And yes, with Perl, awk and sed, 102GB is pretty much nothing. But you don’t tend to have these tools easily accessible on a window box, and if you’re messing around on someone else’s Windows box, you want to create the smallest footprint possible.

And here’s where Microsoft has been quite clever with a little known, but very powerful tool called [LogParser](http://www.microsoft.com/DownLoads/details.aspx?FamilyID=890cd06b-abf8-4c25-91b2-f8d975cf8c07&displaylang=en). Log Parser provides you with SQL-style syntax access to the data contained in those log files and can output it in a range of formats from CSVs through to charts. I’ve been playing with it most of the morning. It’s nice.

Install it, add it’s location to your path variable and the log world is your oyster. Open a command prompt and traverse to your IIS log directory (mine is at c:\iislogs) and execute the command using the following:

    logparser -i:iisw3c -o:csv "{insert-sql-query-here}"
    or
    logparser -i:iisw3c -o:csv file:query.sql
    

-i:iisw3c tells log parser its looking at w3c formatted log files, -o:csv to output as CSV and you can either present your sql inline or reference an external file. I’ve listed a few examples below to get you started:

<pre class="brush: sql; title: ; notranslate" title="">-- Return page hits for all aspx pages handled from the beginning of the year to today in a given directory.
SELECT COUNT(*), cs-uri-stem 
INTO hits.csv 
FROM *.log WHERE EXTRACT_EXTENSION(cs-uri-stem) = 'aspx'
AND cs-uri-stem LIKE '/subdirectory/%'
AND date between timestamp('2009-01-01 00:00:00','yyyy-MM-dd hh:mm:ss') 
    AND timestamp('2009-09-11 00:00:00','yyyy-MM-dd hh:mm:ss')
GROUP BY cs-uri-stem</p>

<p>-- Return number of hits for different query string tokens
SELECT COUNT(*), EXTRACT_TOKEN(cs-uri-query, 0, '&'), EXTRACT_TOKEN(cs-uri-query, 1, '&')
INTO search.csv 
FROM *.log WHERE cs-uri-stem LIKE 'Query.aspx'
AND date between timestamp('2009-01-01 00:00:00','yyyy-MM-dd hh:mm:ss') 
AND timestamp('2009-09-10 00:00:00','yyyy-MM-dd hh:mm:ss')
GROUP BY cs-uri-stem, EXTRACT_TOKEN(cs-uri-query, 0, '&'), EXTRACT_TOKEN(cs-uri-query, 1, '&')
</pre>

And here’s a few links to other people who’ve done more with it than I:

  * [Download Log Parser](http://www.microsoft.com/DownLoads/details.aspx?FamilyID=890cd06b-abf8-4c25-91b2-f8d975cf8c07&displaylang=en)
  * [Coding Horror – Log Parser](http://www.codinghorror.com/blog/archives/000369.html)
  * [Forensic Log Parsing with LogParser](http://www.securityfocus.com/infocus/1712)
  * [Select date ranges with LogParser](http://blogs.msdn.com/carloc/archive/2008/05/30/select-date-ranges-with-logparser.aspx)