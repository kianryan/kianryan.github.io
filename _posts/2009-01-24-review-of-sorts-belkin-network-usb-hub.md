---
id: 89
title: 'Review (of sorts): Belkin Network USB Hub'
date: 2009-01-24T18:42:08+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/01/review-of-sorts-belkin-network-usb-hub/
permalink: /2009/01/review-of-sorts-belkin-network-usb-hub/
ljID:
  - "108"
ljxp_comments:
  - "0"
ljxp_privacy:
  - "0"
dsq_thread_id:
  - "174926230"
categories:
  - Photog
---
<img class="alignleft size-full wp-image-92" title="Belkin Network USB Hub" src="/assets/images/2009/01/thn1001_f5l009.gif" alt="Belkin Network USB Hub" width="100" height="100" />The curse of a digital workflow is getting things to play nicely from end to end. If I decide I&#8217;m processing a photo on the Mac, then I need to scan the negative, edit the photograph and print it back out at a quality that isn&#8217;t going to make me wince every time I look at it.

This is harder than it looks for B&W, but so far we&#8217;re having success with the combination of an [Epson Perfection V700](http://www.epson.co.uk/products/scanners/Perfectionv700Photo.htm) scanner, [Vuescan](http://www.hamrick.com/), [Photoshop Elements 6](http://www.adobe.com/products/photoshopelmac/) and the [Epson R1900](http://www.epson.com/cgi-bin/Store/consumer/consDetail.jsp?oid=63073901) printer. The pigment inks of the R1900 are a vast improvement on the dye inks of previous generations, and B&W prints look almost passable.

The downside was that all devices required me to be rooted in a single place. Photography is my hobby, and since my home office is also my day work space I don&#8217;t relish the thought of being stuck in there every evening waiting for scans to finish (no matter which way you try it, you always end up scanning frame by frame) or waiting for A4/A3 prints to complete (which do take rather a long time). I wanted to be in a position where I could load the scanner with two sets of 120 and sit comfortably in front of the fire, controlling my scanning and other functions from there.

We tried popping the R1900 onto the print server, only to find that we appeared to lose control is sending colour configuration and other settings to the network printer. It was ok, but not great for producing high quality, high accuracy output. As to the scanner, all the solutions we could find (USB over network client/software) were starting at £100, which felt too much to spend on a &#8220;convenience&#8221;.

I fielded my needs to [GeekUp](http://geekup.org/), and [Tim Nash](http://www.timnash.co.uk/) replied with the suggestion of a [Belkin USB Network Hub](http://www.belkin.com/uk/networkusbhub/). I must admit to being pleasantly surprised.

<!--more--> The Belkin USB Network hub is a thin, discreet black box with five USB ports, two to front and three to rear. A small, unobtrusive green LED no larger than a pin head to the front lets the user know that the unit at least has power. The unit is connected to your nearest switch and if you&#8217;re running DHCP that&#8217;s about it. All you need to do then is install the client software. Belkin promise us that it&#8217;s that simple.

As a bit of background, device over network is something I&#8217;ve had to deal with a few times before, usually as a purely client/server software solution. In a previous life I was responsible for maintaining a series of serial ISDN modems connected to a number of machines for the expressed purpose of a certain piece of banking software. The software failed regularly, the modems hung when they felt like it and some days you felt like the universe was simply trying to make your life difficult.

So I was ready for a battle when I plugged in the Belkin hub this morning. I was armed with network monitors, had meters of ethernet cable at the ready, and by jove it was going to work.

I plugged the scanner and printer into the hub, plugged all three into the four-way, and plugged the ethernet cable into the nearly full ten-port switch sat behind my bank of servers. The little light on the front of the unit came on, and I was ready for the battle on my laptop with the client software.

The drivers on the disc proved to be the first stumbling point. Support for OS X was available from the website so I off I went to [grab the drivers](http://www.belkin.com/uk/support/article/?lid=enu&pid=F5L009uk&aid=9174&scid=0). &#8220;Humm, potential driver hell&#8221;, I thought and steeled myself against the odds. The drivers wanted to reboot the Mac. Again, we were ready for hell. We were ready for corrupted Leopard installs, we were ready for network connections to explode on sight, we were ready for anything&#8230;

&#8230;except for the Belkin USB Hub Control Centre to elegantly launch on start and cheerfully inform me that there was a printer and scanner present and would I like to connect to them. Still not convinced this was going to go well, I was determined there would be problems with the installation drivers for the devices. &#8220;It&#8217;s not going to be convinced these are local devices&#8221;, kept running through my head so I was again surprised when Vuescan happily said &#8220;oh look, scanner!&#8221; (Vuescan is notoriously fussy over USB devices) and Printers went &#8220;cricky! a R1900, best install the drivers chief!&#8221;. It couldn&#8217;t have been any more painless. And yes, OS X Printers speaks to me in a [Penfold](http://en.wikipedia.org/wiki/Penfold_(character)#Heroes) voice.

By now, paranoia had set it. It had all gone far too well. It couldn&#8217;t carry on like this surely? So far, the Mac was more than happy that a local printer and scanner existed on the system and it was behaving. Almost lulled into a false sense of security I realised that at this point I had forgotten one small detail. Speed. A USB 2 device has a theoretical maximum speed of 480Mbit/s, the wired network could only reach a paltry 100Mbit/s. Of course, here would be the problem! The performance would be so slow, no way in _hell_ would it be sensible to use on a long term basis.

<img class="alignright size-medium wp-image-93" title="Statue From Vatican" src="/assets/images/2009/01/rome-198x300.jpg" alt="Statue From Vatican" width="198" height="300" srcset="/assets/images/2009/01/rome-198x300.jpg 198w, /assets/images/2009/01/rome.jpg 640w" sizes="(max-width: 198px) 100vw, 198px" />So in went one of my negatives from Rome, and I hit the magic to scan at 3200 dpi (I usually run at 4800 dpi for 35mm). I sat back, expecting this to take the better part of the year. Two pass scanning with multi-exposure. I had you now!

Or at least it would have done if it hadn&#8217;t taken around six minutes. Normally I would budget around five minutes for that kind of a scan, with the device attached locally. Admittedly, it&#8217;s down by around 1000dpi, but still that&#8217;s not a hell of a lot of extra information. It held up well.

Printing was just as pleasant. I printed it out at a measly 6&#215;4 (we&#8217;re running a little low on ink). Unlike hooking it up via a print server, it honoured the colour settings, the ICC profile and the other little niceties and printed as I was hoping for first time. Speed was again, not a problem.

It is true that most photographers work in a one scanner, one printer per person environment. But for those instances where sharing resources is needed, the usual provision of network printing tools has always been short of the mark. Inkjet printers lose flexibility when run as network devices. Scanners so far have had very little to no option for being run over a network. Existing USB sharing solutions are designed for large enterprise environments and Geeks (capital G), not those who just want to get on with it. The Belkin Network Hub is small, discreet and provides that &#8220;local&#8221; effect to get the most out of your hardware. Software solutions charge significantly more for significantly less, and this device means you don&#8217;t need to keep a server ticking over to support it all. It just works.

Brilliant.