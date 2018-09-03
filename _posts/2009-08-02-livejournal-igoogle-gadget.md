---
id: 255
title: Livejournal iGoogle Gadget
date: 2009-08-02T21:19:14+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/08/livejournal-igoogle-gadget/
permalink: /2009/08/livejournal-igoogle-gadget/
ljID:
  - "143"
dsq_thread_id:
  - "174926341"
categories:
  - Code
---
![Livejournal Gadget](http://www.orangetentacle.co.uk/iGoogle/livejournal.png)

For the past few weeks I’ve been using Google’s “iGoogle” service, a customisable home page with widget support. Gadgets are HTML/Javascript and fit in nicely with Google’s philosophy of everything on the cloud. If you’re running other chunks of Google Apps, such as Google Calendar or Google Reader, you’ll find iGoogle a nice unified dashboard to work from.

I’m an avid [LiveJournal](http://www.livejournal.com) [user](http://pteppic.livejournal.com), and have been since [January 2004](http://pteppic.livejournal.com/2004/01/21/), but the lack of portability of the friends page – arguably the most vital resource for a LiveJournal account has griped me. You can’t access entries as an RSS feed, and until a few days ago there was no _decent_ mobile solution.

This morning I received a nice e-mail from LiveJournal notifying users they’ve updated their mobile site to be more inline with the current crop of mobiles. It’s nice, displays full entries and has a straightforward UI. I like it. I liked it so much I wanted it on my iGoogle page.

So after a bit of griping with the [Google Gadgets](http://code.google.com/apis/gadgets/devguide_landing.html) documentation I finally came out with the following code which works quite nicely. I present it to you in all its majesty:

<pre class="brush: xml; title: ; notranslate" title=""><?xml version="1.0" encoding="UTF-8" ?>
 <Module>
   <ModulePrefs title="LiveJournal Friends"
        
        scrolling="true">
        </ModulePrefs>
   <Content type="url" href="http://m.livejournal.com/read/friends/"><br />
   </Content>
 </Module>
</pre>

Impressive, innit?

Strangely, although Google provide wizards and templates for generating boiler-plate gadgets they don’t provide a way for embedding remote HTML content. There’s probably a very good reason for that, but I’ll be damned if I know what it is at this time of night.

If you want to add the gadget to your own iGoogle page, click on the button below. If you know anyone who does use LiveJournal, pass it on.

[<img src="http://buttons.googlesyndication.com/fusion/add.gif" border="0" alt="Add to Google" />](http://fusion.google.com/add?source=atgs&moduleurl=http%3A//www.orangetentacle.co.uk/iGoogle/livejournal-gadget.xml)