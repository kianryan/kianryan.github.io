---
layout: post
title: How I stream video from every old device on my desk.
thumbnail-img: /assets/images/2025/05/streaming_desk.jpg
categories: lifetrack
tags: streaming
---


I host an almost regular [text and graphic adventure stream over 
on Twitch](https://twitch.tv/betsyandsamantha), where we stream from a range of 
home computers - 8 bit machines 
such as the [ZX Spectrum](/2022-02-07-my-spectrum/) and the C64 through to 16 bit 
machines such 
as the [Atari ST](https://www.youtube.com/watch?v=XTGdeoXpapo) (my preferred platform for Infocom 
games), through to 
[multiple generations of Macintosh hardware](https://www.youtube.com/watch?v=rdaiP3G2Ouo&list=PLyb2hCKjWXFq-z3z4Bh9qPM4gt466G7VK) 
(which we used recently for a multi-generational Myst stream).

![A staged, but typical streaming setup](/assets/images/2025/05/streaming_desk.jpg)

Streaming from this range of hardware requires flexibility on the capturing video 
and audio, 
which I treat as separate sources and then mix in OBS.  If I want to play 
[a DOS game 
with General MIDI support and play it with General MIDI devices](https://www.youtube.com/watch?v=QxqNmAAV6WE&list=PLyb2hCKjWXFpDQrtj9_GZm5l7FBODFGYt) 
one day and then switch to [capturing output from a 48K S-Video modded Spectrum](https://www.youtube.com/watch?v=oAtnxUdh3X4&list=PLyb2hCKjWXFpGI_zjxwLPTwA4VoigY53d) 
the next I can do so pretty quickly.  I'm mostly limited by desk space, 
and avoiding being crushed by an ever growing tower of aging hardware. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZShVx1eQBHU?si=QhipDg9GjopTS-cg&amp;start=3840" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I've now been given an Amiga to rebuild.  Good times.

Video is captured using a pair of [Startech USB3HDCAP capture cards](https://www.startech.com/en-gb/audio-video-products/usb3hdcap). 
Natively these can capture a range of inputs - composite, s-video, SCART/RGB, 
VGA, DVI and HDMI.  Used with the last official driver set they're surprisingly 
tolerant of a range of input sources (The unofficial "Thankless" drivers which 
were the preferred drivers for this device no longer appear to work).  I can feed 
these devices /almost/ anything, and they'll take it.  I use two so I can 
play games side by side from two systems.  As a warning, the two cards don't 
always get on well with each other and can play USB disappearing acts.

<iframe width="560" height="315" src="https://www.youtube.com/embed/03DLv90VSxI?si=9cKsIHuZI3OtNHTp&amp;start=4276" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The USB3HDCAP captures, but doesn't upscale well, so for non VGA/DVI sources I add 
an [OSSC](https://videogameperfection.com/products/open-source-scan-converter/) and 
for composite/s-video a [Koryuu Transcoder](https://videogameperfection.com/products/koryuu-transcoder/). 
That allows me to take component, s-video and RGB sources (SCART/VGA),
upscale by 2x-4x and perform some cleaning before passing a HDMI signal to the 
USB3HDCAP.  This helps significantly when dealing with noisy input sources like 
the 48K Spectrum. Unfortunately, I only have one of these, so if we're running 
side by side, I try to use a less noisy second device (most 16/32 bit devices).

<iframe width="560" height="315" src="https://www.youtube.com/embed/3smIP0g31u0?si=2ikWb7N3W0mej6qz&amp;start=34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Device audio is captured through a [Focusrite 18i8 2nd Gen](https://downloads.focusrite.com/focusrite/scarlett-2nd-gen/scarlett-18i8-2nd-gen), 
which also handles XLR microphone duties.  Two 3.5mm aux cables are attached 
to inputs to plug directly into into computer line-outs as needed.

![A basic black case holding a lot of audio equipment](/assets/images/2025/05/tower_of_power.jpg)

Finally, there's a small stack of MIDI hardware.  A 
[Roland MT-32](https://en.wikipedia.org/wiki/Roland_MT-32), 
[Roland SC-55](https://en.wikipedia.org/wiki/Roland_SC-55), 
[Yamaha MU-80](https://en.wikipedia.org/wiki/Yamaha_MU-series), 
[Yamaha FB-01](https://www.vintagesynth.com/yamaha/fb-01)
and [MidiSID](https://peacockmedia.software/midisid/) (Sheila Dixon's General Midi/MT-32 compatible SID chip MIDI instrument)
sit on the audio rack plugged into a 
[Focusrite OctoPre](https://focusrite.com/octopre). 
They stay connected to a [ESI M4U eX 4 port MIDI interface](https://www.esi-audio.com/products/m4uex/) 
to act as a multi way MIDI in-out from the Atari ST 
or as a multi-out from the PC using [Bome's Midi Translator Pro](https://www.bome.com/products/miditranslator). 
This is a great set 
up for playing old (DOS adventure games via [ScummVM](https://www.scummvm.org/),
and capturing or mixing the 
General MIDI output of multiple devices simultaneously to see how they compare.

All this gets pulled together in [OBS](https://obsproject.com/) for live broadcast on a moderately powered 
PC.  Each audio device is configured with [ASIO](https://asio4all.org/), and each 
video capture device is 
usually passed through a de-noise algorithm (usually the NVidia one).  For quiet 
streams, such as text adventure games, I'll use the MIDI hardware to play a 
[range of MIDI files for background audio](https://youtu.be/cT6QZ5FVRPc?feature=shared&t=62).  This is especially useful when stuck 
at the dead end of a puzzle, the cogs are visibly whirring, and you temporarily 
forget you're on camera.

<iframe width="560" height="315" src="https://www.youtube.com/embed/cT6QZ5FVRPc?si=3rVi8nodQK8ZitSm&amp;start=60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I've been doing this in various forms for a few years now, and slowly refining 
both the broadcasts and the hardware.  The MIDI tower especially started off as 
one or two pieces of kit, and has transformed in to the current beast.  I hope 
my streaming has got better over the years, I appreciate it's quite a niche area 
so I'm grateful for the few people that hang around each week, keep me company 
and help solve puzzles.

After Twitch changed their rules over long term video storage, I now export 
completed plays to [YouTube](https://www.youtube.com/@betsyandsamantha). I try to 
to [stream on Tuesday evenings](https://twitch.tv/betsyandsamantha).
