---
id: 426
title: Parcelable, AIDL and IntelliJ
date: 2010-11-08T18:24:21+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=426
permalink: /2010/11/parcelable-aidl-and-intellij/
dsq_thread_id:
  - "175552860"
categories:
  - Code
---
If you&#8217;re using IntelliJ IDEA to build your Android apps (as moi does), and you try to create AIDL files to sit beside your classes (specifically for the Parcelable interface), you may notice your own classes magically disappearing at compile time.

This stumped me for a while until I realised that _normally_ an AIDL file would generate a .java file. It doesn&#8217;t for the Parcelable interface. But there&#8217;s a bug in [IntelliJ](http://youtrack.jetbrains.net/issue/IDEA-59209) which deletes your .java file on build. The way to get around this is to create a new source folder called aidl and add your AIDL file in with the same namespacing as where your main class lives. Then add the aidl folder to the module source folders (in module settings). Your aidl files will now be compiled into your project without nuking the existing .java files.

<img src="/assets/images/2010/11/Screen-shot-2010-11-08-at-18.22.19.jpg" alt="" title="Project Structure"   class="alignleft size-full wp-image-427" />

_Update: Apparently, as of today, this bug has been fixed in IDEA X EAP. Still putting the post out there for people running on earlier versions._