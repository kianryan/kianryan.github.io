---
layout: post
title: RC2014 Emulation for Development
categories:
  - Coding
tags: 
  - rc2014
  - z80asm
  - sbc
---

Carting your precious RC2014 isn't always practical.

[EtchedPixels has developed a RC2014 emulator](https://github.com/EtchedPixels/RC2014) that allows you to run 
a RC2014 ROM in a local linux environment.  This is perfect for application 
development, before or in conjunction with testing on real hardware.

I'm using it to test my assembly builds, in conjunction with 
the [workflow I outlined in the previous post](/2023-01-05-getting-started-with-z80asm-on-the-rc2014/).

It works great under WSL.

To build:

```bash
git clone https://github.com/EtchedPixels/RC2014.git
cd RC2014
sudo apt-get install libsdl2-dev
make
```

You'll need to download the [appropriate ROM](https://github.com/RC2014Z80/RC2014/tree/master/ROMs/Factory). Details on ROM decoding 
are available on the [RC2014 site](https://rc2014.co.uk/tag/rom/), 
but for a standard Classic II, you want `R0000009.BIN`, with 
32K BASIC and SCM.

To start the emulator in BASIC, start with bank 0:

```
./rc2014 -a -r R0000009.BIN -e 0

Z80 SBC By Grant Searle

Memory top?
Z80 BASIC Ver 4.7b
Copyright (C) 1978 by Microsoft
32382 Bytes free
Ok

```

And to start in SCM, start with bank 7:

```
./rc2014 -a -r R0000009.BIN -e 7


Small Computer Monitor - RC2014
*


```

I pasted my current WIP intel hex file, ran it and checked 
the results, and output was exactly what I was expecting (9000 and 9010).

```


Small Computer Monitor - RC2014
*Ready

*
*g 8000
12345678
1234567*m 9000
9000:  01 02 03 04 05 06 07 08  00 17 DA 1A 22 E5 9E 53  ............"..S
9010:  78 56 34 12 2A AC DD 5B  6F DA 31 A7 3F 43 CB 27  xV4.*..[o.1.?C.'
9020:  BD BF 96 81 E0 A3 78 22  BA 52 3C DC 37 DA 2F 66  ......x".R<.7./f
9030:  40 0C B4 6A B8 92 C5 28  6C F6 CF AB 3A 9A D3 F7  @..j...(l...:...
9040:  5A 69 78 3A 0C F0 5C C6  42 98 A2 79 72 D1 DF B2  Zix:..\.B..yr...
9050:  DE 94 1C 96 26 E2 BE 92  D8 8E 3D 12 28 10 0A 82  ....&.....=.(...
9060:  7A 82 BC 86 73 18 4D B5  B0 EF 2F 22 C1 0E D4 9F  z...s.M.../"....
9070:  A2 F1 35 C8 D3 F4 5A AB  82 98 BE AA A8 C8 2D 22  ..5...Z.......-"

```

Unfortunately, Windows Terminal can't generate a SIGTERM from a command stroke (happy to be corrected), so to kill the emulator from a separate tmux pane:

```
pkill rc2014
```

I'm now off to code from a coffee shop, with slightly less concern 
about damaging precious hardware, but with slightly fewer
conversation pieces.