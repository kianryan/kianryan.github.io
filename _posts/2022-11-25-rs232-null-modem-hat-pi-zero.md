---
layout: post
title: RS232 and Null Model HAT for the Pi Zero
thumbnail-img: /assets/images/2022/11/25/PiRS232_v2_layout.png
categories:
  - Making
  - Code
tags: 
  - making
  - psion
  - raspberrypi
  - rs232
  - serial
---

>  __Sponsored Post:__ - [PCBWay](https://www.pcbway.com/) [(pronounced PCBWaaaaaaaayyyyyy)](https://www.youtube.com/watch?v=XKkCs2y9fQ8), reached out and asked if I had any 3d printing projects 
>  they could help with.  I said no, but I did have an electronics project I needed PCBs for.  They kindly sponsored the first 
>  iteration of PCBs for this project.

I wanted a tidier solution to the [kludge of connectors that I was using to connect my Psion to a Pi](2022-06-13-connecting-a-psion-to-a-raspberry-pi-with-serial/).  My shopping list involved RTS/CTS, and optional crossover/null modem ,which ruled out some of the existing boards such as the [Serial PiZero](https://thepihut.com/products/serial-pizero).  So, it looked like I was going to end up designing my 
own board.  At the same time, PCB reached out asking if I had any 3D printing projects they could help me with.  I asked 
if they could help with an electronics project instead, and they agreed to supply a batch of PCBs.

I'm now designing PCBs in [Kicad](https://www.kicad.org/), and the PCB design uses [Mike Lawrence's Raspberry Pi Zero uHat template](https://github.com/mikelawrence/RPi_Zero_pHat_Template).  Since the Pi runs from 3V, I chose the low power [SP3232EEP in a DIP package](https://assets.maxlinear.com/web/documents/sipex/datasheets/sp3222e_sp3232e.pdf) over the [MAX232](https://datasheets.maximintegrated.com/en/ds/MAX220-MAX249.pdf) which requires 5V.  Unfortunately, the SP3232EEP is _discontinued_, but there 
are still chips available via Ebay.  I _quickly_ put together a first draft of the board.  I probably should have taken a 
bit longer.

![This is actually the layout for PiRS232 V2, I didn't have a capture for V1](/assets/images/2022/11/25/PiRS232_v2_layout.png)

Usually, I would export the Gerber files manually and send them to whoever was making the board, but since PCBWay were 
being so nice, I used their [plugin directly from Kicad](https://github.com/pcbway/PCBWay-Plug-in-for-Kicad).  One click from the project and it opened directly in the basket 
ready for verification and payment.  It was honestly seamless.

![One click - ready to order in PCBWay](/assets/images/2022/11/25/PCBWay_purchase.png)

The PCBs arrived before the chips did, so when I had all the parts, I spent a morning putting together ... the ... nope. 
Something is definitely up.  I've mirrored the DB9 connector.  Okay, well, we'll work around that.  Fine.  Erm, this 
pin out is ... wrong.  Wait, it's the wrong DIP package - did I use the MAX232 data sheet when putting this together?  Oh Gods. 
Right, well I can bodge wire a few of those to the right pins as well...

![PiRS232 V1 - This chip doesn't fit](/assets/images/2022/11/25/PiRS232_v1_wrong_chip.jpg)

Behold, the unfortunate version 1.

![PiRS232 V1 - Kludge Special](/assets/images/2022/11/25/PiRS232_v1.jpg)

I am ashamed.

However, it works.  So, we put all the revisions in to a version 2 and this time, I paid for the boards myself, since ... my fault.  
Still used PCBWay, still used the plug-in from KiCad, boards still turned up in around a week.

![PiRS232 V2 - PCB](/assets/images/2022/11/25/PiRS232_v2_pcb.jpg)

Version 2 was a *significant* improvement.  Not only do all the components fit on board, but it works *and* it supports CTS/RTS and optional null-modem.  This board is suitable for a range of RS232 projects.  [The files to make your own boards are available from Github.](https://github.com/kianryan/PiRS232)  For details on how to make it talk to the Psion, [see my previous post](2022-06-13-connecting-a-psion-to-a-raspberry-pi-with-serial/).

![PiRS232 V2 - PCB](/assets/images/2022/11/25/PiRS232_v2_working.jpg)
