---
id: 44
title: 'Building AJAX/AJAJ With JQuery and .NET – JQuery Support for VS.'
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
One of the main criticisms of the ASP.NET AJAX approach is the “all or nothing” attitude the components have regards callbacks and updates. This is both a blessing and a curse, for while the AJAX components are very easy to work with, they also introduce significant network overhead and come with their own set of caveats.

Microsoft recognised this, and realises there was a need for a set of Javascript tools as part of the .NET stack to provide better generic Javascript support and to provide some AJAX alternatives. Rather than design their own from scratch, Microsoft decided to provide support for the very popular [JQuery](http://jquery.com/) library. As of Visual Studio 10, JQuery will be distributed as part of the development kit, but for now you can get a head start with some early support released for Visual Studio 2008.

After the cut, we’ll discuss adding support for JQuery to Visual Studio.

<!--more--> First up, you’ll need to make sure you’re running 

[Visual Studio 2008 SP1](http://msdn.microsoft.com/en-us/vstudio/cc533448.aspx). Microsoft added some much needed Javascript support to Visual Studio with the release of 2008, but it was still a little patchy in places. Service Pack 1 resolves most of those problems and gives you a stable Javascript development environment with intellisense.

After this, you’ll need to install an [additional patch](http://code.msdn.microsoft.com/KB958502/Release/ProjectReleases.aspx?ReleaseId=1736) from Microsoft to add support for “Visual Studio documentation files”, documentation files designed to work with VS08 with a “-vsdoc.js” suffix.

Finally you’ll need to get the JQuery library and the documentation file and put them into your web project. I use a directory called “\_javascript” for the javascript for my projects, and put the libraries into a “lib” subfolder of the “\_javascript” subfolder.

Now you’ve got the outline of the project. Next we’ll discuss the architecture for the project and the components that make it happen.