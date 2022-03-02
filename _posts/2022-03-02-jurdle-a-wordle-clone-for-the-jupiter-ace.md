---
layout: post
title: Jurdle, a Wordle Clone for the Jupiter Ace and Minstrel 4th
categories: Coding
thumbnail-img: /assets/images/2022/03/02/minstrel4th.jpg
tags: 
  - retro
  - jupiter ace
  - minstrel 4th
  - forth
  - wordle
---

> __TLDR;__ Jurdle is availble [to download here](https://github.com/kianryan/jurdle/raw/main/bin/fivewords-clean.tap), you'll need a 48K expanded Jupter Ace or Minstrel 4th to run it.

The [Jupiter Ace](https://en.wikipedia.org/wiki/Jupiter_Ace) is a curio.  Released in the 1982, looking like a hybrid between a ZX81 and a ZX Spectrum (the staff were ex-Sinclair), it stood out 
from the rest of a very crowded home computer market by choosing to run Forth rather than the ubiquitous BASIC.

![Jupiter Ace - Wikimedia Commons https://commons.wikimedia.org/wiki/File:Jupiter_Ace_Modified.jpg](/assets/images/2022/03/02/Jupiter_Ace_Modified.jpg)

Forth looks familiar if you've used [Reverse Polish Notation](https://en.wikipedia.org/wiki/Reverse_Polish_notation).  Pile up values, and then run an operator that takes 
values from your stack, does something to them, and then puts the result back on on the stack.

```
2 2 + .
4
```

Functions in Forth are known as Words: take values off the stack, do something with them, put then back on again.

```
: FIB
  ( n1, n2 -- n1, n2, n3)
  OVER OVER + ( duplicate last two items on stack, add)
;

: FIBSEQ
  0 1
  OVER OVER SWAP . . ( print first two digits)
  BEGIN
    FIB    ( generate next fib number)
    DUP .  ( print number)
    0      ( inf loop)
  UNTIL

```

Forth is FAST (see the binary search section later) compared to it's BASIC contemporaries, but BASIC scores points in being easy to pick up, and giving you ready 
access to variables, string manipulation and other conveniences.  Working with Forth requires one eye constantly on the stack, and 
the Jupiter Ace especially was never designed to be _friendly_.  Strings and user input aren't handled in the manual until Chapter 16, by 
which point you've already covered floating point arithmetic and trigonometry.  This machine has a different set of priorities.

However, it is fun.  Coding for it involves solving challenges.  You want to search a list of 5,000 items - no problem.  You want to handle a bunch of keystrokes and put those characters in the right place?  You're going to sweat a bit.  And that was one of the key problems for 
this machine.  It sold around 5,000 over it's lifetime, a speck compared to the 5 million over the lifetime of the Spectrum.

That unfortunately means that getting hold of one today is difficult, expensive, and if you do manage to put your hands on one, it's 
often not in good condition.  That leaves a couple of options.  The [EightyOne emulator](http://www.jupiter-ace.co.uk/emulators_win.html#eightyone) 
emulates a range of early Sinclair machines, and includes the Jupiter Ace, memory expansion and peripherals.  It's an 
excellent development environment.  To play with real hardware, [Dave Curran](http://blog.tynemouthsoftware.co.uk/search/label/4th) designed the 
[Minstrel 4th](https://www.thefuturewas8bit.com/minstrel4th.html), a clone of the Jupiter Ace with 49K of built in RAM. 
You can load files directly from tape or audio file, or use a [Jester Ace](https://www.tindie.com/products/dr_ian_johnson/jester-ace/) 
to load .tap files directly.

The Minstrel 4th is an excellent kit to build, I ran a build stream over Christmas [assembling it](https://www.youtube.com/watch?v=_965V2petUk).  The output works nicely with my capture card, 
and the Jester Ace makes loading files on and off for testing and play a doddle.

![Minstrel 4th Top Down Shot](/assets/images/2022/03/02/minstrel4th.jpg)

![Loading from Jester Ace](/assets/images/2022/03/02/jesterace.jpg)

![Playing Tut-Tut](/assets/images/2022/03/02/tuttut.jpg)

So now we've got some interesting hardware to play with, time to write something.

It's 2022 and everyone is either playing a version of [Wordle](https://www.powerlanguage.co.uk/wordle/), or [writing a version of Wordle](https://gamingretro.co.uk/c64-wordle-clone-turdle/).  Sod it, let's jump on a bandwagon.

Here it is - here's [Jurdle](https://github.com/kianryan/jurdle).  It's Wordle for the Jupiter Ace, _geddit_?

![Jurdle Demo](/assets/images/2022/03/02/jurdle-demo.png)


It's designed to run on a (48K expanded Jupiter Ace)[http://www.jupiter-ace.co.uk/hardware_rampacks.html#jupitercantab48K] or a Minstrel 4th.  If you're using the [EightyOne](http://www.jupiter-ace.co.uk/emulators_win.html#eightyone) emulator, set it to 51K mode.

We need a wordlist to start with.  We're going with [The Stanford GraphBase](https://www-cs-faculty.stanford.edu/~knuth/sgb.html) 
5 letter word list that Donald Knuth uses in the [Art of Programming](https://www-cs-faculty.stanford.edu/~knuth/taocp.html) 
It's public domain, and ~5,000 words.  It's also unsanitised, and contains some very esoteric words, so you'll find interesting 
choices in there.

We then need a way to get it in to the Ace.  [And I a very glad for this article](http://www.zx81keyboardadventure.com/2020/05/tut-tut-on-jupiter-ace-part-2.html) talking about [Tut Tut's](https://github.com/markgbeckett/jupiter_ace/tree/master/tut-tut) development for the Ace.  
Level design was done with z80 assembler messages, built using [z80asm](https://www.nongnu.org/z80asm/), loaded directly in to the EightyOne emulator, which 
becomes the primary development environment.  We order the word list, join and then split for every 50 chars, wrap in defm, assemble, and it works like a charm.  
After loading the compiled binary, we ask the Ace for the first five letters at the start of the wordlist memory location and we get:

```
WORDADDR 5 TYPE aargh OK
```

Yep, seems legit.

Picking a random word needs a random seed.  The [Jupiter Ace "Forth Programming"](https://www.amazon.co.uk/Jupiter-ACE-Manual-Anniversary-Programming/dp/1785387294) 
manual by Steven Vickers is very accessible, and also very searchable.  I would highly recommend working the book before 
diving in to a project, and keeping it open for reference. The PDF version hosted on the 
[Jupiter Ace archive](http://www.jupiter-ace.co.uk/usermanual.html#ace_manuals) is very searchable.

After implementing the RND and dependant words from the manual, you can start grabbing random words from the list.
```
CLS 5757 RND WORDADDR 5 TYPE
```

The next big job is searching the word list.  Wordle, sorry Jurdle, won't test an entry until it knows that the word is a valid word. 
We can try to brute force search the list (I did), if the word is near the end of the list, it'll take around three minutes. A binary 
search solves our problem and reduces our search time down to a sub one second range and was surprisingly easy to implement.

```
  : BSEARCH
  ( L, R -- Idx)
  ( search result array for guess value)

    ( first element on stack will be L)
    ( second element on stack will be R)

    ( if left hand is greater than right hand, then not found)
    OVER OVER <
    IF
      DROP DROP ( reset stack)
      -1
    ELSE
      OVER OVER + 2 / DUP COMPARE
      DUP 0=
      IF
        ( -- we have a match, drop everything bar the found index)
        DROP ROT ROT DROP DROP
      ELSE
        ( -- test for negative, positive)
        0<
        IF
          1- ROT DROP SWAP BSEARCH ( L, R = m-1)
        ELSE
          1+ SWAP DROP BSEARCH ( L = m+1, R)
        THEN
      THEN
    THEN
  ;
```

The Jupiter Ace is a character based system.  I've chosen here to display scoring using letters rather than anything fancier, 
such as user defined graphics.  I'll save that for another project.  Scoring is straightforward, we know our entry is over 
a fixed length, so first check for a direct match, and if we don't find a direct match, iteratively check for a partial match.

```
: SCORE
  ( addr_ans, addr2_guess -- result)

  1 ( -- Track a complete match)

  5 0 ( iterate over guess)
  DO
    3 PICK 3 PICK ( duplicate top two items in order)
    I + C@ SWAP
    I + C@
    =
    IF
      . " M"
      1 AND ( and result with 1)
    ELSE

      ( Not a direct match, so iterate over ans and find partial match)

      0           ( -- Track P state)
      4 PICK DUP 5 + SWAP ( iterate over answer)
      DO
        3 PICK J + C@ ( -- get guess)
        I C@ ( -- get ans)
        = OR ( -- or result)
      LOOP

      0=
      IF
        . " X"
      ELSE
        . " P"
      THEN

      DROP 0 ( replace result with failure)
    THEN
  LOOP

  ( We need to drop the two addr, leave result state on stack)
  ROT ROT DROP DROP
  ;
```

Beyond this is the user input, game loop and chroming for assessing how the player did.  [Feel free to browse the source code](https://github.com/kianryan/jurdle), 
leave comments, or fork it and improve.  It would be nice is some people played it!

![Jurdle playing on Minstrel 4th, via capture](/assets/images/2022/03/02/jurdle.jpg)
