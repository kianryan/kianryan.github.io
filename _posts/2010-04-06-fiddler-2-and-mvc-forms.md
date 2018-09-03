---
id: 313
title: Fiddler 2 and MVC Forms
date: 2010-04-06T08:51:01+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2010/04/fiddler-2-and-mvc-forms/
permalink: /2010/04/fiddler-2-and-mvc-forms/
syntaxhighlighter_encoded:
  - "1"
dsq_thread_id:
  - "177555306"
categories:
  - Code
---
I’ve been using ASP.NET MVC for a couple of projects now, and so far my assessment is lukewarm. I like it in that it lets me play with raw data and is increadibly powerful, extensible and testable. It does take quite a while to spin things up though, and you can end up in a headache of chase the forms. It’s quite likely I’ve not _quite_ got the hang of it yet, but that’s fine.

One tool that has proved invaluable to my understanding of forms, FormCollections and the noise going backwards and forwards between my app and the browser is [Fiddler 2](http://www.fiddler2.com/fiddler2/). It’s a proxy server with a UI over the top that lets you see the requests and responses that are sent between your web browser and server. It’s great to understand the shape of the data your sending to the formCollection, whether various fields are sending the right name, checking that JSON data as it’s coming back etc. In no respect should it replace testing, but it makes understanding the flow significantly easier.