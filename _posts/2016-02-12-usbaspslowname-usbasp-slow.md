---
layout: post
title: USBAsp Too Fast?  Slow it down
date: '2016-02-12T06:56:48+00:00'
categories:
- Making
- Code
tags: []
tumblr_url: http://kianryan.tumblr.com/post/139166599996/usbaspslowname-usbasp-slow
---

If your USBasp has problems communicating, it may be due to too fast USB speeds.  Try this in your avrdude config files for an alternative:

```
usbaspslow.name=USBasp Slow  
usbaspslow.communication=usb  
usbaspslow.protocol=usbasp  
usbaspslow.program.protocol=usbasp  
usbaspslow.program.tool=avrdude   
usbaspslow.program.extra_params=-Pusb -B5
```
