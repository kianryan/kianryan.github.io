---
layout: post
title: HU-017A RDA5807S FM Radio Kit
thumbnail-img: /assets/images/2023/06/23/rc2014_5mx.png
categories:
  - Making
tags: 
  - electronics
  - kit
  - soldering
thumbnail-img: /assets/images/2024/06/24/radio_shelf.jpg
---

I get asked for recommendations for practice soldering kits.

![HU-017A Radio Assembled](/assets/images/2024/06/24/radio_shelf.jpg)

Last Christmas I was surprised to find under my tree a soldering kit from 
my parents.  Really surprised.  I'm not sure if it they thought "oh, he'll enjoy making that" or "he needs more practice".  I'm 
taking it as the former and not the latter.

I had no idea how well it would go together, and it's been sat on my shelf for the past six months.

The kit consists of a PCB, components, acrylic housing and instructions.  You'll need standard basic electronics tools to assemble, 
and a relatively fine pitched soldering iron.  There are a couple of surface mount components, you'll need a soldering 
iron with temperature control and a fine enough pitch.  I assembled this using my Hakko and D tip, but a Pinecil would also 
be a perfect iron for this kit.

The instructions come in 26 steps, handle the soldering of the surface components and then the through hole.  They have 
translation errors, however are clearly illustrated and if you have some experience in soldering and electronics, I think 
are easy enough to follow.  There are online instructions, I felt the paper instructions were adequate.

The component quality is _fine_.  The acrylic pieces are well cut, the electronics components are mid-quality, and the 
mounting hardware is missing some plating.  This is a mass manufactured kit to a price point.  There are significantly 
higher quality kits available from the likes of [Pimoroni](https://shop.pimoroni.com/), [RC2014](https://z80kits.com/) or almost any vendor available on [Tindie](https://www.tindie.com/).
And I strongly encourage you to support those vendors. But I'm viewing this as a practice kit at practice pricing.

The finished radio will take either 5v via USB or 3V via 2xAA.  I find the radio very loud and noisy over USB, even at the 
lowest volume setting, but great on batteries.  It's audio and reception isn't as good as my little Sony portable, but still
adequate for radio.

Taking a look, this is a three part board - the RDA5807 is the radio itself, tiny thing that it is.  The microcontroller is doing 
tuning and interface duties and then there's some simple amplification.  Digging into the [RDA5807](https://cdn-shop.adafruit.com/product-files/5651/5651_tuner84_RDA5807M_datasheet_v1.pdf) 
is interesting, this chip can do RDS!

This is a great soldering practice project.  It contains a range of components, can be completed in a few hours, has 
pretty good instructions, and makes a functional item at the end.  It's also cheap, so unlike some of the more 
expensive practice projects, if there's a foul, it's not the end of the world.  If you need a source of step-up 
projects, I think this is an excellent kit.

The kits are easily available by searching for HU-017A on either Amazon or Ebay, priced around £13 at time of writing.

