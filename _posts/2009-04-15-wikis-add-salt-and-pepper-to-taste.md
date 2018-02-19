---
id: 208
title: 'Wikis &#8211; Add Salt and Pepper to Taste'
date: 2009-04-15T22:42:07+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/04/wikis-add-salt-and-pepper-to-taste/
permalink: /2009/04/wikis-add-salt-and-pepper-to-taste/
ljID:
  - "125"
dsq_thread_id:
  - "174926276"
categories:
  - Code
---
Wikis are wonderful collaborative tools for project development teams. They&#8217;re lightweight, straightforward and usually fit in well with the way most developers think most of the time.

But occasionally, just occasionally one of your developers may be something of a black sheep. Maybe they don&#8217;t like the way a certain part of your corporate wiki looks, or want some customised behaviour for getting rid of irrelevant parts of the page. Maybe they want to improve their productivity (I know, an alien concept).

Take for an example a project I&#8217;m currently working on. One of our wiki pages is a rolling todo list, where new items are added under various categories as additional <li< elements in a list and as tasks are completed they&#8217;re struck out with a <del> tag. As you can imagine, after a while, this page has become something of a swamp of strikethroughs and it makes it very hard to judge the amount of work remaining.

In some cases, [custom stylesheets](http://www.wizcrafts.net/blogs/2007/01/how_to_create_a_custom_personal_styleshe.html) may be adequate. But in other cases, you may need a little more flexibility. &#8220;User Scripts&#8221; are a recently modern concept that have been popularised through the Greasemonkey Firefox extension for use with common web application such as Flickr, Facebook and Gmail. User scripts provide flexibility above and beyond the scope of the original application.

So why not apply this to wikis as well? So today, I wrote the world&#8217;s smallest user script to hide the deleted lines in the wiki:

<pre class="brush: jscript; title: ; notranslate" title="">$(document).ready(function () {
    $("del").parent().parent("li").hide();
});
</pre>

You&#8217;ll notice that I&#8217;m using [JQuery](http://www.jquery.com/) rather than vanilla Javascript. JQuery is my library of choice and there&#8217;s no reason why you can&#8217;t use yours either. There are a few solutions for [loading JQuery at runtime](http://joanpiedra.com/jquery/greasemonkey/), my preference is to simply copy the compressed version into the header of the script. Since the script is loaded locally, the additional 50k is neither here nor there.

For the Safari lovers, there&#8217;s also [GreaseKit](http://8-p.info/greasekit/) (Mac OS X only alas), which provides similar functionality. I&#8217;m currently using this since I&#8217;ve given up on Firefox for a while (I blame [Caius](http://swedishcampground.com/)).

Now I&#8217;ve got a cleared down wiki and I can focus a bit on what I&#8217;ve got _left_ to do. You can too. Or comment with an idea for novel wiki functionality.