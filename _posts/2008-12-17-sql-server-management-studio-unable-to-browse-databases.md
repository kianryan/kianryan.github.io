---
id: 70
title: 'SQL Server Management Studio &#8211; Unable to browse databases.'
date: 2008-12-17T11:11:14+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2008/12/sql-server-management-studio-unable-to-browse-databases/
permalink: /2008/12/sql-server-management-studio-unable-to-browse-databases/
ljID:
  - "100"
dsq_thread_id:
  - "240758107"
categories:
  - Code
---
I often end up working in collaborative environments, with SQL Server accounts which only allow me access to one database on any given server. Using the SQL Server 2005 tools, this wasn&#8217;t a problem. SQL SMS showed me all the databases available but threw an &#8220;access denied&#8221; if I tried to do anything to them. Fairy nuff.

SQL SMS 2008 however refuses to show the databases in the object explorer. I can open a new query window, switch to the database and access it via T-SQL, but I can&#8217;t directly interact with any of the databases as I could with SMS 2005.

Turns out that when SQL SMS 2008 probes each of the databases, it&#8217;s also checking for the collation of the database. If the user doesn&#8217;t have read access to the database SQL SMS throws an exception which stops it from probing any further and returns an empty list of databases. To get around this you need to turn the collation checking off. To do this, select &#8220;Databases&#8221; in Object Explorer, then press F7 which opens the &#8220;Object Explorer Details&#8221;. Right click on the columns across the top and deselect &#8220;Collation&#8221;. Right-click, &#8220;Refresh&#8221; your databases and you should be able to see them all again.