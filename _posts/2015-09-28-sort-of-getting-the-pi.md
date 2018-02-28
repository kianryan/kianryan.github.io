---
layout: post
title: Sort of Getting the Pi
date: '2015-09-28T07:06:11+01:00'
categories: Making
tags:
- raspberrypi
tumblr_url: http://kianryan.tumblr.com/post/130054446051/sort-of-getting-the-pi
---
I’m running tech and DT for the Manchester Cadet next weekend.

One of the things we were asked to look in to this year was streaming the event.  There’s a number of ways to do this, ranging from hiring camera crews and per piste cameras through to cheap webcams showing the entire venue.

I also needed some kind of box to capture the feed and push it somewhere useful, say Youtube Live.

There’s a off the shelf devices that can do this, but they tend to start and more than pennies and go to OMG-lots.  This is a first year test, we simply want to see how it works.  So I ordered a Pi, a case and a Pi Camera.

I’ve not really used a Pi previously.  I’ve not had a need.  I have a big machine that I use to do programming on, and if I want to do embedded-type things I tend to lean towards Arduino.  But I needed more than an Arduino and less than a full PC, so I Pi it is.

And I think I sort of get it now.

There’s a few distinct advantages to the Pi platform:

1. Cost.  It’s practically disposable.  Board, camera, and case cost me ~ 50 GBP.  If something happens to it, I’ll be annoyed, but not … painfully upset.  Because I need two, I can just order another set of components for not much cash.
2. Modularity.  I have two Micro-SD cards.  The first one, an 8GB is running Raspbian, with a few scripts on to start the camera and stream to Youtube live.  It’s configured to run on the network that’s sat next to me on boot, which I can then access via ssh.  The second one, a 16GB SD card, is rigged for fun, and is running RetroPie with a whole load of ROMS.  We killed a couple of hours last night having fun playing old SNES games with a 360 controller.  Switching between these two very distinct functions simply involves removing the camera, and changing the MicroSD card.  Superb.
3. Cloneability.  I need a second camera.  I just buy a second set of components, clone the MicroSD (which should take a whole five minutes) and I have a complete, second unit.  Oh, and quickly change the second static IP address.
4. Dispos…ability?  I screwed up the first attempt at getting the camera working.  All I did was clone a new SD card, and we were going again.

There’s other advantages with HATs, shields, GPIO, electronics.  Cool.  But as a basic “throw it together” platform to solve problems[tm], it’s superb.  And a lot of fun.

When this event is over, one is going to be used more pernamently for emulation, the other may become a holiday cat-camera or some such.  More ideas to come.
