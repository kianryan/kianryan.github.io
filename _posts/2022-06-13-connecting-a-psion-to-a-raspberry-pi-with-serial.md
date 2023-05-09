---
layout: post
title: Connecting a Psion 5MX to a Raspberry Pi with Serial
thumbnail-img: /assets/images/2022/06/13/p5mx-full.png
categories:
  - Code
  - Making
tags: 
  - making
  - psion
  - raspberrypi
  - rs232
  - serial
---

I really like my Psion.  Nice keyboard, black and white, works great 
in sunlight.  Runs for forever off a few double AA batteries.  I also really like 
The Raspberry Pi Zero.  A little full-fat Linux machine, smaller than a credit card that can run 
quite happily on battery power.  I want to make these two devices talk so I've 
got a little lightweight portable Linux terminal.

![Psion 5MX Full Hero](/assets/images/2022/06/13/p5mx-full.png)

Raspberry Pis have always had onboard serial support.  Serial support allows you 
to connect two lines between your Pi and a compatible device, and then read and write
to that serial port.  We can enable the Pi's console to communicate over serial and 
use serial to directly interface with our Pi's console.  The Pi's serial operates at the 
voltage level of the Pi 3.3V - the most common method of interfacing with Pi serial 
is using a UART adapter like the one below, this plugs in to a host computer and 
allows communication with TTL UART devices.

Typically, legacy serial devices conform to RS232, a standard for voltages, 
ports, and protocols.  Our Psion conforms to RS232, which is higher than the 
acceptable voltage range for our Pi.  An RS232-TTL converter sits in the middle 
of the two devices and translates the voltages.  The one below is based on the 
max3232 chip and provides 4 lines, 2 in each direction.  The directionality of 
the channels is important, it will only allows traffic in the expected direction.

## Setting up the Pi - UART

Raspberry Pis with onboard Bluetooth have two serial ports - full UART (ttyAMA0) and 
mini UART (ttyS0).  The full UART is reserved for Bluetooth.  The mini UART works, 
but the full UART works at higher speeds and also supports hardware flow control.

Switching to the full UART requires either disabling the bluetooth, or telling 
the bluetooth to use the mini UART.  We can do this with overlays.  Edit 
`/boot/config.txt` and add the following lines:

```
# Disable Bluetooth - switch UART
dtoverlay=pi3-disable-bt
```

We also need to instruct our Pi to use the serial terminal with the console. 
Add the following line to the same file:

```
enable_uart=1
```

We can now wire our Pi to our RS232 adapter.  Using jumper wires, connect pin 8/GPIO 14 
on the Pi to TX on the adapter, Pin 10/GPIO 10 to RX, pin 6/GND to GND and pin 1/3.3V to VCC.  
Since the Psion RS232 cable is also null modem, we a null modem adapter 
and a gender changer on the Psion/RS232 side.

![Raspberry Pi / RS232 TTL Overview](/assets/images/2022/06/13/p5mx-board-overview.jpg)

I'm using the [Hermes terminal program](https://web.archive.org/web/20070629220110/http:/www.iota.demon.co.uk/psion/hermes/hermes.html) (link via Wayback machine). 
Set up your serial client for 115200 baud, 8N1, with no hardware flow control.  If 
it's all gone well so far, press return on your Pi, and see if you get a response.  
You're in the console terminal, from a fresh boot you're probably should be at the 
login prompt.  Login, and welcome to your serial Pi.

![Psion 5 Serial Login](/assets/images/2022/06/13/p5mx-txrx.gif)

From here you've now got a basic working serial terminal to a fully functional 
Raspberry Pi.  Why not send a tweet using 
[rainbowstream](https://github.com/orakaro/rainbowstream), the terminal based twitter client?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Hello, this is a tweet from a Psion 5MX (finally) at <a href="https://twitter.com/hashtag/emfcamp?src=hash&amp;ref_src=twsrc%5Etfw">#emfcamp</a> with a little help from a Pi and Rainbowstream.</p>&mdash; Kian Ryan 💉💉💉🐙🏳️‍🌈 (@kianryan) <a href="https://twitter.com/kianryan/status/1533385730118012930?ref_src=twsrc%5Etfw">June 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## Overflow

Our terminal does have a flaw.  If you go in to a large directory 
and enter `ls`, you'll probably find you get some serial overflow problems.  For a 
truly stable experience, we're going to need to enable hardware flow control.

![Psion 5 Serial Overflow](/assets/images/2022/06/13/p5mx-overrun.gif)

RTS/CTS is a simple mechanism that uses high/low signals to notify when data is 
going to be transmitted and when it is safe to do so.  If the client needs more 
time to process what it already has, it can raise a block to tell the sender to 
wait before sending more data.

## Setting up hardware flow control

The Raspberry Pi can support RTS/CTS on the full UART, but it requires a 
little bit of additional setup.

First, we need to switch the mode on two additional pins.  The tool [rpirtscts](https://github.com/mholling/rpirtscts) 
will allow you to switch the two pins from GPIO to RTS/CTS.

```
sudo apt install build-essential git
git clone https://github.com/mholling/rpirtscts 
cd rpirtscts
make
sudo ./rpirtscts on
```

You're then going to need to enable another overlay.  This one does not come with 
the Raspian install, but we can source it from the [AtariSIO project](https://github.com/HiassofT/AtariSIO). 
The AtariSIO project contains a collection of overlays that are designed for enabling 
serial and RTS/CTS for use with Atari floppy drives. Turns out they work great for our use.

We need to grab the file, then move it in to the appropriate location:

```
wget https://github.com/HiassofT/AtariSIO/blob/master/contrib/rpi/uart-ctsrts.dtbo?raw=true -O uart-ctsrts.dtbo
mv uart-ctsrts.dtbo /boot/overlays/
```

We then enable the overlay, in the same way we did for the other overlays in `/boot/config.txt`:

```
# Disable Bluetooth - switch UART, enable CTS/RTS
dtoverlay=pi3-disable-bt
dtoverlay=uart-ctsrts
```

Finally, on boot we need to tell the serial driver to use RTS/CTS.  I've tried a few approaches, 
but so far the most reliable has been adding the following to the bottom of `~/.bashrc`.  This 
will tell the serial driver to use CTS/RTS on login.

```
stty -F /dev/ttyAMA0 crtscts  
```

We now need two additional wires, one from pin 36/GPIO 16 for CTS, and one from pin 11 GPIO 17 for RTS. 
These map to their respective ports on the RS232/TTL adapter.  Mine now looks like this:

![Pi / RS232 TTL with RTS/CTS](/assets/images/2022/06/13/p5mx-board-flow.jpg)

When we now list our long directory, we no longer get serial overrun errors and our contents is listed 
correctly.

![Psion 5 Serial No Overflow](/assets/images/2022/06/13/p5mx-no-overrun.gif)

We can also try a more taxing demo.  CMatrix is quite popular for this, and here it 
is running with no overflow problems:

![Psion 5 Cmatrix Demo](/assets/images/2022/06/13/p5mx-cmatrix.gif)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Today has been a win in <a href="https://twitter.com/hashtag/psion?src=hash&amp;ref_src=twsrc%5Etfw">#psion</a> <a href="https://twitter.com/hashtag/rs232?src=hash&amp;ref_src=twsrc%5Etfw">#rs232</a> <a href="https://twitter.com/hashtag/pi?src=hash&amp;ref_src=twsrc%5Etfw">#pi</a> land, hardware flow control (RTS/CTS) is now working. <a href="https://t.co/Bnf0xmGgcL">pic.twitter.com/Bnf0xmGgcL</a></p>&mdash; Kian Ryan 💉💉💉🐙🏳️‍🌈 (@kianryan) <a href="https://twitter.com/kianryan/status/1535714215914266630?ref_src=twsrc%5Etfw">June 11, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## What's Next?

__Portability__ - I was testing this rig at Electromagnetic Field using a battery pack 
and it _wasn't_ bad, but it could be better.  I'm designing a HAT with my a RS232-TTL 
converter, a switched null modem converter and a JST with DC-DC for a lipo battery pack. 
I'm aiming for a small portable Pi that can serve as an adjunct to my Psion.  I'm 
hoping to have the first version of that ready in the next few weeks.

I also have a small encoding problem - for some reason, £ signs are being translated as # 
signs.  I assume it's something in the locale, but it's a small blocker.  All suggestions 
are welcome.

## References

As well as any links already in the post, putting this together has required a lot of 
additional sources, which require credit:
* [Raspberry Pi RTS/CTS Flow Control](https://ethertubes.com/raspberry-pi-rts-cts-flow-control/)
* [Raspberry Pi Forums - UART and mini UART](https://forums.raspberrypi.com/viewtopic.php?t=217967)
* [Serial Terminal on Psion Series 5 MX Pro](https://retrostuff.org/2019/12/09/serial-terminal-on-psion-serie-5mx-pro/)