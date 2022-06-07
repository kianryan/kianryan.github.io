---
layout: post
title: Electromagnetic Field 2022 and a Weather App for Your TiDAL
thumbnail-img: /assets/images/2022/06/07/thumbnail.png
categories: Coding
tags: 
  - making
  - esp32
  - emfcamp
  - tidal
---

We are just back from [Electromagnetic Field 2022 held at Eastnor, UK](https://www.emfcamp.org/).  Whilst trying to avoid sounding like a Youtube mid-roll 
ad, Electromagnetic Field is a camping festival for people who like to tinker, whatever their form of tinkering.  In practical terms, 
during the day there's talks and workshops: electronics, coding, music, science, and in the evening movies, drinking and music.  All 
around the venue different groups run installations showing their latest ideas, hacks, and art pieces.

![EMF Sign](/assets/images/2022/06/07/emf_sign.jpg)


This was our first time at the event - friends have suggested we go for _years_, but other commitments have meant we've never been 
able to make it.  Being involved in an RTA with a car completely cleared my schedule for a large chunk of the year, so we 
grabbed a couple of late tickets.

Part of the ticket price goes on a ["badge"](https://badge.emfcamp.org/wiki/Main_Page), a piece of IOT hardware with enough bits on to allow you to run self contained ideas.  
[This year's badge](https://github.com/emfcamp/tidal-docs) has a small colour screen, ESP32 processor, wifi, accelerometer, 
magnetometer, LED, joystick, buttons, LiPo battery, USB-C and a breakout board (the breakout board is a nice touch). 
It also runs [Micropython](https://micropython.org/), so you can connect over serial to talk to the REPL and run apps.

![EMF Badge - TiDAL](/assets/images/2022/06/07/emf_tidal_hello.jpg)

EMF runs on two concepts, which are encapsulated by the badge - __ideas__ and __volunteers__.  Ideas shape the event.  They set 
the policy for how your members will interact with your event.  Not all ideas will work.  Some ideas change over the 
duration of the event cycle.  Sometimes, an idea is formed, and then you end up committing to delivering it because 
you have no alternative.  Some ideas suffer from Goldilocksing, it can be hard to judge getting the size of the idea right.

Volunteers are the driving force.  I've been on two committees for the Discworld Convention, I understand how much work 
goes in to running events.  Volunteers give their all to make sure these events happen, from committee level down to 
runners on the ground.  No volunteers, no event.  

EMF has *big* ideas. Three huge marquees, a schedule that runs constantly, the *badge*, [Null sector](https://twitter.com/search?q=null%20sector%20emfcamp).  These are not small 
ideas and take an army of volunteers to co-ordinate and execute.  For such big ideas, they land well enough, and embrace 
a hacker ethos of "good enough".  The badge is an amazing idea, here's a great device to tinker on.  But the wifi antennae 
is so small, you need to sit next to the router on site to pick up a signal.  I still got a functional app on it, 
so it's good enough!

This is not the most accessible of venues.  We arrived, what we thought, was a reasonable time of 3PM on Thursday.  As 
first timers, with no direction, and not attached to a village, we eventually found a spot opposite the badge tent.  We 
didn't feel comfortable taking an accessible spot (a month ago, we probably would have), and struggled to find 
accessibility policies.  At the minute, we both have some minor accessibility concerns, so had to continually make decisions 
over the weekend, including taking the weather in to account and wrapping up a day early.  Honestly, whilst just about 
"good enough", I think this is one area where some additional steps could be taken to be a little more inclusive.

We made it to a bunch of talks, and somehow managed none of the workshops.  Early on we bumped in to an old friend (and 
then another, and then another), who gave a good bit of advice - that while the talks are there, going and seeing things 
is a good use of time.  So rather than stick to a strict schedule of talks, we often did just that, going to see some 
talks but bumbling around a good deal and seeing things and taking it in.  Treating it less like a conference, and more 
like a festival.

![EMF Talk](/assets/images/2022/06/07/emf_talk.jpg)

We will hopefully be back in two years.

So, whilst sat at home and drying out, I grabbed the laptop, and my TiDAL badge, and my mind drifted to the rather 
temperamental weather over the weekend.  Glorious at the outset, it degraded a bit as the weekend went on.  And wouldn't 
it be nice if you would wear your weather for EMF around your neck?

I took a look at the WebSerial interface - and that was ... fine.  But a little frustrating for the way I wanted to work.

So - I checked the docs, and found [we get the MicroPython REPL on the USB port, and can use pyboard.py to manage files](https://github.com/emfcamp/tidal-docs/blob/main/AppQuickstart.md).  A 
minute or two later we had a tmux session running with pyboard in the top right for transferring files, [minicom](https://en.wikipedia.org/wiki/Minicom) in the 
bottom right for the REPL and a vim in the left for code editing.

![TMux Session for TiDAL Editing](/assets/images/2022/06/07/emf_tmux_tidal.png)

Using [urequests](https://makeblock-micropython-api.readthedocs.io/en/latest/public_library/Third-party-libraries/urequests.html), and [OpenWeatherMap](https://openweathermap.org/), I can turn on the wifi, make requests and return json containing forecast data:

```python

class MyScreen(Screen):

  def try_fetch_weather_json(self):

    print('Connecting to Wifi')
    if not wifi.status():
      wifi.connect()
      wifi.wait()
      print('Wifi connected')
      if not wifi.status():
        print('No wifi')
        return None

    lat = 52.5769
    lon = 2.4269
    url = f'http://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&units=metric&appid={api_key}'
    response = urequests.get(url)
    json = response.json()
    wifi.disconnect()
    print('Return response')
    return json

  def update_display(self, lines, text):
    Label(self.wri, lines, 2, text)

  def update_weather(self):
    json = self.try_fetch_weather_json()
    if (json):
      current_weather = json['current']['weather'][0]
      next_weather = json['hourly'][12]['weather'][0]

      # Clear display and show now/next weather
      self.update_display(5, f'Now: {current_weather["main"]}')
      self.update_display(20, f'Next: {next_weather["main"]}')
    else:
      self.update_display(5, 'Unable to fetch')


  def __init__(self):
    super().__init__()
    self.wri = CWriter(ssd, arial10, GREEN, BLACK, verbose=True)
    self.update_display(5, 'Loading...')
    self.update_weather()
  
```

![TiDAL Weather - Text Version](/assets/images/2022/06/07/emf_tidal_text.jpg)

But why stop with text on the screen?  We want graphics!  If we switch to a TextApp, we can write
directly to the Display object, and the St7789 Display object supports a [jpg method](https://github.com/russhughes/st7789_mpy/blob/master/README.md) for rendering a 
jpg directly to the display.

So, we write a small script to grab and [transform all the icons from OpenWeatherMap from PNG to JPG](https://github.com/kianryan/emf_weather/blob/main/img/get-image.py), 
and then we add a draw_image method to draw the appropriate icon:

```python
def draw_image(self, icon, y):
	display.jpg(f'/apps/emf_weather/jpg/{icon}.jpg', 0, y)
```

We now put this together with some line splitting and revised text rendering that allows us to print 
multi-line forecasts:

```python
def split_lines(self, line, max_length):
    lines = []
    words = line.split(' ')
    line = ''
    for word in words:
        if len(line + ' ' + word) > max_length:
            lines.append(line[:-1])
            line = ""
        line = line + word + ' '
    lines.append(line[:-1])
    return lines

def update_display(self, y, lines):
	for idx, line in enumerate(lines):
    ypos = (font.HEIGHT + 1) * idx + y
  display.text(font, line, 0, ypos, BLUE, WHITE)
```
![TiDAL Weather - Graphical Version](/assets/images/2022/06/07/emf_tidal_graphics.jpg)

And we get a now and next 12 hour weather forecast, with icons, and description overlaid.  The full code 
is available on [GitHub](https://github.com/kianryan/emf_weather) and the application can be downloaded via the [TiDAL Hatchery](https://2022.badge.emfcamp.org/projects/emf_weather).






