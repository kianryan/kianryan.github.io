---
id: 751
title: 'Let&#8217;s Do The Timewarp Again &#8211; Back To Vim'
date: 2012-05-09T14:53:53+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=751
permalink: /2012/05/back-to-vim/
dsq_thread_id:
  - "682523741"
categories:
  - Code
---
<a href="http://www.kianryan.co.uk/2012/05/back-to-vim/capture2/" rel="attachment wp-att-755"><img src="/assets/images/2012/05/Capture2-300x187.jpg" alt="" title="Capture2" width="300" height="187" class="alignnone size-medium wp-image-755" srcset="/assets/images/2012/05/Capture2-300x187.jpg 300w, /assets/images/2012/05/Capture2-1024x640.jpg 1024w, /assets/images/2012/05/Capture2.jpg 1440w" sizes="(max-width: 300px) 100vw, 300px" /></a>

It is a truth universally acknowledged that a developer, with a job to do must be in want of a good text editor.

Text editors are a topic which will be argued over until the end of time. Classic arguments start as [Vim v Emacs](http://en.wikipedia.org/wiki/Editor_war), move towards [Textmate](http://macromates.com/) and recently steer close to [Sublime](http://www.sublimetext.com/). Note here, I&#8217;m not talking IDEs &#8211; IDEs are often toolchain specific and have their own set of arguments. Text editors are religions unto themselves, and there are thousands of blog posts already devoted to their own relative merits.

After spending lots of time with various editors, and some time spent with a particular friend, I&#8217;ve come back to the venerable Vim. Vim does not make learning easy, but it&#8217;s operating language and grammar are very flexible and (to me) a joy to use.

Vim does not make the beginner&#8217;s life easy. The learning curve is notoriously steep before you really feel the benefits of it. Below are some of my own tips which will hopefully help you make the jump, should you be willing.

In a future blog post, I&#8217;ll discuss editing C# and .NET with VIM.

## Learning Vim

Vimtutor is a built in system designed to make learning the Vim basics simple. Personally, I found it a waste of space and frustrating.

First let us accept that Vim does not like beginners. For those not familar with modal editing (and who the hell is?), it&#8217;s confusing, archaic, and really slow to do simple things. Once you&#8217;ve learned the syntax, the grammar, the why, and how it all fits together, then it becomes a thing of beauty. So put down those one page blog tutorials and pick up [&#8220;Learning the vi and Vim Editors&#8221;](http://shop.oreilly.com/product/9780596529833.do) from O&#8217;Reilly. Read it cover to cover (it&#8217;s okay to skip the sections on other vi clones). It&#8217;s well written, and gives you a truly thorough understanding of vi, vim and ex. Read the book, make notes, go play. Learn.

## Plain Text File Configuration

Vim configuration files come in plain text. Developers love plain text. It stores nicely in version control, and vim&#8217;s configurations are portable between platforms (you can even stick in statements for platform specific configuration). This makes them easy to dump in a git repository and deploy on to any working environment. Mine are available here:

<https://github.com/kianryan/.vim>

If you&#8217;re working in more than one graphical environment, have a look at /rc/.gvimrc for setting platform specific options.

## Pathogen

Vim plugins are traditionally a bit of a mess. By default, Vim expects all plugins to be stored in a single folder, all doc files to be stored in another folder, etc. This makes separation of different plugins a bit tricky, and ongoing updates quite hard. [Pathogen](https://github.com/tpope/vim-pathogen) allows each plugin to be stored in a separate folder, and as such each plugin can be managed independently.

Git also allows you to add other repositories as submodules. With Pathogen and Git, plugin repositories (and most useful ones are now stored in git) can be added as submodules to your git repo. Setting up on a new platform becomes git clone, git submodule init. Updating all your plugins simply means fast-forwarding the plugin versions to head.

## Plugins

Vim is a veritable candy-shop when it comes to plugins. There are plugins to cope with almost any language, any environment and idea you&#8217;ve possibly had. Most plugins happily co-exist with each other (see Pathogen). There is nothing wrong with using an army of plugins, when you understand what&#8217;s going on underneath the hood. Spend some time with the vanilla editor before jumping in to plugins, so you&#8217;re using them as extensions, not crutches. With that warning, here&#8217;s the list of plugins I&#8217;m currently using:

  * _Navigation_ &#8211; [NERDTree](https://github.com/scrooloose/nerdtree) (Folder view in a buffer) and [Command-T](https://github.com/wincent/Command-T) (Search and open files)
  * _Colour Schemes_ &#8211; [CSApprox](https://github.com/godlygeek/csapprox) (Approximates full colour schemes to 88 and 256 colours)
  * _Comments_ &#8211; [NERDComment](https://github.com/scrooloose/nerdcommenter) (Easy comment management)
  * _Brackets and Closing Things_ &#8211; [MatchIt](http://www.vim.org/scripts/script.php?script_id=39) (Advanced paren matching), [delimitMate](https://github.com/Raimondi/delimitMate) (Auto closing brackets), [Vim-Surround](https://github.com/tpope/vim-surround) (Change surrounding quotes and xml tags), CloseTag (auto tag closing).
  * _Snippets_ &#8211; [SnipMate](https://github.com/msanders/snipmate.vim) (Snippet management)

## Vim Fullscreen

Not a plugin per-se, but a [DLL extension for Win32 gVim](https://github.com/derekmcloughlin/gvimfullscreen_win32) which allows you to run gVim full screen. Map it to leader command and you&#8217;ve got a few keystrokes to toggle in and out full screen. This makes for a great, immersive environment.

I&#8217;m currently editing this blog post in the following session:

<a href="http://www.kianryan.co.uk/2012/05/back-to-vim/capture/" rel="attachment wp-att-754"><img src="/assets/images/2012/05/Capture-300x187.jpg" alt="" title="Capture" width="300" height="187" class="alignnone size-medium wp-image-754" srcset="/assets/images/2012/05/Capture-300x187.jpg 300w, /assets/images/2012/05/Capture-1024x640.jpg 1024w, /assets/images/2012/05/Capture.jpg 1440w" sizes="(max-width: 300px) 100vw, 300px" /></a>

_(Notes: gvim for Windows. No buttons, scroll bars or chroming. Vim fullscreen. Three windows, left and right showing the same empty buffer, middle showing the blog post with the vim-markdown plugin)_

## Tinker

Vim is highly configurable and extensible. That is one of its beauties and downfalls. You will find yourself spending a lot of time tinkering to make the environment what you want it to be. Color schemes, UI options, key mappings, your configs will mature and age with time. This tinker time may feel like a time-sink (and the initial setup probably will be), but you&#8217;ll reap the overall benefits later on. Spend the time making your Vim setup what you want it to be.