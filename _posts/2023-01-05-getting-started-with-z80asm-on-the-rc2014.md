---
layout: post
title: Getting Started With z80asm on the RC2014
thumbnail-img: /assets/images/2023/01/05/assembly.png
categories:
  - Coding
tags: 
  - rc2014
  - z80asm
  - sbc
---

Happy New Year.

We're going to start the new year by going down to the metal.  The RC2014 Classic 
II and Pro ROM images both contain copies of the [Small Computer Monitor](https://smallcomputercentral.com/small-computer-monitor/). 
SCM is a machine code monitor and assembler for Z80 systems.

We're going to switch a RC2014 Classic II from booting 32K BASIC to SCM, 
assemble an example program using z80asm, convert it to Intel hex code, and 
run that code on the RC2014.

## Hardware - Switching the ROM Bank

The Classic II ROM contains two populated banks - a 32K BASIC, and SCM.  If A13-A15 are set to 0, the lowest bank is selected and BASIC will start.  Set A13-A15 to 1 to boot to SCM.

On connecting your serial terminal and resetting the RC2014, you should now 
see the prompt for SCM:

```
Small Computer Monitor - RC2014
*
```

I would recommend spending an hour familiarising yourself with SCM 
via the [tutorial](https://smallcomputercentral.files.wordpress.com/2018/05/scmon-v1-0-tutorial-e1-0-0.pdf).

## Assembling - z80asm

[z80asm](https://www.nongnu.org/z80asm/) is a z80 assembler for your computer.  Unlike 
the assembler built in to SCM, z80asm can support labels and other features, making it easer to 
organise code.

Versions of the tools used here are available on Windows, but I find it much easier to work under (Windows 
Subsystem for Linux)[https://learn.microsoft.com/en-us/windows/wsl/install].  Using Ubuntu, install the tools we're going to need using the following:

```bash
sudo apt install z80asm z80dasm srecord
```

The following source code is saved as `helloworld.asm`, and is adapted from the 
"Hello World" tutorials in the SCM tutorial:

```asm
org $8000

	ld	de, text	; load address for text to display.
	call	display		; call display
	ret			; we're done

display:
	ld	c, $06		; load display routine from SCM API
	rst	$30		; exec display routing
	ret			; we're done

text:	
	dm	"Hello, World",0 ; define string to display
```

We assemble the source to a binary file using z80asm:

```bash
z80asm -i helloworld.asm -o helloworld.bin
```

### Converting - Intel Hex Format

Unfortunately, we can't just copy and paste the binary directly to SCM, we need to convert it 
to a format that we can transfer over serial.  The [Intel HEX format](https://en.wikipedia.org/wiki/Intel_HEX) 
allows us to represent binary as ASCII.  We can take our binary output from z80asm 
and generate intel hex using srec_cat:

```bash
srec_cat helloworld.bin -binary -offset 0x8000 -output helloworld.hex -intel -address-length=2
```

We then just need to copy this to our clipboard.  If we're using WSL, we can 
pipe the output to clip.exe:

```bash
cat helloworld.hex | clip.exe
```

### Running on the RC2014

We can then paste the output in to SCM. If it's all gone to plan, we should see a `Ready` indicating 
the code has been loaded.  We can then run our memory location with `g 8000`:

```
Small Computer Monitor - RC2014
*Ready

*
*g 8000
Hello, World*
```

I find it useful to run a tmux session in WSL 1 [(see this post as to why it needs to be WSL 1)](http://localhost:4000/2022-04-09-serial-on-windows-subsystem-for-linux-wsl/) with minicom to the RC2014 on the left, and vim and assembly commands running to the right.

![Sample layout of Tmux, Minicom and VIM](/assets/images/2023/01/05/assembly.png)