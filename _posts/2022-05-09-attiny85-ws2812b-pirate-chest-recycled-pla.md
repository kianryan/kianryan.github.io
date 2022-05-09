---
layout: post
title: An AtTiny85 and WS2812B Pirate Chest with Recycled PLA
thumbnail-img: /assets/images/2022/05/09/thumbnail.png
categories: Making
tags: 
  - attiny85
  - ws28128b
  - pirate
---

I was sent a sample of recycled PLA from [3D Tomorrow](https://3dtomorrow.com/).  They intentionally sent no print settings, looking to get 
feedback.  They didn't send a lot, but enough to make a couple of small models.  The material was 
uncoloured and translucent.  I didn't know where this project was going, but "crystal skull" kept rattling around my head.

![Sample of recycled filament from 3D tomorrow](/assets/images/2022/05/09/pla-spool.jpg)

I quickly spat out a temp tower and was slightly nervous, despite the evidence, of at printing at 190.  I've got a 
limited amount of this stuff, so if I screw up, I don't get a replay.  My first idea of a "Indiana Jones" crystal skull 
evolved to a fancy skull - and this [this design from Kimbolt](https://www.printables.com/model/61094-fancy-skull) 
caught my eye.

![Temperature tower](/assets/images/2022/05/09/temp-tower.jpg)

I printed 0.1mm layer height at 190oC, first layer at 195oC on a otherwise standard PLA profile.  It came out great, 
the detail looks superb and if you shine a light underneath it glows.

**It glows.**

![Close up skull photo](/assets/images/2022/05/09/skull-detail.jpg)

_Ah, I knew I was going to have to do something with this._

I've a stash of WS2812Bs from previous projects.  And a [Tiny2040](https://shop.pimoroni.com/products/tiny-2040?variant=39560012234835). 
It sounds like a good excuse to make those two talk. Except they don't want to.  Something keeps going wrong. 
So I add extra resistors, capacitors, still no joy.  I gave up on the Tiny2040 and switched to a AtTiny85 board I have hanging around. 
The AtTiny85 board is a clone of the DigiSpark AtTiny85 board and uses the same [DigiSpark board libraries in Arduino](http://digistump.com/wiki/digispark/tutorials/connecting). 
It takes a minute to get to get up and working, but now I'm working in more familiar territory.

Quick bit of sample code in Arduino ... and still no joy.  I then look at the strip of LEDs very *very* carefully and 
realise they're from a strip that's been living in the top of my toolbox.  There's a separate reel on a shelf that 
I've used for project builds.

Is it possible, they're different?

Yes, yes they are.  Quick switch, and the new ones spring straight to life and behave with no issues at all.  I make the 
decision that I've lost far too many hours, so I'm not switching back to the Tiny2040.  
You'll gain a life on another project, but for today - AtTiny85, I choose you.

[FastLED](http://fastled.io/) is an Arduino library for controlling addressable LEDs, and comes with a great ["fire" demo](https://github.com/FastLED/FastLED/blob/master/examples/Fire2012/Fire2012.ino).  
Unfortunately, whether it's my choice of microcontroller or the fact that I'm only running a short string of three LEDs 
- the demo doesn't want to work, and this is supposed to be a "quick" project that's rapidly eating up *way* too much time.  
I write some [quick and dirty Ardunio code](https://github.com/kianryan/attiny85-chest) that will mock intensity and colour 
changes across the three LEDs.  "It'll do" is becoming a motto of this project.

I then need a housing to pop my electronics in.  I've switched to [FreeCAD](https://www.freecadweb.org/) recently after I rage quit Fusion360.  FreeCAD 
vanilla is a highly frustrating experience for users coming from Fusion360, I'd argue it's fundamentally broken.  Luckily, 
[realthunder](https://github.com/realthunder/FreeCAD/releases) appears to have addressed almost all of those concerns in their build, and it fits my workflow nicely.

I threw together a gothic inspired chest that can house the AtTiny85 board, a small shelf for 3 WS2812Bs (rotated), 
and an aperture on top to reduce light leakage.  It press fits together.  [The models are available to download, with the original 
CAD model on Printables](https://www.printables.com/model/200463-lighting-chest-for-attiny85-board-and-3x-ws2812bb-) or via [GitHub](https://github.com/kianryan/attiny85-chest).

![Chest With Lid Open](/assets/images/2022/05/09/lid-open.jpg)

I can see the chest being a useful little set piece for a roleplaying game.  Anything can be mounted on top of the aperture, so long 
as it's translucent, and adapting it to use battery rather than microUSB for power should be trivial.

![Glowing Finished Chest](/assets/images/2022/05/09/glowy.jpg)

And, it's **piratey**, and **skully**, [well, yeah.](https://www.youtube.com/shorts/dihhxYVUel8):  

<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="600" height="800" type="text/html" src="https://www.youtube.com/embed/dihhxYVUel8?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0"></iframe>

