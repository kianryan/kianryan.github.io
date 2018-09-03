---
id: 280
title: 'Guathon – After Tea'
date: 2009-09-29T15:44:35+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/09/guathon-after-tea/
permalink: /2009/09/guathon-after-tea/
ljID:
  - "153"
dsq_thread_id:
  - "174926367"
categories:
  - Code
---
Here we go Visual Studio 2010  ASP.NET 4.0

  * Lots of content _not_ being covered. At least he’s clear about this.
  * Now built on WPF – woof. Multi monitor support.
  * Demos being done on the MVC codebase ð
  * Code navigation – select param, highlights all instance usages. 
  * Intellisense – Mid term search, no longer need to type start of term. Filters based on camelcasing _woot_. Someone has been using Quicksilver.
  * Oh dear – resharper is in trouble. Navigate to – “goto Type”. Although now quite as neat – needs keyboard interaction.
  * View call heirarchy – more Resharper features ð (althought being able to keep searches around is a nice feature.
  * Col based code selection as well as line selection.
  * TDD support – “Consume First”, stops intellisense from attemting to autocomplete when writing not-yet-existing classes. Then becomes aware of class and allows you to define/work with properties. Nice.
  * TDD support – generate class (wait – this wasn’t in 08? More resharper?)
  * MY GODS – 2010 really is 2008 + Resharper (so far). Remind me to reiterate my love for Resharper.
  * CodeSnippets in VS2010 feel like completion in TextMate. Nice mechanism. Extended for ASP.NET, download extra snippets.
  * #scottgufact – Scott Gu works at Redmond, you don’t.
  * Debug history – useful landmarks in lifecycle. 
  * Historic debugging – allows step forward/step _back_ through source code.
  * Test tool – run on client, captures information on state of crash. Sends state back to developer. Developer can debug _from the state of the crash_. That’s pretty damn neat. Can also capture screenshots/video.
  * .NET 4.0, new version of CLR (guessing because of dynamics, etc).
  * Visual Studio 2010 filters intellisense and properties for target framework. Uses reference libraries.
  * ASP.NET 4 – emphasis on clean HTML and SEO (routing, user configurable ClientIDMode), etc.
  * Are we back on web apps vs web sites? (Scott jumped straight to web app rather than web site).
  * New web app template looks good. Jquery, logins, etc included out of the box. Very nice.
  * ClientIdMode – Predictable is the new black (and will save front end developers having migraines when given ASP.NET apps).
  * CSS rendering for controls – YES! THE TABLES ARE BANISHED! RenderTable=false
  * Finer grained control over the viewstate.
  * Improvements coming to the WYSIWIG designer – who uses the designer for ASP.NET? Really?
  * Routing support for ASP.NET 4 – quite elegant ð Page.RouteData.Values. Doesn’t to URL rewriting, more subtle mechanism.
  * IIS SEO Toolkit. Analysis tool for SEO optimisation of sites. Target site does not need to be running on IIS. Can perform some optimisations to IIS sites – hence linked to IIS manager.
  * It looks like VS 2010 javascript support no longer sucks. A seriously robust engine. Involves intellisense which can keep track of quite impressive object definition at design time. Woot!
  * ASP.NET Ajax – new things for those people that use it (I’ve never got on with it). 
      * ADO.NET Entity Framework – more T4 support _good_. Model first and POCO to boot.
  * Apparently LINQ 2 SQL is not dead – improvements coming. I remain sceptical.
  * Design surface no longer has a “dump and replace” attitude. This may rendel DBML Tools redundant.
  * Inbuilt fake support, reliance on T4 – looks like MS is buying hard into T4 for code gen. I see this as a positive thing.
  * I admit – the chart control is cute ð
  * WAIT? Multiple config file support – build config dependant. I do this already! I will no longer be special! Don’t like deployment support from within VS, prefer to do it clean from a build server.
  * Release specific configs only contain overwrites – this is useful.
  * If you can tie the Deployment Projects up with build servers (I’m looking at you CCNet), you’ve got a rather powerful test  deployment environment.
  * Seriously folks – this is one of the really nice things…

[Please note these posts are done from my G1. Typos and errors may/will/are included].

<div align="left">
</div>