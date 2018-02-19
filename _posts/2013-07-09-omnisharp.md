---
id: 988
title: 'Omnisharp &#8211; the Vim C# Plugin you&#8217;ve been waiting for'
date: 2013-07-09T20:33:26+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=988
permalink: /2013/07/omnisharp/
dsq_thread_id:
  - "1482307396"
categories:
  - Code
---
My current workflow involves three tools:

  * [ConEmu](http://code.google.com/p/conemu-maximus5/)
  * [Vim](http://www.vim.org/)
  * Visual Studio/Resharper

ConEmu is a console emulator, and I use it to run IISExpress, MSBuild, XUnit and Git.

Vim is used for most of my code editing.

Visual Studio is used for those jobs for which only Visual Studio will do. NuGet, Visual editing of EDMX files, etc.

Up until recently, if I ended up knee deep in classes I didn&#8217;t know, or if I needed to run around &#8220;Find Usages&#8221; and &#8220;Find Implementations&#8221;, I&#8217;d drop back in to Visual Studio. Then I found [Omnisharp](https://github.com/nosami/Omnisharp), while it was still in it&#8217;s infancy. Omnisharp hooks together Intellisense and a whole bunch of code tools and makes them available from within Vim.

If you write C#, it is possibly the most awesome plugin in the world ever.

There&#8217;s a bit of legwork to get it up and running &#8211; most of the hard work is done by an external server app which is run outside of Vim. Omnisharp has a launcher to run the server itself, but I&#8217;ve found that to be a little unreliable, and it&#8217;s a hell of a lot easier to just run it yourself.