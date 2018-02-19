---
id: 1299
title: Running a Modern, Connected, Fencing Competition
date: 2015-10-05T14:21:43+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=1299
permalink: /2015/10/running-a-modern-connected-fencing-competition/
mkd_text:
  - |
    Modern fencing competitions are elaborate affairs.  Major events are televised (or streamed), results are instantly published online and in some cases, competitor information is displayed on the piste as the fencers compete.  Fencers and referees are notified of where and when they need to be by remote screens linked to remote monitors.
    
    Not all events have the budget of an Olympics or World Championship.  But some of these facilities can be provided for a relatively low cost.  Here's how we do it for the Manchester Cadet.
    
    ## Venue and Network
    
    This year, the Manchester Cadet was held at Phillips High School in Manchester.  In previous years, we've used the Bolton Arena, a single large hall which the organisers can view from a balcony with visibility over the entire space.  The high school is quite a different layout, two halls and a separate office, used for admin.
    
    The school has a network with internet connectivity, but for reasons of safeguarding and security, there are significant access restrictions.  We have no control over this network, so it's necessary to bring our own.  We use three WRT54gs, running DD-WRT.  One unit acts as a gateway, routing internet traffic through a single IP on the school network to the outside world.  The school talked to the LEA and very obligingly, managed to open a single IP address for unfiltered access, this allowed us a significant amount of flexibility on the services we could offer.  The remaining WRT54gs act as wireless extenders and switches for the other equipment used.  Cat5 is used to link the WRTs together.
    
    ## Server and Software
    
    The tournament software is used to organise and run the event, and publish information internally and externally.  There's a number of different systems on the market, with varying costs, levels of support and features.
    
    We use Fencing Time for it's ease of use and comprehensive range of features.  Fencing Time comes in a desktop and server edition.  The desktop edition allows a single computer to run an entire event.  We the server edition to run the Manchester Cadet, which allows us to run multiple clients connecting to the same tournament, as well as multiple remote monitors.
    
    This year we ran the server and primary client on a single laptop.  This works, but came with some complications, since this laptop is used for multiple roles.  Next year I'm planning on using a micro-PC to act as a dedicated server.
    
    ## Remote Screens
    
    Remote screens allow us to display results, piste allocations and tableaux for fencers, coaches, parents and referees.  They replace (or supplement) the information being distributed on paper, and vastly decrease the amount of time it takes to disseminate the information.
    
    We are very lucky to have on loan a number of large, 44 and 50" touch screen PCs.  Each PC comes on with it's own trolly, has wifi and ethernet and runs Windows 8.  We connect these to our network and then run Fencing Time's Remote Monitor, connecting back to the server.
    
    For this venue, we used two large screens in the main hall for individual events, one smaller screen in the second hall for team events and a final screen outside of the referee's lounge for referee allocation.  All the displayed information is controlled from the Fencing Time client.
    
    ## Live Results
    
    [Live results](manchestercadet.org/live_results) allow friends and family at home, and those with an interest in the sport, to follow the event's progress.  Combined with cameras, they provide a comprehensive remote experience.
    
    Fencing Time comes with the ability to publish results periodically as the event progresses.  The output comes in a tabbed format clearly showing each round, current and final rankings.  We have it publishing results every five minutes to the ManCadet site for the full weekend.
    
    ## Cameras and Streaming
    
    New for this year, we wanted to [live stream](https://www.youtube.com/watch?v=fV-637Uz0Xw) the event.  We investigated professional streaming services, and non of them were feasible due to cost or logistics.  For a first year, we wanted to test the feasibility, so I [built a couple of camera units from Rasperry Pis](http://www.kianryan.co.uk/2015/10/buliding-a-youtube-live-streaming-camera-with-a-raspberry-pi/).  There are two major restrictions on streaming an event - having enough bandwidth to upload to whatever service will host your stream, and then having adequate bandwidth to stream from there.  Luckily, Youtube Live offers free event streaming up to 1080p, and if anyone has enough bandwidth, they do.  We had some technical difficulties with one of the cameras on the first day, but the second day was perfectly fine.  We had around a steady 20 viewers for the whole weekend.
dsq_thread_id:
  - "4196137427"
categories:
  - Fencing
tags:
  - fencing
  - Raspberri Pi
  - technology
---
[<img src="/assets/images/2015/10/man_overview.jpg" alt="man_overview" width="5312" height="2988" class="aligncenter size-full wp-image-1301" />](/assets/images/2015/10/man_overview.jpg)

Modern fencing competitions are elaborate affairs. Major events are televised (or streamed), results are instantly published online and in some cases, competitor information is displayed on the piste as the fencers compete. Fencers and referees are notified of where and when they need to be by remote screens linked to remote monitors.

Not all events have the budget of an Olympics or World Championship. But some of these facilities can be provided for a relatively low cost. Here&#8217;s how we do it for the Manchester Cadet.

## Venue and Network

[<img src="/assets/images/2015/10/wrt54g.jpg" alt="wrt54g" width="5312" height="2988" class="aligncenter size-full wp-image-1303" />](/assets/images/2015/10/wrt54g.jpg)

[<img src="/assets/images/2015/10/wrt54g_1.jpg" alt="wrt54g_1" width="5312" height="2988" class="aligncenter size-full wp-image-1304" />](/assets/images/2015/10/wrt54g_1.jpg)

This year, the Manchester Cadet was held at Phillips High School in Manchester. In previous years, we&#8217;ve used the Bolton Arena, a single large hall which the organisers can view from a balcony with visibility over the entire space. The high school is quite a different layout, two halls and a separate office, used for admin.

The school has a network with internet connectivity, but for reasons of safeguarding and security, there are significant access restrictions. We have no control over this network, so it&#8217;s necessary to bring our own. We use three WRT54gs, running DD-WRT. One unit acts as a gateway, routing internet traffic through a single IP on the school network to the outside world. The school talked to the LEA and very obligingly, managed to open a single IP address for unfiltered access, this allowed us a significant amount of flexibility on the services we could offer. The remaining WRT54gs act as wireless extenders and switches for the other equipment used. Cat5 is used to link the WRTs together.

## Server and Software

The tournament software is used to organise and run the event, and publish information internally and externally. There&#8217;s a number of different systems on the market, with varying costs, levels of support and features.

We use Fencing Time for it&#8217;s ease of use and comprehensive range of features. Fencing Time comes in a desktop and server edition. The desktop edition allows a single computer to run an entire event. We the server edition to run the Manchester Cadet, which allows us to run multiple clients connecting to the same tournament, as well as multiple remote monitors.

This year we ran the server and primary client on a single laptop. This works, but came with some complications, since this laptop is used for multiple roles. Next year I&#8217;m planning on using a micro-PC to act as a dedicated server.

## Remote Screens

[<img src="/assets/images/2015/10/screen.jpg" alt="screen" width="5312" height="2988" class="aligncenter size-full wp-image-1307" />](/assets/images/2015/10/screen.jpg)

Remote screens allow us to display results, piste allocations and tableaux for fencers, coaches, parents and referees. They replace (or supplement) the information being distributed on paper, and vastly decrease the amount of time it takes to disseminate the information.

We are very lucky to have on loan a number of large, 44 and 50&#8243; touch screen PCs. Each PC comes on with it&#8217;s own trolly, has wifi and ethernet and runs Windows 8. We connect these to our network and then run Fencing Time&#8217;s Remote Monitor, connecting back to the server.

For this venue, we used two large screens in the main hall for individual events, one smaller screen in the second hall for team events and a final screen outside of the referee&#8217;s lounge for referee allocation. All the displayed information is controlled from the Fencing Time client.

## Live Results

[Live results](manchestercadet.org/live_results) allow friends and family at home, and those with an interest in the sport, to follow the event&#8217;s progress. Combined with cameras, they provide a comprehensive remote experience.

Fencing Time comes with the ability to publish results periodically as the event progresses. The output comes in a tabbed format clearly showing each round, current and final rankings. We have it publishing results every five minutes to the ManCadet site for the full weekend.

## Cameras and Streaming

[<img src="/assets/images/2015/10/pi_situ1.jpg" alt="pi_situ" width="5312" height="2988" class="aligncenter size-full wp-image-1308" />](/assets/images/2015/10/pi_situ1.jpg)

New for this year, we wanted to [live stream](https://www.youtube.com/watch?v=fV-637Uz0Xw) the event. We investigated professional streaming services, and non of them were feasible due to cost or logistics. For a first year, we wanted to test the feasibility, so I [built a couple of camera units from Rasperry Pis](http://www.kianryan.co.uk/2015/10/buliding-a-youtube-live-streaming-camera-with-a-raspberry-pi/). There are two major restrictions on streaming an event &#8211; having enough bandwidth to upload to whatever service will host your stream, and then having adequate bandwidth to stream from there. Luckily, Youtube Live offers free event streaming up to 1080p, and if anyone has enough bandwidth, they do. We had some technical difficulties with one of the cameras on the first day, but the second day was perfectly fine. We had around a steady 20 viewers for the whole weekend.