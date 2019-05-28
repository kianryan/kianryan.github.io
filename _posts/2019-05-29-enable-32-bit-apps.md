---
layout: post
title: Enable 32 Bits Apps in IIS from Octopus Deploy
categories: Coding
tags: 
 - Octopus Deploy, IIS, Powershell
---
We have a dependency to use 32 bit DLLs from some of our IIS deployments - notably Crystal Reports.  Out of the box, Octopus Deploy doesn't support this - IIS deployments will only be enabled for 64 bit mode.

Add a powershell script to enable 32 bit mode post deploy:

```powershell

Import-Module WebAdministration
$appPool = "appPoolName"
set-itemProperty IIS:\apppools\$appPool -name "enable32BitAppOnWin64" -Value "true"

```

