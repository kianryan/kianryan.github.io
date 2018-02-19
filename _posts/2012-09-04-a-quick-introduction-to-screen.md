---
id: 810
title: A Quick Introduction To Screen
date: 2012-09-04T11:49:50+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=810
permalink: /2012/09/a-quick-introduction-to-screen/
dsq_thread_id:
  - "830420875"
categories:
  - Code
---
By popular request, I&#8217;ve been asked to write a quick introduction to screen. Screen is a terminal window manager, that allows you to run multiple shell windows concurrently from a single connection. In summary, you can do this:

<a href="http://www.kianryan.co.uk/2012/09/a-quick-introduction-to-screen/screenshot-from-2012-09-04-125130/" rel="attachment wp-att-826"><img src="/assets/images/2012/09/Screenshot-from-2012-09-04-125130-300x187.png" alt="" title="Example of Screen Usage - IRC, Vim and Top" width="300" height="187" class="aligncenter size-medium wp-image-826" srcset="/assets/images/2012/09/Screenshot-from-2012-09-04-125130-300x187.png 300w, /assets/images/2012/09/Screenshot-from-2012-09-04-125130-1024x640.png 1024w, /assets/images/2012/09/Screenshot-from-2012-09-04-125130.png 1440w" sizes="(max-width: 300px) 100vw, 300px" /></a>

Some common scenarios for using screen:

  * Editing source code and running tooling or debuggers next to each other.
  * Keeping a stable working layout environment on a remote box that you can connect/disconnect to at will.
  * Keeping a long-running IRC session.
  * Pair programming on Vim or Emacs over geographically distinct locations using SSH.

For reference &#8211; GNU documentation is [available here](http://www.gnu.org/software/screen/manual/screen.html), and the [Default Key Bindings](http://www.gnu.org/software/screen/manual/screen.html#Default-Key-Bindings) are available here.

## Install Screen

OS X comes pre-packaged with a version of screen, any sensible version of a Unix based operating system will too. If you&#8217;re on Ubuntu, and screen appears to not be installed (this surprised me):

<pre class="brush: plain; title: ; notranslate" title="">sudo apt-get install screen
</pre>

Screen does appear to be availible with [Cygwin](http://www.cygwin.com/), if you want shell and screen functionality on Windows.

## Starting Screen

This is not rocket science. You need to start screen before you can start working in screen.

<pre class="brush: plain; title: ; notranslate" title="">screen
</pre>

All good, you should get a copyright message. When you clear the message&#8230; nothing looks to have changed, you&#8217;re staring at a terminal again. This is fine, and as it should be. You&#8217;re now inside a window inside of screen, just the one for now. It can get a bit meta after this.

## Concepts

Screen keeps track of a number of windows. Each window is a shell instance in its own right, which may or may not be attached to a region. You many have multiple windows running at any one time, in a multiplex of vertical and horizontal regions. Each window can be switched to any of the regions.

Most commands within screen start with Ctrl-A. This is the default keymapping and can be changed in a configuration file or at the time of starting screen.

## Windows

  * Add a Window &#8211; Ctrl-a a
  * Kill a Window &#8211; Ctrl-a k (If possible, exit terminal normally)
  * Detach Screen &#8211; Ctrl-a d (Leave running in background)



  * List all Windows &#8211; Ctrl-a &#8220;
  * Set Title For Current Window &#8211; Ctrl-a A (Useful for keeping track)
  * Switch current Region to Window [n] &#8211; Ctrl-a [n]

When a window is detached, it is still running in the background. If you are ssh-ing to a remote box, and running screen on the remote box, your screen window will continue to run if your session becomes disconnected. This can be a gods-send on train journeys.

Screens can be reattached at the terminal, before screen is started.

<pre class="brush: plain; title: ; notranslate" title="">screen -list
</pre>

Will give a list of all running screens. Running:

<pre class="brush: plain; title: ; notranslate" title="">screen -dr [id]
</pre>

Will then reattach the window with the given id. Running the above without the id will attach the first non-connected screen.

## Regions

Regions are the mechanism which allow you to display multiple windows simultaneously. The are achieved by &#8220;splitting&#8221; the current region and then selecting the window (Ctrl-a [n]) to display. You can switch between the regions on display using Ctrl-a Tab, the man page also discusses mappings for move intuitive movement.

  * Horizontal Region Split &#8211; Ctrl-a S
  * Vertical Region Split &#8211; Ctrl-a |
  * Kill the Current Region &#8211; Ctrl-a X



  * Switch Focus To Next Region &#8211; Ctrl-a Tab

## More

This is just a quick introduction to whet your appetite. There&#8217;s more to be had from screen, and the [man page](http://www.gnu.org/software/screen/) is a good place to start, as well as a [whole Google of search results](https://www.google.co.uk/search?q=gnu+screen). Screen is a remarkably flexible tool. As an example, a friend of mine has discussed the way their company pair programmes using a screen session to view another user&#8217;s screen session. All working over ssh using no more fancy tooling than a standard Linux box.