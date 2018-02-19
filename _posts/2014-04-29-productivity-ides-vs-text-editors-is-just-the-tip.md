---
id: 1201
title: 'Productivity – IDEs vs Text Editors is Just The Tip'
date: 2014-04-29T12:52:04+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=1201
permalink: /2014/04/productivity-ides-vs-text-editors-is-just-the-tip/
mkd_text:
  - |
    A few months ago, [Rob Conery](http://www.wekeroad.com/) wrote a [blog post](http://www.subsonicproject.com/) discussing his career choices, his choice of .NET over PHP and his reasons for doing so.  For many .NET developers, most of this will ring familiar, they were already VB6 or ASP developers, and .NET was the next logical choice.  My reasons were somewhat different, I had no prior experience of Classic ASP, and some limited experience of VB6, but primarily I "walked" in to ASP.NET as part of my job as a developer for a financial company.  ASP.NET Webforms was rough and horrible, it attempted to force a server side event-driven stateful model on a web world that didn't really work that way.  It gave me nightmares.  Many of us battled with it for years, attempting to make it more "webby", stripping back to raw HTML, working with generic handlers, and generally trying to make a square peg fit a quite round hole.  And then ASP.NET MVC came out, and many of us sighed a breath of relief. Rob Conroy helped make the .NET world a better place.  [Subsonic](http://www.subsonicproject.com/) was one of the first ORMs for .NET that gave an ActiveRecord style approach to database records.
    
    In his post, Rob specifically laments his dependency on "visual tools", components that come with his IDE - graphical file browsers, tree views of tables, etc.  Rob's argues that his dependency on visual tools has come at the cost of understanding the underlying concepts and relationships behind those tools.
    
    [Matthew Mombrea](https://plus.google.com/u/0/+MatthewMombrea/posts) argues that [IDEs are absolutely essential](http://www.itworld.com/development/406451/does-relying-ide-development-make-you-bad-programmer) to productive development, that "The truth is that a good IDE makes you vastly more productive than a bad one or none at all".  He even goes so far to say that "I have a hunch that the reason many developers hate on IDEs is that there isn't a good one available for their language."
    
    Ouch.  Best put away Vim, Emacs, Sublime and Textmate folks, because they're clearly useless as development tools.
    
    The holy grail of coding methodology, ["The Pragmatic Programmer"](http://pragprog.com/the-pragmatic-programmer/extracts/tips) has the following tips which feel relevant:
    
    1.  "Use A Single Editor Well"
    2.  "Write Code That Writes Itself"
    3.  "Costly Tools Don't Produce Better Design"
    4.  "Make It Easy to Reuse"
    
    They advocate learning a single text editor and learning it well, and using tools to support your code writing, including code generators and text manipulation tools.  Whilst not actively dismissing costly tools, they're keen to point out that costly tools do not directly mean "good" design.  There's lots of good tools that cost *absolutely nothing*, that are significantly better than tools costing thousands of pounds.
    
    In Appendix A of the Pragmatic Programmer, their list of editors consists of Emacs and Vi.  I think that's quite telling.
    
    I'm in an odd spot.  I use Vim *daily* for 99% of my coding tasks, but I use it with a number of tools to get the job done.  Heck, I also use IDEs (IntelliJ for Java and Visual Studio for .NET), primarily for jobs which are significantly harder to perform from text alone.
    
    I'd like to offer a third viewpoint between Rob and Matthew.  Tools are great, whatever their form, but reliance on tools without understanding is setting yourself up for failure.  Rob Conroy's frustration wasn't explicitly at the visual tools he was using, but the hand-wavy magic they were performing that took away the requirement of understanding the underlying concepts.  Using rails can be a similar experience - whilst you may feel you have more control uttering the magic words:
    
    ``
    rails generate scaffold HighScore game:string score:integer
    ``
    
    If you simply take it as read that "magic happened", then you're asking yourself for a whole lot of pain later when you realise that hours could have been saved in rewriting views if you had just tweaked a config file or template before you started.
    
    At its heart, a tool has a single goal - to abstract away complex actions to reduce the number of discrete operations required to perform a single task.  A good tool is a multiplier of effort in one of two forms:
    
    1. A raw multiplier taking a single command and performing repeat operations.
    2. A complex multiplier taking a single command and performing multiple, complex operations of their own.
    
    A really good tool is one that can combine both.
    
    But use of tooling is not dependant on an IDE, which feels like it runs contrary to Mombrea's point of view.  Rails is a great example of this, very expressive, very extensive tooling that's completely command based.  Inversely, I've used IDEs that contain very little tooling, in reality being a glorified editor, file browser and class explorer.  IDEs are not necessarily equal to tooling.
    
    >  Lord Vetinari, despite his education, had a mind like an engineer. If you
    >  wished to open something, you found the appropriate spot and applied the minimum amount of force
    >  necessary to achieve your end. Possibly the spot was between a couple of ribs and the force was
    >  applied via a dagger, or between two warring countries and applied via an army, but the important
    >  thing was to find that one weak spot which would be the key to everything.
    >  - The Last Hero, Terry Pratchett
    
    Tooling is not a replacement for knowledge, but ignorance of tooling is in itself a sign of inexperience and lack of confidence.  A developer who ignores the need for tooling is doing themselves a disservice, and possibly highlighting a level of insecurity in their own understanding and knowledge.  The good (dare I say pragmatic?) developer sees a complex task and tries to find a way of reducing that complexity, whether using an existing tool or creating a new tool to perform the job.  The most common occurrence of this I still see is in database access.  It's 2014 people.  There are a number of ORMs that do an adequate job of database access for .NET alone: Entity Framework, NHibernate, Subsonic.  And yet, I still see coders hand-rolling database code.  The most common argument I hear in support of this is, "I get much more control this way".  The reality is that the same 100 lines of near identical code are copied and pasted all over the place.  How much time is wasted writing this boilerplate code?  The upfront cost of spending a day writing a tool that can look at the metadata of a SQL Server database, and generate wrapper methods to access your stored procedures, will save hundreds of hours of boilerplate hacking and bug hunting later.  It's a veritable no brainer, and yet, people "feel" more secure running the copy and paste approach.
    
    I think the argument of IDEs vs Text Editors is well and truly exhausted and dead.  Or it bloody well should be.  IDEs in their place, are great.  Text editors (and additional tooling) are also great.  It's 2014, we have great tooling all over the place.  Using tooling as a crutch to compensate for a lack of knowledge is a problem.  Knowledge about what our tools are doing is the solution.  Only then, can we really exploit our tools, and ourselves, to their fullest potential.
dsq_thread_id:
  - "2647550538"
categories:
  - Comment
---
A few months ago, [Rob Conery](http://www.wekeroad.com/) wrote a [blog post](http://www.subsonicproject.com/) discussing his career choices, his choice of .NET over PHP and his reasons for doing so. For many .NET developers, most of this will ring familiar, they were already VB6 or ASP developers, and .NET was the next logical choice. My reasons were somewhat different, I had no prior experience of Classic ASP, and some limited experience of VB6, but primarily I “walked” in to ASP.NET as part of my job as a developer for a financial company. ASP.NET Webforms was rough and horrible, it attempted to force a server side event-driven stateful model on a web world that didn’t really work that way. It gave me nightmares. Many of us battled with it for years, attempting to make it more “webby”, stripping back to raw HTML, working with generic handlers, and generally trying to make a square peg fit a quite round hole. And then ASP.NET MVC came out, and many of us sighed a breath of relief. Rob Conroy helped make the .NET world a better place. [Subsonic](http://www.subsonicproject.com/) was one of the first ORMs for .NET that gave an ActiveRecord style approach to database records.

In his post, Rob specifically laments his dependency on “visual tools”, components that come with his IDE – graphical file browsers, tree views of tables, etc. Rob’s argues that his dependency on visual tools has come at the cost of understanding the underlying concepts and relationships behind those tools.

[Matthew Mombrea](https://plus.google.com/u/0/+MatthewMombrea/posts) argues that [IDEs are absolutely essential](http://www.itworld.com/development/406451/does-relying-ide-development-make-you-bad-programmer) to productive development, that “The truth is that a good IDE makes you vastly more productive than a bad one or none at all”. He even goes so far to say that “I have a hunch that the reason many developers hate on IDEs is that there isn’t a good one available for their language.”

Ouch. Best put away Vim, Emacs, Sublime and Textmate folks, because they’re clearly useless as development tools.

The holy grail of coding methodology, [“The Pragmatic Programmer”](http://pragprog.com/the-pragmatic-programmer/extracts/tips) has the following tips which feel relevant:

  1. “Use A Single Editor Well”
  2. “Write Code That Writes Itself”
  3. “Costly Tools Don’t Produce Better Design”
  4. “Make It Easy to Reuse”

They advocate learning a single text editor and learning it well, and using tools to support your code writing, including code generators and text manipulation tools. Whilst not actively dismissing costly tools, they’re keen to point out that costly tools do not directly mean “good” design. There’s lots of good tools that cost _absolutely nothing_, that are significantly better than tools costing thousands of pounds.

In Appendix A of the Pragmatic Programmer, their list of editors consists of Emacs and Vi. I think that’s quite telling.

I’m in an odd spot. I use Vim _daily_ for 99% of my coding tasks, but I use it with a number of tools to get the job done. Heck, I also use IDEs (IntelliJ for Java and Visual Studio for .NET), primarily for jobs which are significantly harder to perform from text alone.

I’d like to offer a third viewpoint between Rob and Matthew. Tools are great, whatever their form, but reliance on tools without understanding is setting yourself up for failure. Rob Conroy’s frustration wasn’t explicitly at the visual tools he was using, but the hand-wavy magic they were performing that took away the requirement of understanding the underlying concepts. Using rails can be a similar experience – whilst you may feel you have more control uttering the magic words:

`rails generate scaffold HighScore game:string score:integer`

If you simply take it as read that “magic happened”, then you’re asking yourself for a whole lot of pain later when you realise that hours could have been saved in rewriting views if you had just tweaked a config file or template before you started.

At its heart, a tool has a single goal – to abstract away complex actions to reduce the number of discrete operations required to perform a single task. A good tool is a multiplier of effort in one of two forms:

  1. A raw multiplier taking a single command and performing repeat operations.
  2. A complex multiplier taking a single command and performing multiple, complex operations of their own.

A really good tool is one that can combine both.

But use of tooling is not dependant on an IDE, which feels like it runs contrary to Mombrea’s point of view. Rails is a great example of this, very expressive, very extensive tooling that’s completely command based. Inversely, I’ve used IDEs that contain very little tooling, in reality being a glorified editor, file browser and class explorer. IDEs are not necessarily equal to tooling.

> Lord Vetinari, despite his education, had a mind like an engineer. If you wished to open something, you found the appropriate spot and applied the minimum amount of force necessary to achieve your end. Possibly the spot was between a couple of ribs and the force was applied via a dagger, or between two warring countries and applied via an army, but the important thing was to find that one weak spot which would be the key to everything.
   
> – The Last Hero, Terry Pratchett

Tooling is not a replacement for knowledge, but ignorance of tooling is in itself a sign of inexperience and lack of confidence. A developer who ignores the need for tooling is doing themselves a disservice, and possibly highlighting a level of insecurity in their own understanding and knowledge. The good (dare I say pragmatic?) developer sees a complex task and tries to find a way of reducing that complexity, whether using an existing tool or creating a new tool to perform the job. The most common occurrence of this I still see is in database access. It’s 2014 people. There are a number of ORMs that do an adequate job of database access for .NET alone: Entity Framework, NHibernate, Subsonic. And yet, I still see coders hand-rolling database code. The most common argument I hear in support of this is, “I get much more control this way”. The reality is that the same 100 lines of near identical code are copied and pasted all over the place. How much time is wasted writing this boilerplate code? The upfront cost of spending a day writing a tool that can look at the metadata of a SQL Server database, and generate wrapper methods to access your stored procedures, will save hundreds of hours of boilerplate hacking and bug hunting later. It’s a veritable no brainer, and yet, people “feel” more secure running the copy and paste approach.

I think the argument of IDEs vs Text Editors is well and truly exhausted and dead. Or it bloody well should be. IDEs in their place, are great. Text editors (and additional tooling) are also great. It’s 2014, we have great tooling all over the place. Using tooling as a crutch to compensate for a lack of knowledge is a problem. Knowledge about what our tools are doing is the solution. Only then, can we really exploit our tools, and ourselves, to their fullest potential.