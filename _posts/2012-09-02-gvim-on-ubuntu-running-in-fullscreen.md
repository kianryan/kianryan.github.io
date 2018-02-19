---
id: 770
title: 'gVim on Ubuntu &#8211; Running in Fullscreen'
date: 2012-09-02T15:51:46+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=770
permalink: /2012/09/gvim-on-ubuntu-running-in-fullscreen/
dsq_thread_id:
  - "828046192"
categories:
  - Code
---
I admit, I am a fan of working in full-screen. Whilst coding, or writing I don&#8217;t want to see anything else unless I explicitly ask for it. If I want the time, or to see the screaming requests of clients I will make the point of switching to that information.

I love my Vim. I love Vim to the point of a scary obsession. I use it on Windows, I use it on OS X and I use it on Linux, both terminal and desktop.

But I have a confession to make. gVim on Ubuntu Desktop has been &#8230; upsetting me. You see, on OS X when I full-screen MacVim, OS X&#8217;s chroming disappears, the application full screens elegantly, and I am left in black bliss. In Windows, I&#8217;ve managed the same with the help of a [little plugin](http://www.vim.org/scripts/script.php?script_id=2596).

But Ubuntu, Ubuntu. How my heart weeps for thee. My first forays into black screen bliss left me with this:

<a href="http://www.kianryan.co.uk/2012/09/gvim-on-ubuntu-running-in-fullscreen/screenshot-from-2012-09-02-163736/" rel="attachment wp-att-784"><img src="/assets/images/2012/09/Screenshot-from-2012-09-02-163736-300x187.png" alt="" title="gVim-Max-Chrome"   class="aligncenter size-medium wp-image-784" srcset="/assets/images/2012/09/Screenshot-from-2012-09-02-163736-300x187.png 300w, /assets/images/2012/09/Screenshot-from-2012-09-02-163736-1024x640.png 1024w, /assets/images/2012/09/Screenshot-from-2012-09-02-163736.png 1440w" sizes="(max-width: 300px) 100vw, 300px" /></a>

Title bar across the top, and what on _earth_ is going on in the bottom right? My delicate eyes can not suffer the indignity of this working environment. But what to do, what to do?

## Window Background

The problem in the bottom right is down to the gtk background leaking over, since gVim&#8217;s window size calculation is based on the number of lines displayed. The maths makes sense, but it is still an affront to the eyes. A small addition to the .gtkrc-2.0 file resolves this:

<pre class="brush: plain; title: ; notranslate" title="">style "vimfix" {
  bg[NORMAL] = "#1d1d1d" # Set the background to your vim theme background.
}
widget "vim-main-window.*GtkForm" style "vimfix"
</pre>

(Thanks to [this post](http://askubuntu.com/questions/47831/how-to-remove-gVims-fat-bottom-border-and-resize-grip) on Ask Ubuntu for help with this)

## Running In Full-screen

Removing the chroming involves running gVim in full-screen mode, which Unity supports but does not make straightforward. Depending on whether you&#8217;re running Unity or Unity 2D, you&#8217;ll need two different approaches:

## Unity

Install the CompizConfig Settings Manager and Comiz Plugins Extra with the following:

<pre class="brush: bash; title: ; notranslate" title="">sudo apt-get install compizconfig-settings-manager compiz-plugins-extra
</pre>

Open CompizConfig Settings Manager -> Extra WM Actions -> Toggle Full-screen Set a shortcut you&#8217;re comfortable with. I use Ctrl+F11.

## Unity 2D

Open the Keyboard Settings Panel -> Shortcuts -> Windows (on left list) -> Toggle Full-screen Mode

Set a shortcut you&#8217;re comfortable with. I use Ctrl+F11.

Finally, switch back to gVim and smack that key combo. Watch the rest of the world fade away.

If everything has gone to plan, you too should be staring into the black (or colour of your choice) abyss.

<a href="http://www.kianryan.co.uk/2012/09/gvim-on-ubuntu-running-in-fullscreen/screenshot-from-2012-09-02-163821/" rel="attachment wp-att-783"><img src="/assets/images/2012/09/Screenshot-from-2012-09-02-163821-300x187.png" alt="" title="Screenshot from 2012-09-02 16:38:21"   class="aligncenter size-medium wp-image-783" srcset="/assets/images/2012/09/Screenshot-from-2012-09-02-163821-300x187.png 300w, /assets/images/2012/09/Screenshot-from-2012-09-02-163821-1024x640.png 1024w, /assets/images/2012/09/Screenshot-from-2012-09-02-163821.png 1440w" sizes="(max-width: 300px) 100vw, 300px" /></a>