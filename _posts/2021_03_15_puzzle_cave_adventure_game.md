---
layout: post
title: Writing Interactive Fiction with Inform 6 and Vorple
thumbnail-img: /assets/images/2021/03/game_opening.png
categories: Code
tags:
 - code
 - inform
 - vorple
 - interactive-fiction
 - adventure-gaming
---

![Puzzle Cave Opening Room](/assets/images/2021/03/game_opening.png)

Some of my earliest memories involve playing adventure games on the family computer.  
Initially titles on the Spectrum, later on the PC.  I've continued that love of 
story-telling, and gain an exceptional joy for a well written story intertwined 
with well crafted puzzles.

![Heavy On The Magick - Water, Fall](/assets/images/2021/03/heavy_magick.png)
![King's Quest 6 - Do Take Sweets From Strangers](/assets/images/2021/03/kq_6.png)


I've wanted to create something of my own in this space for a while, but previously 
struggled.  I'm not very adept graphically, so putting together a point-and-click 
adventure is beyond my skill set.  But I can write a bit, and I can code, so I can 
hack together a text adventure.

[Inform](https://www.inform-fiction.org/) is a language and library designed for writing interactive fiction, and has 
been around since 1993.  [Inform 7](http://inform7.com/) aims to provide a natural language interface more at home for writers, but [Inform 6](https://github.com/DavidKinder/Inform6) is more procedural, and I think most programmers 
feel more at home here.  Try both.  The library is extensive, and caters for a vast 
number of verbs and behaviours out of the box, and represents a lot of the real magic
of Inform.  Handling items, containers, movement - already handled for you in a 
comprehensive world state.

On compiling your Inform files, you'll get a story file in binary form for one of two 
common runtime engines: Z-Code or the more modern [Glulx](https://www.eblong.com/zarf/glulx/).  Z-Code is the format 
originally devised by [Infocom](http://www.infocom-if.org/) for their interactive fiction titles - [Zork, The 
Hitchhiker's Guide to the Galaxy, Leather Goddesses of Phobos](http://www.infocom-if.org/games/games.html).  If you've played 
a classic Infocom adventure text adventure title, you've probably encountered Z-Code.  
Glulx aims to overcome some of the restrictions in the 1979 format with larger file sizes,
32 bit integers, and graphical support.

Playing these games requires an interpreter - a way of running your story file. 
[Frotz](https://davidgriffith.gitlab.io/frotz/) is a popular terminal based Z-Code interpreter that has the advantage of 
running everywhere.  The standard for running Glulx games is Glulxe.  The [interactive fiction archive](http://www.ifarchive.org/) is a good place to start if you would like to explore and play if titles, and Infocom's website hosts the [original Zork games](http://www.infocom-if.org/downloads/downloads.html).

And this has been the standard way to run your text adventures for quite a while.  
In an interpreter, on a local device.  And it's enjoyable.  But it does require 
a bit of set-up time that takes it out of the hands of casual players.

[Vorple](https://vorple-if.com/) is combination of front-end web scripting and Inform extensions that allow you to host your story online with a rich user experience, including graphics, audio, and the full support of HTML, CSS and Javascript.

The [demo game is here](https://hlabrande.itch.io/neon-vertex) and gives an impressive demonstration of what can be done with the combination of Inform 6 story file and Vorple extensions.  

Learning to code in Inform 6 shows the age and design decisions of the language, and often runs contrary to the [principle of least astonishment](https://wiki.c2.com/?PrincipleOfLeastAstonishment).  Learners may be frustrated that 
experimentation alone produces unexpected results.  

For example a bare string:

```
"Hello, there";
```
Is a shortcut for:
```
print_ret "Hello, there";
```
Which will print "Hello, there", then immediately return the current method as true, 
stopping any further statements from executing.

It's hardly obvious, but is all laid out in the [Inform Beginner's Guide](https://www.inform-fiction.org/manual/IBG.pdf), and the [Inform Designer's 
Manual](http://www.ifarchive.org/if-archive/programming/inform6/manuals/designers_manual_4.pdf), two tomes you'll need on a day to day basis *more* than StackOverflow.  Ignore 
the temptation to skip the Beginner's Guide, the early information is crucial to 
understanding how the language expects you to work, and the basic games you build 
will act as reference guides for your own stories.  The Inform Designer's Manual covers 
*almost* everything you will need, and is pretty searchable, once you get the hang of 
Inform's conventions for Verbs and Subs.  [Roger Firth's IF FAQ](http://www.firthworks.com/roger/informfaq/) is helps answer the questions missing in the Designer's Manual.

Visual Studio Code makes an excellent environment to work in, and works well enough
on a Raspberry Pi, especially over ssh with the [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) plugin.  The [Inform 6 
extension](https://marketplace.visualstudio.com/items?itemName=natrium729.inform-6) is excellent for highlighting, I build my stories in multiple source files, 
and use a [task.json](https://github.com/kianryan/RubeRoomI6/blob/main/.vscode/tasks.json) file to build them.  I was testing with [Frotz](https://davidgriffith.gitlab.io/frotz/) until I found the 
impressive [IF Player](https://marketplace.visualstudio.com/items?itemName=natrium729.if-player) plugin by Nathanaël Marion (the same author as the Inform 6 extension) that embeds a story player inside VS Code.

![Visual Studio Code - Inform 6 and IF Player](/assets/images/2021/03/dev_code.png)

[My first adventure game](https://icy-sky-03dc70b03.azurestaticapps.net/) is a series of popular puzzles, and is an exploration of technical content
rather than an attempt at building a cohesive narrative.  It's been about exploring 
what I can do with the platform to give myself a grounding for building future projects.  

Feel free to [play](https://icy-sky-03dc70b03.azurestaticapps.net/), and [explore the code](https://github.com/kianryan/RubeRoomI6).

It's been fun, and I plan on doing more.