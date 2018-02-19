---
id: 943
title: 'Project Types &#8211; MVC 2 and MVC 3'
date: 2013-03-22T11:24:09+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=943
permalink: /2013/03/project-types-mvc-2-and-mvc-3/
dsq_thread_id:
  - "1157441697"
categories:
  - Code
---
Visual Studio ends up having a bit of a hissy fit if the project file has the incorrect project type. This appears to be especially common between MVC 2 and MVC3, where your project may have MVC3 binaries, but the MVC2 project type. Visual Studio 11 simply refuses to open these files. To fix, change the ProjectTypeGuid in the project file to the appropriate version:

**MVC 3:** F85E285D-A4E0-4152-9332-AB1D724D3325
  
**MVC 2**: E53F8FEA-EAE0-44A6-8774-FFD645390401
  
**MVC 4**: E3E379DF-F4C6-4180-9B81-6769533ABE47