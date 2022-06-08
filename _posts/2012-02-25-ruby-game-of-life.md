---
id: 681
title: Ruby Game of Life
date: 2012-02-25T19:59:45+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=681
permalink: /2012/02/ruby-game-of-life/
dsq_thread_id:
  - "589156726"
categories:
  - Code
---
I am learning Ruby and Vim. I’m also attending the [Preston Codejo](http://www.magmadigital.co.uk/2012/preston-codejo/) hosted by [Magma Digital](http://www.magmadigital.co.uk/), where were using Ruby as the driver.

As I am wont when learning a new platform (or new techniques on a new platform), there is a build of Conway’s Game of Life on GitHub:
  
<https://github.com/kianryan/RubyGameLife>

This is a curses based implementation which can run with either the defaults, or run with parameters:

<pre class="brush: bash; title: ; notranslate" title="">ruby life.rb [rows] [cols] [num_pos]
where:
rows - Number of rows to display
cols - Number of cols to display
num_pos - Number of initial positions to set.  This is done randomly, so you are likely to get less positions than specified.
</pre>

Press q to quit when you’re bored. Feel free to fork, make changes, ideas, pulls, etc.