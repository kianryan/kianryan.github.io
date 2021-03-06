---
id: 216
title: 'Javascript Intellisense & jQuery.noConflict();'
date: 2009-05-07T16:38:48+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/05/javascript-intellisense/
permalink: /2009/05/javascript-intellisense/
ljID:
  - "128"
dsq_thread_id:
  - "348983465"
categories:
  - Code
---
I’ll make no bones about it, VS08 SP1’s Javascript Intellisense saves me from having to dive into the docs every five seconds. Not having that fingertip intelligence to my hand would probably cost me quite a bit of time each day. However, since I often end up using multiple frameworks in one project, I tend to use the jQuery.noConflict(); to avoid it conflicting with the other frameworks. Unfortunately, the moment you stick var $j = jQuery.noConflict(); into the top of your javascript file, your intellisense will break for the rest of your script. I’ve currently got two methods for handling this:

# 1 – Create a “preload” file

This is a small script that sits in between loading jQuery and loading your page scripts. All it contains is the following statement:

<pre class="brush: jscript; title: ; notranslate" title="">var $j = jQuery.noConflict();
</pre>

Save it as preload.js and you can then sandwich this in between loading the jQuery framework and loading the page scripts as so:

<pre class="brush: xml; title: ; notranslate" title=""><head>
    <script type="text/javascript" src="scripts/jquery-1.3.2.js"></script>
    <script type="text/javascript" src="scripts/preload.js"></script>
    <script type="text/javascript" src="scripts/whatever-you-want.js"></script> 
</head>
</pre>

In your actual work scripts, you can then reference jQuery and the preload using the standard VS reference notation:

<pre class="brush: jscript; title: ; notranslate" title="">/// <reference path="jquery-1.3.2.js" />
/// <reference path="preload.js" />
</pre>

Visual studio will have sorted out it’s type resolution for $j meaning that so long as you also have the jQuery .vsdoc file in the same folder as jQuery you get this glorious view:

![Noconflict](/assets/images/2009/05/noconflict.jpg)

The pros of this technique are that you can drop in new versions of jQuery at a whim and not have to worry too much about having to update preload.js. Of course the downside is that preload.js then needs to be sent to the client, with all the associated overhead of a get request.

# 2 – Append noConflict onto jQuery

There are those that will believe that the jQuery file is sanctimonious and should never be tainted by a developer’s touch. As it is I’m already using ASP.NET and cursed for all eternity, so how much worse could it be? So path two is pretty straightforward, open up the jQuery and jQuery.vsdoc files and add var $j = jQuery.noConflict(); to the bottom of the file. Again, this will sort out all the resolution gubbins while you’re working away in your own scripts.

Just remember that if/when you update your original jQuery files to also replace the noConflict statement at the bottom.