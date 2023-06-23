---
layout: post
title: Connecting your RC2014 to a Psion 5MX, Psion 3, or other RS232 terminal
thumbnail-img: /assets/images/2023/06/23/rc2014_5mx.png
categories:
  - Coding
tags: 
  - psion
  - rs232
  - rc2014
---


Back in the early part of last year, my first frustrated attempts at connecting my Psions to the RC2014 
Z80 kit computer ultimately led to building [the Sidecar](https://www.kianryan.co.uk/2022-11-28-psion-sidecar-ppp-modem-and-terminal/), a small, battery powered Linux computer designed 
for serial use.  [The early experiments](https://www.kianryan.co.uk/2022-06-13-connecting-a-psion-to-a-raspberry-pi-with-serial/) used a Pi Zero as a go-between between the Psion MX5 
and the RC2014, using a USB-FTDI interface on the Sidecar to connect to the RC2014.  A little overkill, but it worked. 

![Psion 5MX, connected to RC2014](/assets/images/2023/06/23/rc2014_5mx.png)

I still wanted a direct connection between the RC2014 and Psion, and I was convinced I was missing something 
with the Waveshare RS232 board. Waveshare produce some excellent documentation, and the documentation for their 
[RS232 board is no exception](https://www.waveshare.com/wiki/RS232_Board).  The lightbulb moment was reading the schematic, showing the header needing VCC and GND to power the 232 chip. Head, meet desk.

[Reading the _also_ excellent documentation from RC2014](https://rc2014.co.uk/modules/dual-serial-module-sio2/), shows that the 5V jumper simply connects the 5V 
voltage connection of the RC2014 bus to the header, irrespective of direction.  If you're powering from FTDI, then 
it will power your board.  If you're powering your board externally, then it'll power the RS232 chip.

Usually, if you power your RC2014 from external, you disconnect the 5V jumper when connecting over FTDI.

The magic sauce, is to connect your 5V jumper, thus powering the RS232.  Everything then jumps to life.

The following has been tested with both a Psion 5MX and Psion 3.  I believe it should work with any similar/compatible device.

## Parts and Setup

To do this yourself you will need:

* Waveshare RS232 Board ([Available from PiHut](https://thepihut.com/products/rs232-board))
* A null modem adapter.  I like these dinky ones.  ([Available from Amazon](https://www.amazon.co.uk/Digitus-Adapter-D-Sub9-Metal-Housing-Adapters/dp/B00H8RRAMY/))
* A gender changer. I also like these dinky ones. ([Available from Amazon](https://www.amazon.co.uk/rhinocables%C2%AE-Adaptor-changer-convertor-rhinocables/dp/B00EUZHS2E/))
* 6 pin female to female header socket cable (I believe the RS232 board comes with one)
* Psion 5MX and a Psion Series 5MX/S3MX RS232 Link Cable ([Available from PsionEx](https://psionex.co.uk/en/product/pda/series3/adapters-cables-modems.html))
* Psion 3 and a Psion Series 3 Link Cable ([Available from PsionEx](https://psionex.co.uk/en/product/pda/series3/adapters-cables-modems/c-3l-db9pf-pcat.html))
* A RC2014 - shown is a RC2014 Zed Pro ([Available from Z80 Kits](https://z80kits.com/))
* If using Psion 3 - Dual Clock Module ([Available from Z80 Kits](https://z80kits.com/shop/dual-clock-module/))
* A 5V power source for your RC2014.  I'm using a Anker powerbank capable of outputting 5V at 3A(max).

The order of the pins on the RS232 board does not match a standard FTDI header.  If you plan on using this exclusively 
with standard FTDI interfaces, headaches can be saved by taping the non RS232 pins to FTDI order:


| RS232            | Cable         | 
|----------------------------------|
| VCC              | Red           |
| GND              | Black         | 
| RxOUT            | Orange        | 
| TxIN             | Yellow        |
| CTS              | Green         | 
| RTS              | Blue          |

<br />

| FTDI             | Cable         | 
|----------------------------------|
| GND              | Black         |
| CTS              | Green         | 
| VCC              | Red           | 
| TDX              | Orange        |
| RXD              | Yellow        | 
| RTS              | Blue          |

You require both a null modem and gender changer between the Waveshare RS232 and the Psion RS232 cable.  Stack them as below.

![Wareshare RS232, with gender changer and null modem](/assets/images/2023/06/23/rc2014_rs232.png)

Ensure your RC2014 serial board 5V jumper is connected. You will need to power your RC2014 via an external power source.

![Dual Serial and Dual Clock card in RC2014](/assets/images/2023/06/23/rc2014_dual.png)

## Connecting the Psion MX5

* Connect your RS232 cable to your Psion MX5 and Waveshare RS232 board.
* Connect your header cable to your RS232 and RC2014.
* Disable the MX5 remote link serial. (System -> Tools -> Remote Link -> Off).

The in built terminal program is adequate, but I much prefer [Hermes](https://web.archive.org/web/20070629220110/http:/www.iota.demon.co.uk/psion/hermes/hermes.html).

Connect using the following settings:

| Comms             | Serial Port 0             |
| Baud Rate         | 115200                    |
| Settings          | 8 data; 1 stop; No parity |
| Handshaking       | Hardware (RTS/CTS)        |

Reboot, or turn on your RC2014, and it should immediately start streaming serial to your terminal.

![Psion 5MX connected to RC2014, running Turbo Pascal](/assets/images/2023/06/23/rc2014_pascal.png)

_(Psion 5 Shown running Turbo Pascal in CP/M 2.2 via RomWBW)_

## Connecting the Psion 3

Unlike the MX5, the Psion 3 is limited to a max speed of 19200 baud.  As such you need to 
change the clock speed of the RC2014 to match.  This will result in a slower RC2014, 
but so far, most functions have worked fine.  You will need a [dual serial card](https://rc2014.co.uk/modules/dual-serial-module-sio2/) to do this.

* Move the "Clock 1" jumper on the Dual Serial card from position 1 (7.3728Mhz) to position 4 (1.2288Mhz).
* Connect your RS232 cable to your Psion MX5 and Waveshare RS232 board.
* Connect your header cable to your RS232 and RC2014.

The basic terminal program with the Psion3Link only supports ANSI.  [Alex (The Last Psion)](https://bitbang.social/@thelastpsion) has found 
compiled and hosted [NFSC](https://github.com/PocketNerdIO/nfsc), a functional VT100 terminal emulator for the Psion 3.  This is (so far) a 
much better terminal program.

Connect using the following settings:

| Port            | TTY:A    |
| Baud Rate       | 19200    |
| Data Bits       | 8        |
| Stop Bits       | 1        |
| Parity          | none     |
| Flowcontrol     | none     |

_(Hardware flow control should be supported, but on testing, it kept throwing errors.  It appears to be perfectly functional without.)_

Reboot, or turn on your RC2014, and it should immediately start streaming serial to your terminal.

![Psion 3 connected to RC2014](/assets/images/2023/06/23/rc2014_3.png)

_(Psion 3 Shown running RomWBW boot screen)_

I would be interested in hearing of any other interesting devices you've connected up to your RC2014 to use as a terminal.