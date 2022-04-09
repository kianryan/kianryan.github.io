---
layout: post
title: Serial and Windows Subsystem For Linux (WSL)
thumbnail-img: /assets/images/2022/04/09/wsl-settings.png
categories: Coding
tags: 
  - retro
  - z80
  - serial
---


Windows Subsystem for Linux provides an abstraction layer to allow the execution 
of Linux distributions directly on Windows.  WSL comes in two flavours: __WSL1__ 
is a set of interfacing libraries where __WSL2__ uses Hyper-V, and works alongside 
a VM.

Unfortunately, the newer WSL2 does not support serial devices, which means you can 
not use WSL2 for running Arduino programmers or serial terminals such as MiniCom.  
You can setup and run a minimal WSL1 distribution alongside a WSL2 distribution 
for use with projects that need serial access.


First, install a new distribution:

```
wsl install -d Ubuntu
```

Set the distribution to use WSL1:

```
wsl --set-version Ubuntu 1
```

It'll now appear on your list when you restart [Windows Terminal](https://github.com/microsoft/terminal).  

![Windows Terminal - New Terminal List](/assets/images/2022/04/09/wsl-list.png)

I would recommend renaming your WSL1 environment to separate it from your normal WSL2 
environments:

![Windows Terminal - Settings](/assets/images/2022/04/09/wsl-settings.png)
