---
layout: post
title: Online Psion Document Conversion With PsiConv
categories:
  - Coding
tags: 
  - psion
  - markdown
  - pandoc
  - docker
---

>  TLDR; you can convert Series 5 Word documents to Text, HTML5 or Markdown 
>  using [this online service](https://psiconv.azurewebsites.net/).  No guarantees 
> are made, and for transparency you can view the code [here](https://github.com/kianryan/psiconv-docker).

In 2021, I wrote about my [workflow for getting draft documents out of 
my Psion and in to my blog](https://www.kianryan.co.uk/2021-09-08-psion-to-markdown/).  It worked, but it required multiple steps 
and was a bit of a kludge.

Psiconv is a conversion utility originally by [Frodo Looijaard](https://frodo.looijaard.name/project/psiconv) designed to convert Psion Word files to HTML or plain text.  
It's written in C, and while it's plain text mode is fine, is limited to outputting HTML4.  Pandoc is a universal 
document converter, but doesn't particularly like the HTML4 produced by psiconv.  I [extended Psiconv](https://github.com/kianryan/psiconv) to output 
HTML5 to act as an input for Pandoc.

Having working psiconv + pandoc opens up some powerful possibilities.  I built a [small web app to wrap some common options](https://github.com/OrangeT/psiconv-docker) (HTML5, Text, Markdown) 
and built a docker file to manage building psiconv and the application.  [The final application is hosted on Azure and freely 
available for you to convert your own files.](https://psiconv.azurewebsites.net/)

As a disclaimer, the application does use temporary files on the container, but cleans 
up after processing.  If you're concerned, please see the source of the web app for details.

I'd appreciate a comment if this application is useful to you.