---
layout: post
title: A One Handed Accessible Keyboard, Inspired by FrogPad
thumbnail-img: /assets/images/2024/02/16/frogger_iso_view.jpg
categories:
  - Making
tags: 
  - keyboard
  - accessibility
---

A couple of years ago, I was in an incident that reduced the strength in my left shoulder.  I've been waiting for an 
operation to restore the function to that shoulder, but we were warned the post-operative recovery period would be several months.
So I started looking for keyboard options that would allow me to continue to work one handed.

![The Lily58 Frogger](/assets/images/2024/02/16/frogger_iso_view.jpg)

Full size single handed keyboards, such as the the [Maltron keyboard](http://www.maltron.com/store/p19/Maltron_Single_Hand_Keyboards_-_US_English.html), 
are quite expensive and occupy a significant amount of space.  They also require learning a new layout, not something I'm 
averse to, but if I'm going to spend some time learning something new, it might as well be something lighter and smaller.

[![SteveBaker at the English-language Wikipedia, CC BY-SA 3.0 <http://creativecommons.org/licenses/by-sa/3.0/>, via Wikimedia Commons](/assets/images/2024/02/16/frogger_microwriter.jpg)](https://commons.wikimedia.org/wiki/File:Microwriter.png)

Chorded keyboards are keyboards that can be operated with one or two hands, allowing the user to create keystrokes by 
pressing multiple keys simultaneously.  Most chorded keyboards target minimalism with a high learning curve, focusing on 
speed by minimising the number of switches, but relying on a distinct combination of switches for each keystroke. 

[![By Hustvedt - Own work, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=5806147](/assets/images/2024/02/16/frogger_frogpad.jpg)](https://en.wikipedia.org/wiki/FrogPad)

The FrogPad, released in 2002, relies on key frequency organised in a number of layers.  The [Buxton collection](https://www.microsoft.com/buxtoncollection/detail.aspx?id=1) is 
a great resource on user interface devices, and contains an excellent entry on the FrogPad, including a link to the quick 
start guide and the manuals.


The FrogPad organises the most frequent alpha characters in the top layer, with  the remaining alpha characters in a secondary layer.  Extra layers exist for numbers, symbols and control.  To spell "HELLO, WORLD" you would perform the 
following keystrokes:

```
H - TOP LAYER
E - TOP LAYER
L - SECOND LAYER 
L - SECOND LAYER
O - TOP LAYER 

(HELLO interestingly is all on the centre row)

, - SECOND LAYER
SPACE - TOP LAYER

W - TOP LAYER
O - TOP LAYER
R - TOP LAYER
L - SECOND LAYER
D - TOP LAYER
```

FrogPad work on the basis that 83% of the most frequent characters are in the top layer.  "HELLO, WORLD" places us at 66%, 
which for a very small sample size is not unreasonable.

This felt significantly easier to learn than a minimal chorded keyboard.

## Construction

I ordered a [Lily58 keyboard](https://github.com/kata0510/Lily58) from [Mechkeyboards](https://mechboards.co.uk/products/lily58-kit), 
a regular keycap set in DSA and relegendable DSA keycaps from Signature Plastics (unfortunately they don't appear to 
be available any more) but these [lower profile keycaps from Mechboards are similar](https://mechboards.co.uk/products/mx-relegendable-keycap).

![Lily58 Kit from Mech Keyboards](/assets/images/2024/02/16/frogger_lily58.jpg)

Half of a Lily58 keyboard gives me a little more room than the FrogPad, it's 24 + 4 keys per half, in a staggered layout, versus the Frogpad's 20 keys.  
That allows for a dedicated number row, and breakouts for escape, control, alt and function keys, somewhat essential to my day to day usage coding.

The Lily58 uses QMK firmware, so I customising a new layout that follows along the same lines as the FrogPad - a primary layer, 
a secondary character layer (green), a symbol layer (pink), a function layer (orange) and a "secondary" function layer (green + pink).

I've named the layout "Frogger".

![Lily59 with custom keycaps and "Frogger" layout](/assets/images/2024/02/16/frogger_top_view.jpg)

To use it, follow the instructions for QMK, and copy the layout files to ```~/qmk_firmware/keyboards/lily58/keymaps/frogger```.
Then build and deploy:

```
make lily58:frogger:avrdude (If on Linux/Mac)
make lily58:frogger (If on Win, then deploy using QMK Toolbox)

```

[I've made the layout files available here, and the legends to download, print and cut.](https://github.com/kianryan/frogger-keyboard)

> Quick note - QMK leans heavily towards US ANSI, so for UK, the current layout files may not behave as expected
> for " and @ symbols.  Switch these around in the layout files, and you should be good to go.  Or switch to US 
> keyboard layout.

How is it to use?  Well, full disclosure - I've ended up not needing immobilisation post-op, and I'm being actively 
encouraged to mobilise my arm.  However, I'm using it to give my arm a rest.  It /is/ slow, since I don't have thirty-odd 
years of muscle memory behind using it.  But it's not terrible.

To help with fluency, I've enlisted the help of some of the greatest typing tutors imaginable: 

## Mario Teaches Typing

Developed by Interplay in 1992, this edutainment DOS game stars Mario teaching you about the American civil war while slowly 
sinking into quicksand.  No joke, see below.

![Mario Teaches Typing - Mario is sinking in to quicksand while you type about the US Civil War](/assets/images/2024/02/16/frogger_mario_civil_war.jpg)

The early lessons aren't helpful here with a single handed keyboard, they're all home row exercises.  Jump in at lesson 3 
though and prepare to be "educated" about the reasons for the American Civil War and *deep breath* the reasons why the 
southern states seceded from the North. It's possible this game may not have aged well.

![Mario Teaches Typing - home row exercises](/assets/images/2024/02/16/frogger_mario_home_row.jpg)

The game repeats the same content, so if you replay exercise 3, you can practically close your eyes and go again.  On one side, 
repetition is good, but it gets very boring, very quickly.  Sorry Mario, down in to the quicksand you go.

![Mario Teaches Typing - results screen](/assets/images/2024/02/16/frogger_mario_results.jpg)

## Typing of The Dead

Since Mario was such a disappointment, it's time to break out the big guns.  Released in 2000 for Windows ([wait, there's an Arcade version of this?](https://www.reddit.com/r/patientgamers/comments/y0b6xt/segas_2000_game_typing_of_the_dead_is_the_most/)), 
Typing of the Dead is a modification to [The House of the Dead 2](https://en.wikipedia.org/wiki/The_House_of_the_Dead_2).  
House of the Dead 2 is a light-gun arcade game, where AMS agents investigate a zombie outbreak in Italy over several stages, 
confronting bosses at the end of each stage.

The voice acting is terrible, it's campy, gothic, spectacular, but the gameplay is fantastic.  "Typing of the Dead" takes the exact same gameplay 
and replaces the light-guns with keyboards.  The on-screen AMS agents are even carrying keyboards, with battery powered Sega Dreamcasts strapped to their backs.

![Typing Of The Dead - Keyboards in the Front, Dreamcasts on the Back](/assets/images/2024/02/16/frogger_typing_dreamcasts.jpg)

As with Mario there are tutor sections that focussed on developing home row and finger skills, but 
we're going to dive right in to the original game.  

Unlike Mario, where you're required to enter in long running sentences, "Typing" asks you to enter in single letters, words and 
short phrases, usually non-sensical, sometimes slightly rude.  The words are non-repeating, so reflexes play a component in this 
game.  Typing to find "G" (second layer, bottom row, under S) takes on an added something when there's axes being thrown at your head.

![Typing Of The Dead - original game mode, first boss fight](/assets/images/2024/02/16/frogger_typing_original.jpg)

Where Mario was intended as an educational package first, and entertainment second (I can still see phrases of the US Civil War burned 
on the inside of my eyelids), "Typing of the Dead" is focused on providing entertaining gameplay.  But with a mix of non-repetition, 
phrase length and mild stress, it's a much more efficient coaching system than Mario.

![Typing Of The Dead - original game mode, results](/assets/images/2024/02/16/frogger_typing_results.jpg)

## Final Thoughts

I'm making the files available for others, in case they have a need for this.  This has been my first kit-built keyboard, my first 
customisation of the QMK firmware and my first (personal) accessibility device.  Developing it and using it has been an education, and I encourage 
others to grab the layout files give this a try, and arguably improve on it.  Also, give the typing games a go - there are others out there, 
I deliberately avoided the likes of Mavis Beacon, but there are some honestly entertaining options.