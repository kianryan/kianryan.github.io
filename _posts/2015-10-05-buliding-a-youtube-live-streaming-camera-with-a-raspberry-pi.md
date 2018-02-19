---
id: 1289
title: Building a Youtube Live Streaming Camera With A Raspberry Pi
date: 2015-10-05T13:49:08+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=1289
permalink: /2015/10/buliding-a-youtube-live-streaming-camera-with-a-raspberry-pi/
mkd_text:
  - |
    Modern fencing competitions are elaborate affairs.  Major events are televised (or streamed), results are instantly published online and in some cases, competitor information is displayed on the piste as the fencers compete.  Fencers and referees are notified of where and when they need to be by remote screens linked to remote monitors.
    
    Not all events have the budget of an Olympics or World Championship.  But some of these facilities can be provided for a relatively low cost.  Here's how we do it for the Manchester Cadet.
    
    ## Venue and Network
    
    This year, the Manchester Cadet was held at Phillips High School in Manchester.  In previous years, we've used the Bolton Arena, a single large hall which the organisers can lord over from a balcony with visibility over the entire space.  The high school is a different layout, two halls with as seperate office, which we used for admin.
    
    The school has a network with an internet connection, but for reasons of safeguarding and security, there are significant access restrictions on the general internet connectivity.  We have no control over this network, so it's necessary to bring our own.  We use three WRT54gs, running DD-WRT.  One of these units is set to act as a gateway, routing internet traffic through the school network.  The school talked to the LEA and very obligingly, managed to open a single IP address for unfiltered access, this allowed us a significant amount of flexibility on the services we could offer.  The remaining WRT54gs act as wireless extenders and switches for the other equipment used.
    
    ## Server and Software
    
    There's a number of pieces of tournament software on the market.
    
    We use Fencing Time for it's ease of use and comprehensive range of features.  Fencing Time comes in a desktop and server edition.  We the server edition to run the Manchester Cadet.  This allows us to run multiple clients connecting to the same tournament, as well as multiple remote monitors.
    
    This year we ran the server and primary client on a single laptop.  This works, but came with some complications, since this laptop is used for multiple roles.  Next year I'd like to invest in a small micro PC to run the server system.
    
    ## Remote Screens
    
    Remote screens allow us to display results, piste allocations and the tableaux.  All cometitors know where they need to be at any point in time.
    
    We have on loan a number of large, 44 and 50" touch screen PCs.  Each PC comes on it's own trolly, has wifi and ethernet and runs Windows 8.  We connect these to our network and then run Fencing Time's Remote Monitor, connecting back to the server.
    
    For this venue, we used two large screens in the main hall for individual events, one smaller screen in the second hall for team events and a final screen outside of the referee's lounge for referee allocation.
    
    ## Live Results
    
    Live results allow friends and family at home, and those with an interest in the sport, to follow the event's progress.  Combined with cameras, they provide a comprehensive remote experience.
    
    Fencing Time comes with the ability to publish results periodically as the event progresses.  The output comes in a tabbed format clearly showing each round, current and final rankings.  We had it publishing results every five minutes to the ManCadet site for the full weekend.
    
    ## Cameras and Streaming
    
    New for this year, we wanted to live stream the event.  We investigated professional streaming services, and non of them were feasable due to cost or logistics.  For a first year, we wanted to test the feasability, so I built a couple of camera units from Rasperry Pis, documented here.  There are two major restrictions on streaming an event - having enough bandwidth to upload to whatever service will host your stream, and then having adequate bandwidth to stream to stream from there.  Luckily, Youtube Live offers free event streaming up to 1080p, and if anyone has enough bandwidth, they do.  We had some technical difficulties with one of the cameras on the first day, but the second day was perfectly fine.  We had around a steady 20 viewers for the whole weekend.
dsq_thread_id:
  - "4196076106"
categories:
  - Fencing
tags:
  - fencing
  - Raspberri Pi
  - technology
---
[<img src="http://www.kianryan.co.uk/wp-content/uploads/2015/10/pi_situ.jpg" alt="pi_situ" width="5312" height="2988" class="aligncenter size-full wp-image-1294" />](http://www.kianryan.co.uk/wp-content/uploads/2015/10/pi_situ.jpg)

For the ManCadet, we built a couple of cheap streaming cameras to stream content to Youtube Live. You can see the quality of the output [here](https://www.youtube.com/watch?v=v27zo04BcxA).

To do this, we used Raspberry Pis with the camera module and &#8220;official&#8221; case. We stuck them to the wall with gaffer tape and positioned the camera module with blue-tak. For power, we used a 5m USB female to male connector, a standard 2amp usb charger and a 20cm micro usb cable. This gave us some flexibility in positioning the camera a significant distance from power sockets.

For software, we tried a couple of approaches. Raspian includes a client for the camera, raspivid which can output the camera output to standard output. A video4linux driver also exists for the camera, and whilst we could get this to work to host a local rtmp stream, we couldn&#8217;t get this to work to stream directly to Youtube. We couldn&#8217;t get avconv to work either, Youtube tells us there&#8217;s a feed, but there&#8217;s no output. Poo.

On a suggestion, we tried a third party cross-compiled ffmpeg library, encoding the output from raspivid. There&#8217;s a 15-30 second delay in the content being processed at Youtube&#8217;s end, but it works. To make it work yourself, you&#8217;ll need to install ffmpeg from [here](https://drive.google.com/file/d/0B0OC20ApqKZ_YVB3NHF6VU9XTUE/edit?usp=sharing)

You&#8217;ll then need the details of where you&#8217;re uploading to. Head to the [Youtube Live](https://www.youtube.com/live_dashboard) dashboard. You&#8217;ll need the Server URL and the Stream Name/Key fields:

Once you&#8217;ve done all that, execute the following command on your Pi (ideally in a tmux or screen session so you can leave it running):

`raspivid -o - -t 0 -vf -hf -fps 30 -b 6000000 | ffmpeg -re -ar 44100 -ac 2 -acodec pcm_s16le -f s16le -ac 2 -i /dev/zero -f h264 -i - -vcodec copy -acodec aac -ab 128k -g 50 -strict experimental -f flv [SERVER URL]/[STREAM NAME]`

These happily streamed six hours at a time with no complaints. They&#8217;re pretty robust as well, one of them was knocked off the wall a few times. Tape it back up, restart the stream, and presto it carried on working.

Cost per camera:
  
1 x Raspberry Pi 2B &#8211; £28.95
  
1 x Raspberry Pi Camera Module &#8211; £18.58
  
1 x Pi Hut USB Wifi Adapter &#8211; £7.34
  
1 x Raspberry Pi Case &#8211; £6.38
  
1 x Raspberry Pi Camera Module Add On Cover &#8211; £6.45
  
1 x Lindy 5m USB 2.0 Extension Cable &#8211; £4.99
  
1 x Micro Usb cable (already owned)
  
1 x 2A Usb Charger (already owned) 

Total cost per camera: £72.69