---
id: 690
title: 'Sql Server 2008 R2 Reporting Services – 503 Error'
date: 2012-02-29T13:56:51+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=690
permalink: /2012/02/sql-server-2008-r2-reporting-services-503-error/
dsq_thread_id:
  - "593574596"
categories:
  - Code
tags:
  - SQL Server
---
I was up til 2am on this one.

A client’s relatively shiny-new SQL Server 2008 R2 Reporting Services Express install was failing to start. Pinging the relevant URLs: 

<pre>http://server/reports
http://server/reportserver
</pre> Was continually responding with a 503 error. No further detail, just a HTTP 503 response, which translates to “Service unavailable”. The Windows “Report Server” service was running, and started/stopped just fine. My normal response to this kind of problem is to start looking at logs – Windows logs were all clear. I 

[googled around the subject](http://www.google.co.uk/?q=503+http+reporting+services#hl=en&safe=off&output=search&sclient=psy-ab&q=503+http+reporting+services&pbx=1&oq=&aq=&aqi=&aql=&gs_sm=&gs_upl=&bav=on.2,or.r_gc.r_pw.r_cp.r_qf.,cf.osb&fp=3348566163251111&biw=1160&bih=723), which gave several “poke and pray” solutions, not too helpful.

To fix a problem like this, you need logs. Every _single_ StackOverflow, or forum response to this problem should read “check what’s going on in your logs”. You don’t diagnose a medical condition without some evidence to back it up. You need data.

A few responses pointed to this [MSDN article](http://msdn.microsoft.com/en-us/library/ms159778.aspx) which gives you details for turning on HTTP event logging. Genius! Except that all you get is a line which reads:

<pre>2012-02-17 17:51:38 192.168.23.204 1222 192.168.23.240 80 HTTP/1.1 GET /Reports 503 - N/A -
</pre>

Not very helpful. Eventually, after ingesting far too much caffine and having to dig around in Reporting Services textbooks, I found a reference to the Reporting Services log files, in this case located here:

<pre>C:\Program Files\Microsoft SQL Server\MSRS10_50.SQLEXPRESS\Reporting Services\LogFiles
</pre>

From there I was able to diagnose the problem as relatively trivial and fix the configuration problem. In my case (yours will most likely be different), the problem was related to an empty RSWindowsExtendedProtectionlevel XML tag in the rsreportserver.config file. For your own individual problem – **READ YOUR LOGS**.

Today I feel it is appropriate to finish with:

<a href="http://www.kianryan.co.uk/2012/02/sql-server-2008-r2-reporting-services-503-error/jacoj/" rel="attachment wp-att-694"><img src="/assets/images/2012/02/jacoj.jpeg" alt="" title="jacoj"   class="alignnone size-full wp-image-694" srcset="/assets/images/2012/02/jacoj.jpeg 317w, /assets/images/2012/02/jacoj-210x300.jpg 210w" sizes="(max-width: 317px) 100vw, 317px" /></a>