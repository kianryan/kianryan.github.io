---
id: 353
title: .NET Website Builds Taking Forever?
date: 2010-09-21T17:45:42+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2010/09/net-website-builds-taking-forever/
permalink: /2010/09/net-website-builds-taking-forever/
syntaxhighlighter_encoded:
  - "1"
dsq_thread_id:
  - "982418008"
categories:
  - Code
---
I could kick myself for this one… The credit goes to a co-worker, who spotted this one straight off the bat.

I’ve got two projects at the moment which consist of a DAL, a website and an admin site. Pretty straightforward projects, with large quantities of content stored **in the website folder**_. When building the project on our CC.NET build server, through an msbuild exec, the website would appear to compile pretty quickly, and then sit around for _forever_ before finishing.

The guilty party is the precompiled site folder. When the site is being compiled, all the assets from the original site are being copied, including the several gig of content, which causes the process to hang for a minute or two while the files are copied. Move the files out from the website and hey presto, back to fifteen second compile times.