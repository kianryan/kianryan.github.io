---
layout: post
title: In The Dark - A Rogue-like game for old and new systems
thumbnail-img: /assets/images/2022/12/29/ITDARK80.PNG
categories:
  - Coding
tags: 
  - rc2014
  - cpm
  - dos
  - pascal
---

> TLDR; I've released the first version of my rogue-like game - "In The Dark" for CP/M, DOS and modern systems.  You can 
> download the [binaries for each system](https://github.com/kianryan/InTheDark/releases) and [source code](https://github.com/kianryan/InTheDark/) 
> from GitHub. I hope you enjoy it.

![Gameplay of In The Dark](/assets/images/2022/12/29/rogue.gif)

**["In The Dark"](https://github.com/kianryan/InTheDark/) is a rogue-like game that sees you playing as an explorer of caves.  Find the treasures in each level, and 
move on to the next.  But the more you move, the more your light diminishes, and Grue lurk in the cave with you.  The 
Grue don't like the light, but they love the dark and they also love the taste of your bones.**

When I reached secondary school, I was coding in BASIC, but hadn't yet been introduced to structured programming.  In my 
first year, a small group of us were introduced to Turbo Pascal under the guidance of one of the teachers - 
I started in BASIC, but learning Pascal taught me to code.

![Turbo Pascal 3 Editor](/assets/images/2022/12/29/TP3_EDITOR.PNG)  

![Turbo Pascal 3 Compiler](/assets/images/2022/12/29/TP3_COMPILER.PNG)  

When I first started tinkering with CP/M and the RC2014, I was looking to break out of the BASIC mould again.  [This 
article made some great points for Turbo Pascal 3](https://techtinkering.com/2013/03/05/turbo-pascal-a-great-choice-for-programming-under-cpm/) - integrated IDE, excellent manual, good editor and some debugging tools. 
It is a great environment, and I would recommend it for any supported CP/M environment.  But I wondered what I could *do* 
with it.  Could I build a pretty robust game?  And could I get the same code for CP/M to run under DOS or modern systems?

![Free Pascal Editor](/assets/images/2022/12/29/ITDARKFP.PNG)

The answer is almost.  The modern implementation, [Free Pascal](https://www.freepascal.org/), is very similar to later versions of Turbo Pascal.  This 
let me write primarily on a modern system, and then periodically back-port the code to TP3 to check for compatibility. 
I wrote a small compatibility layer to proved for missing functions such as Min, Max, and most importantly ReadKey - which 
doesn't appear until TP5.

To avoid this all becoming a mess, the individual logic units of the game are separated into include files, and then 
each platform is arranged with a top level pascal file, with a number of includes.  This allows for replacement 
functions to be included for each platform where needed, and any global decelerations that need to be made for an 
individual platform.

![Turbo Pascal 5 Compiler](/assets/images/2022/12/29/TP5_COMPILER.PNG)

With all that, there were still a few curveballs on each platform.  TP3 for CP/M threw a bug that took days 
to track down where Random(0) would cause a divide by zero error.  I still don't understand why, but I can reliably 
replicate it, so we now check the input and return zero.  My original include arrangement had the main application 
begin/end block in Main.inc.  This works fine in Free Pascal and TP3, but TP5 and TP7 throw an unexpected end of file. 
They expect the main begin/end block to exist in the main pascal file, not an include.  Easy enough to solve, the game 
loop now becomes a procedure and we move the main block back to the top level.

![In The Dark Dos Version](/assets/images/2022/12/29/ITDARK7.PNG)

All of this means that we generate a build native on each platform, using each platform's tools.
We build the CP/M version using TP3 on a Z80 machine (RC2014), the DOS version is built using TP5.5 under DOSBOX and the 
Windows and Linux versions and built using Free Pascal.  There might be slightly easier ways of doing this, but it 
was an interesting learning process.

The instructions for the game are included in the [README](https://github.com/kianryan/InTheDark/).  You're free to play with the code, and PRs are welcome if 
you can see ideas you would like to incorporate.  I would love to see photos of it running on your own systems, whether 
they be new or old.