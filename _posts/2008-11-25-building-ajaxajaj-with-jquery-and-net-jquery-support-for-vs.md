---
id: 44
title: 'Building AJAX/AJAJ With JQuery and .NET &#8211; JQuery Support for VS.'
date: 2008-11-25T21:26:19+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2008/11/building-ajaxajaj-with-jquery-and-net-jquery-support-for-vs/
permalink: /2008/11/building-ajaxajaj-with-jquery-and-net-jquery-support-for-vs/
ljID:
  - "93"
dsq_thread_id:
  - "268908158"
categories:
  - Code
---
One of the main criticisms of the ASP.NET AJAX approach is the &#8220;all or nothing&#8221; attitude the components have regards callbacks and updates. This is both a blessing and a curse, for while the AJAX components are very easy to work with, they also introduce significant network overhead and come with their own set of caveats.

Microsoft recognised this, and realises there was a need for a set of Javascript tools as part of the .NET stack to provide better generic Javascript support and to provide some AJAX alternatives. Rather than design their own from scratch, Microsoft decided to provide support for the very popular [JQuery](http://jquery.com/) library. As of Visual Studio 10, JQuery will be distributed as part of the development kit, but for now you can get a head start with some early support released for Visual Studio 2008.

After the cut, we&#8217;ll discuss adding support for JQuery to Visual Studio.

<!--more--> First up, you&#8217;ll need to make sure you&#8217;re running 

[Visual Studio 2008 SP1](http://msdn.microsoft.com/en-us/vstudio/cc533448.aspx). Microsoft added some much needed Javascript support to Visual Studio with the release of 2008, but it was still a little patchy in places. Service Pack 1 resolves most of those problems and gives you a stable Javascript development environment with intellisense.

After this, you&#8217;ll need to install an [additional patch](http://code.msdn.microsoft.com/KB958502/Release/ProjectReleases.aspx?ReleaseId=1736) from Microsoft to add support for &#8220;Visual Studio documentation files&#8221;, documentation files designed to work with VS08 with a &#8220;-vsdoc.js&#8221; suffix.

Finally you&#8217;ll need to get the JQuery library and the documentation file and put them into your web project. I use a directory called &#8220;\_javascript&#8221; for the javascript for my projects, and put the libraries into a &#8220;lib&#8221; subfolder of the &#8220;\_javascript&#8221; subfolder.

Now you&#8217;ve got the outline of the project. Next we&#8217;ll discuss the architecture for the project and the components that make it happen.