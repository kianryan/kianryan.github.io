---
layout: post
title: Pomodoro Clock
thumbnail-img: /assets/images/2020/12/10/clock_hero.jpg
categories: Making
tags:
 - Making
 - AtTiny
 - 3DPrinting
---

![Finished Clock](/assets/images/2020/12/10/clock_hero.jpg)

I love working to [Pomodoro](https://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730).  I don't use it 
all the time, but I do use it as a tool when I need to push for long periods and 
maintain productive focus.

But I don't like Pomodoro timers. They universally suck.  I've tried web based, 
phone based, *watch* based, physical stopwatches, and whilst they're functional, 
they're not very *satisfying*, there's nothing to really interact with.  I
wanted to try and make something that you could touch and flip that felt rewarding 
at the end of each period.  Try to gain that feeling of *done*.

![Breadboarding](/assets/images/2020/12/10/breadboard.jpg)

The first version was huge.  It took a few revisions to get down to it's 
svelte state above and then lived on my desk like this for a few weeks while 
I played with the software.  For the brains, I started with an Arduino Uno but 
moved on to a [Metro Mini](https://www.adafruit.com/product/2590) - it's a 
fantastic substitute at a fraction of the footprint, and breadboard compatible.  
Two of the seven segments are inverted to allow for the dot remain aligned irrespective of 
orientation.  There's some additional code in the project to allow for the mapping.

The code is available on GitHub, and works on either a board such as the Uno/Mini 
or on an microcontroller such as the AtTiny84.

![Prototype Board](/assets/images/2020/12/10/prototype_board.jpg)

Schematic and board prototypes were done in Eagle, and prototypes were ordered 
from [Ragworm](https://ragworm.eu/).  I've done home etched PCBs before, but this
was the first time I ordered fabrication.  The service was smooth and arrived in 
a week.  For the PCB, we use an ATTiny84 rather than continuing to use the Metro Mini.  

![Stack of rejected cases](/assets/images/2020/12/10/case_stack.jpg)

My Prusa Mini arrived during Lockdown.  Since we bought it, it's seen fair service 
printing [Covid models](https://www.prusaprinters.org/prints/36660-floating-virus) and large [flamboyant potatoes](https://www.prusaprinters.org/prints/7681-pineapple-container), but what I really wanted it 
for was designing parts for projects like this.  I had a bit of Fusion 360 already 
under my belt, but I had to step it up a few notches and dig deeper into 
parametric modelling.  And make quite a few revisions.  Anyone who says 3d printing 
is /rapid/ prototyping is lying to you.

To me what was really missing was a patterns library - best practices for common 
themes.  All of the ground I covered has already been covered thousands of times 
by other people solving exactly the same problems, but I'm unaware of a resource 
that documents common modelling practices for things like cases, closures, etc.

![Iterations of buttons](/assets/images/2020/12/10/buttons.jpg)

After ... many iterations, I've finally got something I'm quite happy with.  It's not perfect - but it feels like a complete project from start to finish and it's functional.  It feels nice in the hand, and there's something very tactile about turning the timer when the interval is finished and the (somewhat loud) alarm sounds.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=SAA16skmQ5M
" target="_blank"><img src="http://img.youtube.com/vi/SAA16skmQ5M/0.jpg" 
alt="Pomodoro Clock Demo" width="240" height="180" border="10" /></a>

