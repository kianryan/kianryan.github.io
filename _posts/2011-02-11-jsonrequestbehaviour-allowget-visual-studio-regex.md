---
id: 546
title: 'JsonRequestBehaviour.AllowGet & Visual Studio Regex'
date: 2011-02-11T22:11:45+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=546
permalink: /2011/02/jsonrequestbehaviour-allowget-visual-studio-regex/
dsq_thread_id:
  - "228315346"
categories:
  - Code
---
Nice quick win – currently upgrading a client Intranet project from ASP.NET MVC1 to MVC2. Microsoft changed how get requests are handled in this release and disallowed GET JSON requests by default. Before going any further, note that there are [security implications in allowing JSON get requests](http://haacked.com/archive/2009/06/25/json-hijacking.aspx).

To get around this, either make your JSON requests happen by POST, or change:

<pre class="brush: csharp; title: ; notranslate" title="">return Json(object);
</pre>

to

<pre class="brush: csharp; title: ; notranslate" title="">return Json(object, JsonRequestBehaviour.AllowGet); 
</pre>

Not too bad if you’ve only got a couple of instances, but if you’ve got Json coming out of your ears, it’s a pain to implement it everywhere. You can either derive yourself a controller object and override the default Json behaviour – or use a Visual Studio find and replace regex to change your Json responses for you:

<img src="/assets/images/2011/02/Screen-shot-2011-02-11-at-21.54.57.jpg" alt="" title="Screen shot 2011-02-11 at 21.54.57"   class="alignnone size-full wp-image-547" srcset="/assets/images/2011/02/Screen-shot-2011-02-11-at-21.54.57.jpg 483w, /assets/images/2011/02/Screen-shot-2011-02-11-at-21.54.57-300x278.jpg 300w" sizes="(max-width: 483px) 100vw, 483px" />

Unlike our Ruby, PHPing and Perl counterparts, regular expressions aren’t something that .NET developers tend to come across on a regular basis, and as such we often forget they’re lurking in the toolbox. Visual Studio find/replace has a reasonable regex mechanism, but it’s not perl standard. [Check the docs for details](http://msdn.microsoft.com/en-us/library/2k3te2cs(v=VS.100).aspx).

For reference – we know this isn’t best practice, but if you need a quick and dirty fix, this will do it.