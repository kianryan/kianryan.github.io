---
id: 1203
title: Vim-Csharp Updated
date: 2014-05-07T00:02:42+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=1203
permalink: /2014/05/vim-csharp-updated/
mkd_text:
  - |
    I've updated [Vim-CSharp](https://github.com/OrangeT/vim-csharp) with a few new features.  The original aim of this project was to eventually provide autocomplete support for .NET projects.  [Omnisharp](https://github.com/nosami/Omnisharp) does this so well, there's no point in duplicating effort.  [Vim-Csharp](https://github.com/OrangeT/vim-csharp) is now focussed on increasing developer productivity through better syntax highlighting, snippet completion, and any other time saving exercises I can think of.
    
    These are very much a work in progress and I'm welcome to new ideas.  Feel free to submit bugs or ideas using [Github](https://github.com/OrangeT/vim-csharp/issues) (or fork, implement and pull request).
    
    Razor Syntax Support
    ====================
    
    .cshtml files are now loaded with a combined filetype of html.cshtml, and load both syntax and snippets for html and razor.  On top of this, there's some basic pattern recognition for @ and @ { } blocks in the syntax file that allows for chunks of C# to be highlighted correctly within razor files.
    
    Razor/Webforms Snippets
    =======================
    
    Snippets require [vim-snipmate](https://github.com/garbas/vim-snipmate).
    
    Razor snippets are designed to be deterministic and as productive as possible.  Your best bet is to familiarise yourself with the snippet files (snippets/cshtml.snippets, snippets/aspx.snippets).  Snippets take the form:
    
    * Language declaration character (@ for Razor, % for Webforms)
    * Initals of required control (tbf = TextBoxFor)
    * Additional options (m = model, _ = html attr. collection, . = html attr. collection with class )
    
    This means that for a "text box for" with a class attribute in razor, type @tbf. followed by your expansion key (default tab).
    
    Xunit, Moq Snippets
    ===================
    
    Additional snippets are provided to reduce time spent writing unit tests.
    
    Xunit assertions are prefixed by x, followed by the test type, followed by a ! to negate.  So a "does not contain" assertion is created by typing xcontains! followed by the expansion key (default tab).
    
    There are only two moq snippets, "moq" which then asks which scenario to complete to (there are many), and "it" which expands to It.IsAny<>.
dsq_thread_id:
  - "2666194892"
categories:
  - Code
tags:
  - code
---
I’ve updated [Vim-CSharp](https://github.com/OrangeT/vim-csharp) with a few new features. The original aim of this project was to eventually provide autocomplete support for .NET projects. [Omnisharp](https://github.com/nosami/Omnisharp) does this so well, there’s no point in duplicating effort. [Vim-Csharp](https://github.com/OrangeT/vim-csharp) is now focussed on increasing developer productivity through better syntax highlighting, snippet completion, and any other time saving exercises I can think of.

These are very much a work in progress and I’m welcome to new ideas. Feel free to submit bugs or ideas using [Github](https://github.com/OrangeT/vim-csharp/issues) (or fork, implement and pull request).

# Razor Syntax Support

.cshtml files are now loaded with a combined filetype of html.cshtml, and load both syntax and snippets for html and razor. On top of this, there’s some basic pattern recognition for @ and @ { } blocks in the syntax file that allows for chunks of C# to be highlighted correctly within razor files.

# Razor/Webforms Snippets

Snippets require [vim-snipmate](https://github.com/garbas/vim-snipmate).

Razor snippets are designed to be deterministic and as productive as possible. Your best bet is to familiarise yourself with the snippet files (snippets/cshtml.snippets, snippets/aspx.snippets). Snippets take the form:

  * Language declaration character (@ for Razor, % for Webforms)
  * Initals of required control (tbf = TextBoxFor)
  * Additional options (m = model, _ = html attr. collection, . = html attr. collection with class )

This means that for a “text box for” with a class attribute in razor, type @tbf. followed by your expansion key (default tab).

# Xunit, Moq Snippets

Additional snippets are provided to reduce time spent writing unit tests.

Xunit assertions are prefixed by x, followed by the test type, followed by a ! to negate. So a “does not contain” assertion is created by typing xcontains! followed by the expansion key (default tab).

There are only two moq snippets, “moq” which then asks which scenario to complete to (there are many), and “it” which expands to It.IsAny<>.