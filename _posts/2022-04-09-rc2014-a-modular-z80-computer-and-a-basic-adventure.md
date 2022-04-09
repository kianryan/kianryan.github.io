---
layout: post
title: RC2014 - a Modular Z80 Computer, and a BASIC Adventure
thumbnail-img: /assets/images/2022/04/09/rc2014-classic.jpg
categories: Coding
tags: 
  - retro
  - z80
  - rc2014
  - basic
---

> __TLDR;__ Adventure is availble [to download here](https://github.com/kianryan/rc2014/blob/main/adventure.bas), for Microsoft BASIC on the RC2014.

![RC2014 Classic II](/assets/images/2022/04/09/rc2014-classic.jpg)

Russia is conducting a war against Ukraine.

[Spencer Owen](https://twitter.com/ZxSpectROM) sold special editions of their [RC2014 kits](https://rc2014.co.uk/) in Ukrainian 
colours, and donated 
50% of the sales to Ukrainian humanitarian efforts (these kits are not cheap to produce).  

_In a dark world, this is a good thing.  Thank you._

The RC2014 is a very neat Z80 based modular kit computer.  Modules come on slot cards 
that you attach to a backplane.  The [Classic II kit](https://rc2014.co.uk/full-kits/rc2014-classic-ii/) comes with RAM, 
BASIC ROM, Z80 CPU, Clock and Serial I/O.  Instructions are excellent, and components are 
packed well.  I put my kit together in two slightly-extended lunch breaks.  If you've 
had any experience soldering mid-sized through-hole kits, you'll have 
no trouble here.

Not included with this kit is either a power adapter or serial cable.  An [FTDI cable](https://shop.pimoroni.com/products/ftdi-cable-5v?variant=7570741121) 
can solve both of those requirements and allow you to communicate and power your 
kit from a single cable.

To talk to your RC2014, you're going to need a serial program.  I'm using [Minicom](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom) on 
both a Raspberry Pi and Windows under WSL1 ([see here about WSL2]({% post_url 2022-04-09-serial-on-windows-subsystem-for-linux-wsl %})).  Once you know 
the port for your serial interface, you can talk to your RC2014 using:

```
minicom -b 115200 -D /dev/ttyS8
```

If nothing appears, don't worry.  Your interface will only display commands as they're 
relayed, so press the reset button on your RC2014.  You should now see:

```
Z80 SBC By Grant Searle

Memory top?
```

![RC2014 Hello World](/assets/images/2022/04/09/rc2014-helloworld.jpg)


The RC2014 Classic II comes with [Microsoft BASIC](https://en.wikipedia.org/wiki/Microsoft_BASIC) 4.7 (with modifications by [Grant Searle](http://searle.x10host.com/z80/SimpleZ80.html)), 
and a [machine code monitor](https://smallcomputercentral.wordpress.com/small-computer-monitor/small-computer-monitor-v1-0/).  The BASIC has been adapted from a [Nascom 2](https://en.wikipedia.org/wiki/Nascom_(computer_kit)).  I'm mostly familiar with BASIC from 
the ZX Spectrum and Commodore, I few things I expected were missing - there's no ELSE statements, 
there's no IF/END IF (IF is single line).  
But it does contain a host of features that make it surprisingly powerful - single 
line functions, multi-dimensional arrays, good maths functions, subroutines.  [The Nascom 2 BASIC manual](http://www.nascomhomepage.com/pdf/Basic.pdf) 
is a great piece of technical writing.

I wanted to build a game that could operate within the restraints of this BASIC, 
and this machine.  Memory is limited to 32K, output is text only, and no direct 
screen addressing.  Now looked like a good opportunity to write an adventure game.

Since the RC2014 Classic II doesn't have persistent storage - any code I develop 
needs to written on a host machine, and then transferred over to the RC2014.

I set up tmux with vim on my left, and Minicom on my right.  When I need to update the 
code on the RC014, I run a "new" to clear the BASIC listing, and then paste the entirely of the 
code listing in to the Minicom session.  If I only need to make a small change, I may 
only paste the individual block I'm working on.

Since Nascom basic can only accept 72 column lines, I set vim up with a ruler on 
column 73:

```
:set colorcolumn=73
:highlight ColourColumn ctermbg=8
```

![Tmux, Minicom And Vim](/assets/images/2022/04/09/rc2014-devenv.png)

The adventure game let's you explore a 250 room dungeon.  Your goal is to find 
all 40 treasures.  You might encounter monsters, treasure, or weapons.

Most of the game mechanics are pretty pedestrian, but building the map was fun.

I wanted to generate the map procedurally, so any two plays were distinct.  First job is 
generating the exits for each cell in the map.  We use binary representation for the room 
exits:

```
0001 - North (1)
0010 - East  (2)
0100 - South (4)
1000 - West  (8)
```

Multiple exits are then just additions:

```
1010 - East & West (6)
```

Now we have a model for representation, we iterate through each cell in our map.  
We first make a random stab of directions we would like to go, by selecting a random 
number between 1 and 15 (8 + 4 + 2 + 1).  This covers all the possible options above.

```
410 map(i,1) = int((rnd(1) * 15)) + 1 : rem start
```

We then need to take a look at the cell "north" to this cell, and to the "east" of 
this cell.  If our cell attempts to travel to that cell, but that cell has no way to 
travel to this cell, then add that exit to the previous cell.

```
412 rem add historic cells
413 j = i-25
415 if i>25 then if fnci(1) and not(fncn(4)) then map(j,1)=map(j,1)+4
417 j = i-1
420 if i>1 then if fnci(8) and not(fncw(2)) then map(j,1)=map(j,1)+2
```

Next up, check where we are on the map.  If we're at a line edge, or top or bottom 
edge, then we can't travel in those respective directions:

```
425 rem edges
430 if i <= 25 and fnci(1) then map(i, 1) = map(i, 1) - 1
435 if fnmod(i) = 0 and fnci(2) then map(i, 1) = map(i, 1) - 2
440 if i >= 226 and fnci(4) then map(i, 1) = map(i, 1) - 4
445 if fnmod(i) = 1 and fnci(8) then map(i, 1) = map(i, 1) - 8
```

Finally, check if adjacent rooms have exits leading in to this room.  If they do, 
add those in as well:

```
450 rem adjacent rooms
455 if i>25 then if fncn(4) and not(fnci(1)) then map(i,1) = map(i,1)+1
460 if i<250 then if fnce(8) and not(fnci(2)) then map(i,1) = map(i,1)+2
465 if i<225 then if fncs(1) and not(fnci(4)) then map(i,1) = map(i,1)+4
470 if i>1 then if fncw(2) and not(fnci(8)) then map(i,1) = map(i,1)+8
```

You'll notice there's a /lot/ of function calls here.  And this version of BASIC 
has a very nice syntax for declaring functions that I've not seen in other home 
micro BASICs:

```
50 def fnmod(x) = x - int(x/25) * 25 
55 def fnci(x) = (map(i,1) and x) = x
60 def fncn(x) = (map(i-25,1) and x) = x
65 def fnce(x) = (map(i+1,1) and x) = x
70 def fncs(x) = (map(i+25,1) and x) = x
75 def fncw(x) = (map(i-1,1) and x) = x
```

I would not like to have implemented the above without these.  It would have been 
feasible, but this made it significantly quicker, and saner.

At this point, you're going to have ... numbers.  Lots of numbers.  It helps to 
play test a generated map to make sure it works.  I wrote a quick loop that dumped out 
each set of exits with a comma, and then with a bit of text manipulation got it in to 25 cells 
per line in a CSV.  That meant I could visually check my generated exits made sense 
using Excel - not very retro, but as a sense check it worked for this.

Would you be happier with Excel 5?  Fine.  Here you go.

![Testing map in Excel](/assets/images/2022/04/09/excel-testmap.png)

Monster and Item generation work on similar principle.  Randomise room, randomise 
attributes, check that nothing is already in that room.  The details are in the source 
code.

The game loop prints the players current situation, asks for input and then actions it.
The game finishes when either the adventurer has collected all the treasure, or has 
succumbed to the creatures of the dungeon.

![Running Adventure Game](/assets/images/2022/04/09/demo.gif)

[Feel absolutely free to take the code, run it and modify it.](https://github.com/kianryan/rc2014/blob/main/adventure.bas)

If you're interested in getting your hands on a RC2014 Classic II, the fundraiser 
kits are no longer available, but the regular kits are available at [z80kits.org](https://rc2014.co.uk/full-kits/rc2014-classic-ii/).