---
layout: post
title: Repairing My Family Spectrum
categories: Making
thumbnail-img: /assets/images/2022/02/07/crusy_sinclair.jpg
tags: 
  - retro, spectrum, repair
---

![My crusty family Spectrum+, as it came out of the loft](/assets/images/2022/02/07/crusty_sinclair.jpg)

I cut my teeth, quite literally, on the
family ZX Spectrum. My memories of our Spectrum+ start quite early.  My father had 
quite an investment in the platform, it
lived under the stairs with a CUB monitor, a ZX Interface 1, two
Microdrives, a RAM Turbo and an Epson dot matrix printer. It was used as
a real productivity centre, and stayed that way until we bought our
first IBM PC in 1995. At which point it was stripped down to just the base
computer and the RAM Turbo and relegated to my bedroom for game and
tinkering duties.

At some point, I managed to kill it, I wasn't sure how at the time, but
I remember feeling quite a bit of grief - and it was stored in the loft. Given I now have a
bit of experience in repairing older machines, it was time to see if I
could bring the Speccy back to life.

## First tests

I ran through some basis tests, [following a Youtube video](https://www.youtube.com/watch?v=IzgCmldm2H4), looking for expected resistances 
on the power supply circuit. The -5V and 12V looked OK, but the 5V looked a bit off. 
I had a lingering memory that at some point, _younger me_ may have used the wrong power supply.  
That would do it.

Rather than replace the 7805 with
like, I opted for a switching [Traco TSR 1-2450](https://www.mouser.co.uk/ProductDetail/TRACO-Power/TSR-1-2450?qs=ckJk83FOD0XFKqda0Mzkgw%3D%3D&mgh=1&vip=1&gclid=CjwKCAiAo4OQBhBBEiwA5KWu_2HOBwSiHaiMKzY4aWT4TUDeM0FpufgCvFnvn9LQeCTh_I9zTxnAsRoCV5oQAvD_BwE). This runs
more efficiently and cooler, making the
giant heat-sink a little redundant. I also took the time to replace the
electrolytic capacitors and gave the edge connections a clean with a
fibreglass pencil and some contact cleaner.

![A working RF signal on a charity shop TV](/assets/images/2022/02/07/jetpac_rftest.jpg)

Based on the initial tests, I expected the ULA to be fried. so ordered a [FPGA replacement](https://zxrenew.co.uk/ZX-Spectrum-replacement-ULA-p151287223). I was a
little hasty, since after the above changes I was able to get an RF
signal on the only RF TV in the house, the best random £10 charity shop purchase I've made in quite 
some time. I applied a heat-sink to the existing ULA, and have kept the FPGA as spare.

![Old and new keyboard membrane](/assets/images/2022/02/07/keyboard_membrane.jpg)

The keyboard membrane was utterly toast. It looked fried, sticky and utterly abused. 
A [replacement was cheap](https://zxrenew.co.uk/ZX-Spectrum-48k-128k-Toastrack-keyboard-membrane-p69999635) and easy enough to fit after a thorough clean, although the cursor keys are
still a little dodgy. I may try some other fixes later.

We have no tape deck, but we do have a working [RAM Turbo](https://www.youtube.com/watch?v=pgqioNdtBts) and a few
cartridges, so we were able to play a few games of Jetpac on the sum of
our first efforts. It felt like triumph.

![SVideo Mod installed](/assets/images/2022/02/07/svideo_mod.jpg)

Next up was an [SVideo mod](https://zxrenew.co.uk/ZX-Spectrum-S-Video-Modulator-replacement-p224669147). I have a USB3HDCAP card and Dell 2001FP, 
both of which take an SVideo signal, so the idea of "better than composite"
appealed. The mod was painless to install, but threw up some odd
interference, particularly noticeable on the capture card. Chasing a ghost, I
replaced TR11, TR2, TR4, TR5 and the capacitors below the 16K RAM, all
known potential failure points. The problem still persisted.  The RMC Discord server came
to the rescue, and queried the power supply.  They suggested switching back from the new
switching power supply back to the old linear power supply.  And the signal cleaned 
right up.  I also noticed the same resolution with the Commodore 16, so they now have 
both of their power supplies paired back with them until I find better switching supplies.

![Video Capture on SVideo](/assets/images/2022/02/07/svideo_capture.jpg)

At this point, we\'ve got a working system. The cartridges are nice, but
I was eager to load some other software. ZX Tape Player, an audio
mono cable, and my phone worked flawlessly to load a few games and
have a proper play.

##  Niceities

![DivMMC Future compared to SRAM Turbo](/assets/images/2022/02/07/cleaned_divmmc.jpg)

This works a treat, but loading from tapes and audio, whilst nostalgic,
is slow. A [DivMMC Future](https://www.thefuturewas8bit.com/divmmcfuture) helps to 
finish the setup for now and lets me load software near instantly, and save snapshots. It's nice.

Whilst our loft diving efforts found the computer. RAM Turbo and a
\*lot\* of tape software, we were unable to find the Interface 1 or
Microdrives. What we have now is quite a neat and tidy rig that's
pleasant to use and is the definition of my own nostalgia. Ive been
cataloguing the old tapes and rediscovering personal favourites - Rupert
and the Ice Castle, Fall Guy, Kokotoni Wilf and \*anything\* published
by Gargoyle Games. There's also a pleasant range of new games that
still targets 48K machines, and I'm just touching on that now.

I've also have a [Spectrum Next](https://www.kickstarter.com/projects/spectrumnext/zx-spectrum-next-issue-2) coming from the second wave on Kickstarter, and am
immensely looking forward to playing with the expanded hardware. But
it's nice to get this piece of personal history back up and running.