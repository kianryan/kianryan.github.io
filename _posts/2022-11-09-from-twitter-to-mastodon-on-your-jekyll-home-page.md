---
layout: post
title: From Twitter to Mastodon, on your Jekyll Home Page
thumbnail-img: /assets/images/2022/11/09/mastodon_bar.png
categories:
  - Code
  - Comment
tags: 
  - jekyll
  - mastodon
  - twitter
---

I've been a member of the [bird site](https://twitter.com) since 2007.  
I have sent 39 thousand tweets, to a tiny audience of under 1000 followers and folow-ees 
(it's a word now).  My first tweet was sent from a dressing gown, on a Saturday, 
after opening an account, trying to stitch Twitter, Flickr and an earlier version 
of this website together.

![First Tweet on Twitter - text reads "Sat in my dressing gown, attempting to work out how to stitch my portfolio system, Flickr, and Twitter together into success."](/assets/images/2022/11/09/first_tweet.png)

On the 27th of October, Elon Musk bought Twitter.  He then walked in to HQ carrying a
sink, fired half the staff, made his personal views about content moderation clear, 
spooked advertisers who are took their business elsewhere, and previously very loyal 
tweeters and now looking to alternative platforms.  Stephen Fry left.

![Stephen Fry's Leaving Tweet - Scrabble Tiles spell 'Goodbye'](/assets/images/2022/11/09/stephen_fry.jpeg)

[Mastodon](https://en.wikipedia.org/wiki/Mastodon_(software)) is 
looking to be the clear winner, a federated platform for microblogging.  For those of 
us who lived through UseNet, Livejournal, Tumblr, Twitter... Mastodon feels like a nice home - 
each server is based around a community and the federation system allows you to follow 
friends in other servers.  There is a learning curve, but there was when we picked up 
Twitter 15 years ago.

For now I'm not leaving the bird site entirely, but I am spending a lot of time over 
on [oldbytes.space](https://oldbytes.space/web/home).  
Feel free to [add my account there](https://oldbytes.space/web/@kianryan).

This website has hosted an embedded Twitter feed since the relaunch on Jekyll, which 
was provided by Twitter's own Javascript and API.  Whilst the Mastodon web and app experience are 
pretty good, I've not found ready to roll widgets.  There is an RSS feed for each 
individual user, so I took a bit of time this evening to change the sidebar from bird site to Mastodon.

![Mastodon Sidebar on home page](/assets/images/2022/11/09/mastodon_bar.png)

[If you want to use the code on you're own site, you are more than welcome to.](https://github.com/kianryan/kianryan.github.io/blob/master/assets/js/mastodon.js)  This 
site runs on [Jekyll](https://jekyllrb.com/), and whilst the code is generic enough to run anywhere (just add a 
reference), Jekyll users can drop it in to assets/js and add it to their JS assets through base.html.

Let me know if it's been a help.