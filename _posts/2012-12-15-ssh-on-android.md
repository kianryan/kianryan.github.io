---
id: 872
title: SSH on Android
date: 2012-12-15T21:53:09+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=872
permalink: /2012/12/ssh-on-android/
dsq_thread_id:
  - "976530036"
categories:
  - Code
tags:
  - android
  - ssh
---
There are a few SSH clients out there for Android, [ConnectBot](https://play.google.com/store/apps/details?id=org.connectbot&hl=en) being the most popular and [BTEP](https://play.google.com/store/apps/details?id=com.magicandroidapps.bettertermpro&feature=search_result#?t=W251bGwsMSwxLDEsImNvbS5tYWdpY2FuZHJvaWRhcHBzLmJldHRlcnRlcm1wcm8iXQ..) also proving popular. Both of these provide good front end interfaces, but suck on keyboard support. There&#8217;s nothing more frustrating than pressing Ctrl on a bluetooth keyboard, only for it to behave entirely contra to your expectations.

Instead, I use a combination of the [Android Terminal Emulator](https://play.google.com/store/apps/details?id=jackpal.androidterm&feature=search_result#?t=W251bGwsMSwxLDEsImphY2twYWwuYW5kcm9pZHRlcm0iXQ..), which is an _excellent_ emulator, providing support for meta-keys and back-key/escape mapping and [DropBear SSH client](https://matt.ucc.asn.au/dropbear/dropbear.html) (Android modifications are availible [here](http://teslacoilsw.com/dropbear)), which quite a few of the SSH clients on the market are already based on. If you&#8217;re running [CyanogenMod](http://www.cyanogenmod.org/), you should already have both the terminal and ssh client installed. It&#8217;s worth getting the latest version of the terminal emulator from the market, since they recently added 256 colour support. If you&#8217;re running other ROMS, you may need to install one or other of the components. Stock firmwares may need rooting.

DropBear public keys work a bit different than OpenSSH ones, so you&#8217;ll need to follow a slightly different set of instructions to generate your key. [This guide](http://yorkspace.wordpress.com/2009/04/08/using-public-keys-with-dropbear-ssh-client/) should set you on the right lines.

Dropbear doesn&#8217;t have a central repository of keys, so either you need to pass the key file to dropbear every time you connect, (which is tedious) _or_ set up a script. I keep a local folder on the tablet with scripts to connect to various servers, another for the keys, and then add the script folder to the path within Android Terminal Emulator. So &#8211; to connect to the server &#8220;toy&#8221;, all I have to do is fire up the terminal and then type sshtoy.

It&#8217;s quite a bit of work to set up, but once it&#8217;s up and running, it&#8217;s the best ssh client I&#8217;ve found on Android. It works just as well with the [Hacker&#8217;s Keyboard](https://play.google.com/store/apps/details?id=org.pocketworkstation.pckeyboard&hl=en) as it does physical ones.

_Edit: The Android default terminal font isn&#8217;t bad, but I find it odd to go from one machine to another and have the font change. I currently use [Source Code Pro](http://blogs.adobe.com/typblography/2012/09/source-code-pro.html) everywhere (which I&#8217;ve found excellent), you can change fonts on rooted devices [pretty easily.](http://www.androidauthority.com/how-to-change-the-fonts-on-your-android-phone-32078/)_