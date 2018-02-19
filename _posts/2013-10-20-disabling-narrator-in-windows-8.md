---
id: 1102
title: Disabling Narrator in Windows 8
date: 2013-10-20T20:28:15+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=1102
permalink: /2013/10/disabling-narrator-in-windows-8/
dsq_thread_id:
  - "1880134359"
categories:
  - Code
---
It is far, far too easy to hit Windows-Enter and turn on the Narrator, especially when you&#8217;ve got shortcuts defined in Visual Studio for Alt-Enter and Ctrl-Enter.

To permanently disable starting the narrator, add the following registry key:

<pre class="brush: plain; title: ; notranslate" title="">HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT
    \CurrentVersion\Image File Execution Options\Narrator.exe
</pre>

Thanks to [David Zhang](http://www.dzhang.com/blog/2012/12/19/disabling-win-enter-narrator-hotkey-in-windows-8) for this one.