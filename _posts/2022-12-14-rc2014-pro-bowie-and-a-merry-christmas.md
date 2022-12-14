---
layout: post
title: RC2014 Pro, Bowie, and a Merry Christmas
thumbnail-img: /assets/images/2022/12/14/christmas_card.png
categories:
  - Making
  - Code
tags: 
  - rc2014
  - pigfx
  - rc2014-ym2149
---

I'd like you to meet "Bowie", our newest RC2014, with a focus on "Sound and Vision".

![Bowie - The Sound and Vision RC2014 Pro](/assets/images/2022/12/14/rc2014pro_bowie.jpg)

Bowie is [RC2014 Pro](https://z80kits.com/shop/rc2014-pro/) with a number of additional cards:

* [RC2014-YM2149](https://github.com/electrified/rc2014-ym2149) - YM2149F/AY-3-8190 Sound card (Spectrum/Amstrad/Atari ST)
* [Quazar's SID Interface](https://www.tindie.com/products/quazar/sid-soundchip-interface-designed-for-the-rc2014/) - SID Soundchip Interface (Commodore 64)
* [Shiela Dixon's 8x8 LED Matrix Display](https://z80kits.com/shop/8x8-led-matrix-display-module/) - 8x8 addressable display
* [Pi Zero Serial Terminal](https://rc2014.co.uk/modules/pi-zero-serial-terminal/) - HDMI capable ANSI Terminal Display with graphics modes

And we're waiting on a couple cards to arrive:

* [Tynemouth Software's 9 way D Joystick port for RC2014 and Minstrel 4th](http://blog.tynemouthsoftware.co.uk/2022/09/9-way-d-joystick-port-for-rc2014-and-minstrel-4th.html) - Joystick interface compatible with the Boldfield Joystick 
* [Mr Gelée's MG005 Speech Synthesiser](https://jerryfrost1.wixsite.com/tech/blank-page-4) - GI SP0256A-AL2 allophone voice synthesizer.

My original [RC2014 Classic II](https://rc2014.co.uk/full-kits/rc2014-classic-ii/) has been restored back to stock, 
and is now a sleek little yellow machine again.  That probably won't last long.

![RC2014 Classic II - Ukraine Edition.  Putin still sucks.](/assets/images/2022/12/14/rc2014_ukraine.jpg)

Bowie gives us the option to explore some interesting ideas.  The Pi Zero 
Serial is a HDMI capable serial video terminal that can also output graphics, bitmaps 
and sprites using [terminal codes](https://github.com/fbergama/pigfx/blob/master/doc/terminal_codes.txt). That gives us 
options we couldn't explore previously, and I'm thinking graphical games.

The combination of AY, SID and TI speech synthesis gives some options for audio 
mixing.  It's almost unheard of to have a SID chip sitting next to an AY chip, 
so I'm interested to see what we can do with both side by side.

With the addition of a joystick card, we've got controls beyond the keyboard. 
There's also a serial port on the AY card, which opens up the possibility of input 
interfaces beyond joysticks.

![Building Bowie](/assets/images/2022/12/14/rc2014pro_build.jpg)

All of this on top of a Z80 system with 64Kb of RAM, and with a range of boot 
options - direct machine code execution, BASIC or CP/M.  Because I'm greedy, I 
would *really* like to a Forth running on here.

For now, I set myself a quick challenge of what could I build with just a few 
hours and BASIC.  It's Christmas - so how about a demo?

This year's Christmas Card is coded in [NASCOM BASIC](http://nascomhomepage.com/), the built in BASIC of the 
RC2014.  It uses the screen drawing, bitmap and sprite commands from [PiGfx](https://github.com/fbergama/pigfx). 
The snowflake bitmap was built using [Piskel](https://www.piskelapp.com/), exported to C, and then 
manipulated into DATA statements.  Using the [data sheet for the YM2149](http://www.ym2149.com/ym2149.pdf), and an 
[online pitch reference](http://www.phys.unsw.edu.au/jw/notes.html) I calculated the required fine and coarse tone values to 
generate the tones.  [The source code is available for you to run on your own hardware.](https://github.com/kianryan/christmas2022)

Merry Christmas and a Happy New Year.

<iframe width="560" height="315" src="https://www.youtube.com/embed/yxx2xzdkjWg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>