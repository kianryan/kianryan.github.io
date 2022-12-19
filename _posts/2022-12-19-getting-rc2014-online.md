---
layout: post
title: The Rough and Ready Guide To Getting Your RC2014 Pro Online
thumbnail-img: /assets/images/2022/12/19/psion_sidecar_rc2014.png
categories:
  - Making
tags: 
  - rc2014
  - dual serial
  - dual clock
---

Back in t'day (drops 20p in t'swear jar), before the advent of the Internet 
as we know it in its current form, computers talked to each other using BBS 
software and terminal programs.  You dialled the remote machine, the modem 
on the other side would pick up and a conversation would ensue, machine to machine.

The internet abstracted all this away, and we moved towards a model where your 
computer connected to an Internet Service Provider, and then all your traffic is 
routed over a global network of connected machines.

The [RC2014 is a Z80 based modular kit computer](https://rc2014.co.uk/), comes in a few flavours.  To 
connect one up to a BBS, you're going to need a [dual serial card](https://rc2014.co.uk/modules/dual-serial-module-sio2/) and a [dual clock card](https://rc2014.co.uk/modules/dual-clock-module/), 
which means you're most likely going to need either a [Pro](https://z80kits.com/shop/rc2014-pro/) or [Zed Pro](https://z80kits.com/shop/rc2014-pro/) kit.

For my adventures, I'm using two FTDI Serial TTL-232 USB Cable adapters.  I'm going to strongly 
recommend these [no-nonesense ones that work everywhere](https://thepihut.com/products/ftdi-serial-ttl-232-usb-cable) and have a fixed header order 
.  Blinken-lights give you an idea of traffic, and there's no messing around with pin order.  Just have a couple around, they're great.

We're also going to be working in [CP/M](https://en.wikipedia.org/wiki/CP/M), and using the 
[SIO/2 patched version of QTerm](https://git.imzadi.de/acn/qterm) from Anna Christina. 
Download the binary labelled QTERM82.COM, and transfer over to your CP/M system 
- [RC2014 filepackeger works great for single files](https://rc2014.co.uk/filepackage/).

We're going to set-up a fake modem on serial using [this fork of tcpser](https://github.com/FozzTexx/tcpser). 
Tcpser is a [Hayes modem](https://en.wikipedia.org/wiki/Hayes_Microcomputer_Products#:~:text=Hayes%20was%20a%20major%20brand,introducing%20models%20with%20higher%20throughput.) emulator that uses TCP/IP for incoming/outgoing connections. 
It sits on a box, listens for modem commands over serial, and acts as a tunnel to our destination.

I'm using the [Sidecar](2022-11-28-psion-sidecar-ppp-modem-and-terminal/) to run tcpser, but any linux box should do.  [It /may/ work with WSL.](https://www.kianryan.co.uk/2022-04-09-serial-on-windows-subsystem-for-linux-wsl/)

![RC2014 connected to Sidecar over FTDI](/assets/images/2022/12/19/psion_sidecar_rc2014.png)

Clone tcpser, make and build.

```bash
apt install git
git clone https://github.com/FozzTexx/tcpser.git
cd tcpser
make
cd ..
mv tcpser /opt
```
I've moved it to opt, and created a /opt/tcpser/start_tcpser.sh script based on this one from the [pimodem project](http://podsix.org/articles/pimodem/):

```bash
#!/bin/bash

phonebook="/home/pi/phonebook.txt"
baud='9600'
dev='/dev/ttyUSB0'

for i in `cat $phonebook`; do
	n="$n -n$i "
done

/opt/tcpser/tcpser -l4 -s ${baud} -d ${dev} $n

```

Finally, we need a phonebook of "numbers" to dial.  Each number will correspond 
to a BBS server address.  Let's create that in `/home/pi/phonebook.txt`:

```
5551000=bbs.fozztexx.com
5551001=wintermutebbs.ddns.net
5551002=rc2014.ddns.net:2014
```

Now we can configure the hardware.
*  **On the dual clock card, set "Clock 2" to 0.6144** *(6th jumper from left)*. 
This will tell the second clock to use a speed of 0.6144Mhz.
* **On the dual serial card, remove the "Port 2 clock" jumper.**  This will tell 
the dual serial card to take its clock speed from Clock 2.  This will translate 
to a port speed of 9600bps.
* **On the dual serial card, connect your second FTDI cable to port 2 
and the other side to your intended modem**.

I would recommend performing the following steps to make sure that your "modem" 
can communicate with your RC2014 at the hardware level before proceeding with 
running tcpser.

On your modem, install minicom, and run it at 9600bps, flow control on, pointing 
to your FTDI cable.

```bash
apt install minicom
minicom -s
minicom -c on -b 9600 -D /dev/ttyUSB0
```

On your RC2014, run QTERM82:

```
E>QTERM82
QTERM  V4.3f
(C) Copyright  DPG  1991 - All rights reserved
Version for RC2014 SIO/2 - VT100
Escape character is ^Y

```

Entering text in to one, *should* result in text appearing in the other.  And 
vice-versa.  Anything wrong in the hardware set-up will result in garbage 
or nothing.

![Serial Test showing both devices talking to each other](/assets/images/2022/12/19/hardware_test.png)

Quit minicom on your modem and start your tcpser script:

```bash
/opt/tcpser/start_tcpser.sh
```

The modem should initialize and wait for commands.
Type `AT` and wait for the OK response:

```
AT
OK
```

Now type ATDT followed by one of the numbers from your phonebook:

```
ATDT5551002
```

From the above, this should connect you with RC-BOX, a BBS hosted on another RC2014.

![RC-BOX - RC2014 Hosted BBS](/assets/images/2022/12/19/rc_box.png)

You are now talking with the computer located at `rc2014.ddns.net:2014`.  Enjoy.

If you want to talk to another computer, first you'll need to hang up the connection 
to this one.  Type `+++` first, wait for the `OK` and then type `ATH`, followed by return. 
This will hang up the connection and leave you ready to start the next session.

## Go Forth And Explore

BBSs are very much alive.  [The Telnet BBS Guide](https://www.telnetbbsguide.com/) is a great place 
to start for BBS exploration, and you can explore these BBSs directly from your own browser, 
via telnet (often via SSH), as well as using new build (such as the RC2014) or retro machines.

If you're looking for places to go and play:


![Wintermute BBS](/assets/images/2022/12/19/wintermute.png)

[Wintermute BBS](https://www.telnetbbsguide.com/bbs/wintermute-bbs/) : English and German BBS, colourful, messages, games, news.  A good 
introduction to BBSes.

![RC BOX BBS](/assets/images/2022/12/19/rc_box.png)

[RC-BOX](https://www.telnetbbsguide.com/bbs/rc-box/) : BBS running on RC2014 hardware.  Messages and limited CP/M system with games.

![The Cave](/assets/images/2022/12/19/cave_game.png)

[The Cave](https://www.cavebbs.com/) : Messages, games, quite a /few/ games.  Interesting to see what you *can* 
do on a BBS.

![Level 29](/assets/images/2022/12/19/level_29_spaceinvaders.png)

[Level 29](https://bbs.retrobattlestations.com/) : Very compliant BBS that works with a lot of things. 
Messages, games, etc. I wouldn't recommend Space Invaders - made my terminal melt.

## Alternatives

The [ESP8266 card](https://z80kits.com/shop/esp8266-wifi-module/) can be used to perform the same function, but takes up another 
slot, and [my Pro is a little bit busy](2022-12-14-rc2014-pro-bowie-and-a-merry-christmas/).

[Pimodem was the guts of getting this up and running](http://podsix.org/articles/pimodem/).  Since the Sidecar is currently hosting 
the [PiRS232 HAT](http://localhost:4000/2022-11-25-rs232-null-modem-hat-pi-zero/), I didn't want to add more GPIO connections.  The approach here works without using GPIO.