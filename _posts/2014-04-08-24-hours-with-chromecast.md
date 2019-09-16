---
id: 1180
title: 24 Hours With Chromecast
date: 2014-04-08T22:55:43+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=1180
permalink: /2014/04/24-hours-with-chromecast/
mkd_text:
  - |
    Over the past few years, we've used a number of solutions to stream content from various sources around the house.  We started out with a classic Xbox running XBMC (when the X really did stand for XBox), then we upgraded to a dedicated media PC which streamed content from our NAS and iPlayer - again using XBMC.  The Linux based XBMC box didn't work with Netflix, so we then grabbed a XBox Live subscription to use it with the 360.  But the 360 didn't work with content on a Linux fileserver.
    
    Grr.
    
    None of our previous solutions has allowed us to play content from three primary independent sources: Netflix, BBC iPlayer, and local media stored on our NAS.  So after much grring, and general annoyance at paying for an XBox Live account that /really/ was only used for streaming, we tootled off to PC World and bought a Chromecast.
    
    It's been in near constant use for the past 24 hours, so I feel some comment is probably required.
    
    Hardware and Wifi
    -----------------
    
    The device is tiny.  I've known bigger novelty USB pen drives.  I'm considering a second device for throwing in the bag for presentations as an alternative to cabled connections.
    
    In the box is the Chromecast itself, a short HDMI extender, a USB to micro USB cable and a UK mains USB plug.  The Chromecast itself is USB powered, so can be plugged in to an existing USB port on your telly or amp.  Bear in mind though that the Chromecast supports HDMI-CEC, so if you want it to turn your telly and stack on, you'll need to use the supplied wall-plug.
    
    The corner of our living room is a little crowded.  40" telly, blu-ray player, 360, Wii, Onkyo amp, mini-ITX PC, big speakers.  With all the mains cabling, magnets and various other bits, it's the Bermuda triangle of radio signals.  I can imagine that in most normal use-cases the included HDMI extender may help here, but we had to plug in a full length 2m HDMI cable with a female to female connector and position the Chromecast a few feet away from the stack.  At which point we got a full five bars of Wifi.
    
    Software
    --------
    
    There is none.  Or at least none for you to play with without rooting it.  Turning the device on for the first time, you'll need to run a setup app.  There's no Linux version, but there is support for Windows, Mac, iOS and Android.  I ran the setup on a Galaxy S3, and it worked first time.  Once the Chromecast is configured there is ... nothing to see.  Well, that's a slight lie, there's a montage of pretty pictures, but that's it.  The Chromecast itself acts as nothing more than a target to run apps on, delivered from your phone or browser. So...
    
    Software
    --------
    
    ### Netflix
    
    Netflix gave us a headache, partially of our own making.  The act of casting itself is straightforward - you tap the little cast icon on your phone, and it flings over to your Chromecast.  The Netflix app shows a little player you can use to pause, resume and seek in video.  We've found that if one device starts the cast, you need the same device to control the cast.  This will probably be improved in future app releases.
    
    Our headache came from what looked like severe rate limiting (which on a 50MB fibre service shouldn't be a problem).  Since there are no indicators of stream or resolution rate, we were worried that the device was just simply crap.  Playing [this video](http://movies.netflix.com/WiMovie/Example_Short_23.976/70136810) confirmed something was up when we realised we were stuck with a 1050Kbps video at 640x480, not exactly the promised 1080p.  We found that unlike the mobile app and 360 app, Netflix on Chromecast honours the "data usage" setting on the Netflix page.  Turned that back to HD and suddenly we have 1080p content at 5Mbps.
    
    _Note:_ Something I've only just realised as I'm writing this.  I'm a little sensitive to noise when watching content on the telly, and both the 360 and media PC irritated me with fans whilst they were on.  The Chromecast is completely silent.  Ahhh.
    
    ### BBC iPlayer
    
    The [BBC iPlayer](https://play.google.com/store/apps/details?id=bbc.iplayer.android) app works well for television content.  Really well.  Video quality exceeded Netflix.  At the moment the app doesn't support casting Radio programs.  Feature set is the same as Netflix, cast program, control playback.  It also supports casting live TV.  Unlike Netflix, another device can control playback after it starts, so it shows it is definately possible.  I hope the BBC see the light and add Chromecast support to the iPlayer Radio app.  Soon.
    
    ### Youtube
    
    [Youtube](https://play.google.com/store/apps/details?id=com.google.android.youtube) works well.  Really well.  Same cast, control experience as the iPlayer app.  A nice additional feature is the "TV Queue" that allows yourself and other people (with other devices) to queue content to cast.  It works really well (bit of a running theme here).  Google are using the Youtube app to show the capabilities of Chromecast, and it's a pretty fine example to follow.
    
    ### Plex
    
    The Chromecast does not support local content.  It's missing any sense of storage for that.  It doesn't even support local network content.  There are a number of apps that allow content from phones to be directly cast, and there's a few workaround to [stream content from a desktop browser](http://www.gizmag.com/5-ways-to-get-more-out-of-google-chromecast/29125/).  [Plex](http://plex.tv) offers a client/server solution to serve content from network devices.  Free and paid versions of Plex exist, new features come to the paid version first (reasonable enough).  Chromecast support was recently added to the free version, but you'll need the [Android app](https://play.google.com/store/apps/details?id=com.plexapp.android) (a paid app) to cast it.  For a few quid, I think it's worth it.
    
    Our NAS is a HP N40L Microsever.  AMD Turion, 2GB RAM, running Ubuntu 12.04 LTS.  Plex server install was a straightforward .deb install over ssh, then configuration through a web browser.  Sources added for music, movies and television content.  Painless, and took around 20 minutes in total.
    
    The mobile app picked up the content directly, and content can be streamed to both mobile and Chromecast.  Our underpowered server can happily cope with SD content (transcoding rate of 6), and can just (transcoding rate of 1.1) cope with transcoding 1080p content.  In all honestly, the experience was less effort than running XBMC on the media PC.  I'm impressed.
    
    ### Desktop Chrome Support
    
    Desktop Chrome browser tabs can be cast using [a Chrome plugin](https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd?hl=en).  Note the contents of the browser window are cast, you don't get a cursor - so maybe not ideal in this way for demos.  The browser extension does have an option for casting the full desktop screen and audio, this works but the lag is quite significant.  Possibly useful for demos, but nowhere near quick enough for games.  I'd like to see this improve in the future, at least well enough to use with point-and-click adventure games.
    
    Video Quality
    -------------
    
    We have found ... one oddity.  And it appears to only be with Netflix content.  On the 360, content with relatively high noise levels appears pretty well but on the Chromecast video appears to suffer from significant compression problems.  We noticed this originally on Battlestar Galactica, which was already shot in low light, quite noisy, with the occassional penchant for Abrahms-esque lens-flair.  Watching content sourced digitally (Netflix original content for example), looks absolutely tack sharp.  Note this doesn't appear to happen on Youtube or iPlayer content, so we suspect it's the way Netflix are delivering the content for Chromecast.
    
    Round-Up
    --------
    
    I'm impressed.  I think it's fair to say that you need some level of buy-in to the Android eco-system to make this work.  Whilst Netlfix and Youtube have options to cast directly from the browser, other sources are reliant on their mobile apps.  If you're a household already running mostly on Android phones, for Â£30 this feels like a bit of a no-brainer.  App support is limited to a handful in the store, but it currently supports all the sources we use on a day to day basis.  API support is good, so I suspect we'll see more apps supporting Chromecast in the future.
dsq_thread_id:
  - "2597163647"
categories:
  - LifeTrack
---
Over the past few years, we’ve used a number of solutions to stream content from various sources around the house. We started out with a classic Xbox running XBMC (when the X really did stand for XBox), then we upgraded to a dedicated media PC which streamed content from our NAS and iPlayer – again using XBMC. The Linux based XBMC box didn’t work with Netflix, so we then grabbed a XBox Live subscription to use it with the 360. But the 360 didn’t work with content on a Linux fileserver.

Grr.

None of our previous solutions has allowed us to play content from three primary independent sources: Netflix, BBC iPlayer, and local media stored on our NAS. So after much grring, and general annoyance at paying for an XBox Live account that /really/ was only used for streaming, we tootled off to PC World and bought a Chromecast.

It’s been in near constant use for the past 24 hours, so I feel some comment is probably required.

## Hardware and Wifi

The device is tiny. I’ve known bigger novelty USB pen drives. I’m considering a second device for throwing in the bag for presentations as an alternative to cabled connections.

In the box is the Chromecast itself, a short HDMI extender, a USB to micro USB cable and a UK mains USB plug. The Chromecast itself is USB powered, so can be plugged in to an existing USB port on your telly or amp. Bear in mind though that the Chromecast supports HDMI-CEC, so if you want it to turn your telly and stack on, you’ll need to use the supplied wall-plug.

The corner of our living room is a little crowded. 40″ telly, blu-ray player, 360, Wii, Onkyo amp, mini-ITX PC, big speakers. With all the mains cabling, magnets and various other bits, it’s the Bermuda triangle of radio signals. I can imagine that in most normal use-cases the included HDMI extender may help here, but we had to plug in a full length 2m HDMI cable with a female to female connector and position the Chromecast a few feet away from the stack. At which point we got a full five bars of Wifi.

## Software

There is none. Or at least none for you to play with without rooting it. Turning the device on for the first time, you’ll need to run a setup app. There’s no Linux version, but there is support for Windows, Mac, iOS and Android. I ran the setup on a Galaxy S3, and it worked first time. Once the Chromecast is configured there is … nothing to see. Well, that’s a slight lie, there’s a montage of pretty pictures, but that’s it. The Chromecast itself acts as nothing more than a target to run apps on, delivered from your phone or browser. So…

## Software

### Netflix

Netflix gave us a headache, partially of our own making. The act of casting itself is straightforward – you tap the little cast icon on your phone, and it flings over to your Chromecast. The Netflix app shows a little player you can use to pause, resume and seek in video. We’ve found that if one device starts the cast, you need the same device to control the cast. This will probably be improved in future app releases.

Our headache came from what looked like severe rate limiting (which on a 50MB fibre service shouldn’t be a problem). Since there are no indicators of stream or resolution rate, we were worried that the device was just simply crap. Playing [this video](http://movies.netflix.com/WiMovie/Example_Short_23.976/70136810) confirmed something was up when we realised we were stuck with a 1050Kbps video at 640×480, not exactly the promised 1080p. We found that unlike the mobile app and 360 app, Netflix on Chromecast honours the “data usage” setting on the Netflix page. Turned that back to HD and suddenly we have 1080p content at 5Mbps.

_Note:_ Something I’ve only just realised as I’m writing this. I’m a little sensitive to noise when watching content on the telly, and both the 360 and media PC irritated me with fans whilst they were on. The Chromecast is completely silent. Ahhh.

### BBC iPlayer

The [BBC iPlayer](https://play.google.com/store/apps/details?id=bbc.iplayer.android) app works well for television content. Really well. Video quality exceeded Netflix. At the moment the app doesn’t support casting Radio programs. Feature set is the same as Netflix, cast program, control playback. It also supports casting live TV. Unlike Netflix, another device can control playback after it starts, so it shows it is definately possible. I hope the BBC see the light and add Chromecast support to the iPlayer Radio app. Soon.

### Youtube

[Youtube](https://play.google.com/store/apps/details?id=com.google.android.youtube) works well. Really well. Same cast, control experience as the iPlayer app. A nice additional feature is the “TV Queue” that allows yourself and other people (with other devices) to queue content to cast. It works really well (bit of a running theme here). Google are using the Youtube app to show the capabilities of Chromecast, and it’s a pretty fine example to follow.

### Plex

The Chromecast does not support local content. It’s missing any sense of storage for that. It doesn’t even support local network content. There are a number of apps that allow content from phones to be directly cast, and there’s a few workaround to [stream content from a desktop browser](http://www.gizmag.com/5-ways-to-get-more-out-of-google-chromecast/29125/). [Plex](http://plex.tv) offers a client/server solution to serve content from network devices. Free and paid versions of Plex exist, new features come to the paid version first (reasonable enough). Chromecast support was recently added to the free version, but you’ll need the [Android app](https://play.google.com/store/apps/details?id=com.plexapp.android) (a paid app) to cast it. For a few quid, I think it’s worth it.

Our NAS is a HP N40L Microsever. AMD Turion, 2GB RAM, running Ubuntu 12.04 LTS. Plex server install was a straightforward .deb install over ssh, then configuration through a web browser. Sources added for music, movies and television content. Painless, and took around 20 minutes in total.

The mobile app picked up the content directly, and content can be streamed to both mobile and Chromecast. Our underpowered server can happily cope with SD content (transcoding rate of 6), and can just (transcoding rate of 1.1) cope with transcoding 1080p content. In all honestly, the experience was less effort than running XBMC on the media PC. I’m impressed.

### Desktop Chrome Support

Desktop Chrome browser tabs can be cast using [a Chrome plugin](https://chrome.google.com/webstore/detail/google-cast/boadgeojelhgndaghljhdicfkmllpafd?hl=en). Note the contents of the browser window are cast, you don’t get a cursor – so maybe not ideal in this way for demos. The browser extension does have an option for casting the full desktop screen and audio, this works but the lag is quite significant. Possibly useful for demos, but nowhere near quick enough for games. I’d like to see this improve in the future, at least well enough to use with point-and-click adventure games.

## Video Quality

We have found … one oddity. And it appears to only be with Netflix content. On the 360, content with relatively high noise levels appears pretty well but on the Chromecast video appears to suffer from significant compression problems. We noticed this originally on Battlestar Galactica, which was already shot in low light, quite noisy, with the occassional penchant for Abrahms-esque lens-flair. Watching content sourced digitally (Netflix original content for example), looks absolutely tack sharp. Note this doesn’t appear to happen on Youtube or iPlayer content, so we suspect it’s the way Netflix are delivering the content for Chromecast.

## Round-Up

I’m impressed. I think it’s fair to say that you need some level of buy-in to the Android eco-system to make this work. Whilst Netlfix and Youtube have options to cast directly from the browser, other sources are reliant on their mobile apps. If you’re a household already running mostly on Android phones, for Â£30 this feels like a bit of a no-brainer. App support is limited to a handful in the store, but it currently supports all the sources we use on a day to day basis. API support is good, so I suspect we’ll see more apps supporting Chromecast in the future.