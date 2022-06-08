---
id: 413
title: Application, Service and AIDL
date: 2010-11-08T18:14:35+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=413
permalink: /2010/11/application-service-and-aidl/
dsq_thread_id:
  - "175578555"
categories:
  - Code
---
Our demonstration Android application for Leedshack came in two parts – a user-facing application which the user could use to drop “markers” (points used to attach triggers to) and a background process which checked a remote web service to look for any triggers to fire.

So I don’t repeat anything which is already covered elsewhere – here’s the [Android documentation on services](http://developer.android.com/reference/android/app/Service.html). It’s good. Go read it.

Since we were looking to implement the multiple client architecture, we decided to use the Messenger class to pass messages between the application and the service. Messages can be of simple types (int, etc) or can be complex serialised classes. These serialised classes must inherit from the [Parcelable](http://developer.android.com/reference/android/os/Parcelable.html) interface. The writeToParcel and Constructor define the serialisation/de-serialisation. The interesting CREATOR static property allows the system to work with the parcelable object.

There’s one other part to making this magic work. It is in the documentation but you may overlook it. You require an [AIDL file](http://developer.android.com/guide/developing/tools/aidl.html) with the parcelable definition in. AIDL files are converted at compile time by the aidl/aidl.exe tool to java class files. They’re also included into the built assembly by some form of monkey magic which the system uses to recognise the parcelled type. Your AIDL file sits alongside your .java file and should look something like this:

<div>
  <pre class="brush: java; title: ; notranslate" title="">
package com.orangetentacle.androidsample;

parcelable MyParcelableType;
</pre>
</div>

Congratulations. After all the above, your service should now be able to talk to your application across processes.