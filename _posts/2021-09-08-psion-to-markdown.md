---
layout: post
title: Getting Markdown Out of the Psion
categories: Making
tags:
  - writing
  - blogging
  - psion
---

The Psion 5MX makes a great little portable writing tool, but getting files off takes a little more effort. 
The word processor handles plain text and it's own proprietary binary format. Plain text is fine, 
but I'd like to do something with the formatted content.

I primarily blog in Markdown, using Jekyll.  So far, I have a workflow that looks 
like:

1. Draft in EPOC Word.
2. [nConvert](https://www.neuon.com/software.htm) from EPOC Word to RTF.
3. Copy from Compact Flash card to PC.
4. Convert from RTF to Word Doc using [unoconv](https://github.com/unoconv/unoconv) (OpenOffice).
5. Convert from Word Doc to Markdown using [pandoc](https://pandoc.org/).

This keeps the styling information from EPOC Word through to Markdown which makes
it usable for bloging with H1, H2, etc.

I'll script it once I'm happy with the workflow.
