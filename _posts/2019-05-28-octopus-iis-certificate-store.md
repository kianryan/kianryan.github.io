---
layout: post
title: Enabling IIS to use the Certificate Store in Octopus Deploy
categories: Coding
tags: 
 - Octopus Deploy, IIS, Powershell
---

We're using [AutoACME](https://www.autoacme.net/) for a few of our sites to generate and renew [Let's Encrypt](https://letsencrypt.org/) certificates for our test sites.  AutoACME is pretty good at getting certificates in to the [Central Certificate Store](https://blogs.msdn.microsoft.com/kaushal/2012/10/11/central-certificate-store-ccs-with-iis-8-windows-server-2012/).  Unfortunately, Octopus Deploy's options for using the store are non existant - either Octopus manages your certificates for you, or you provide a unique thumbprint for each certificate, which must be matched on the machine (not the CCS).

Our workaround has been to create the site first as a site with HTTP binding and then add the HTTPS binding via powershell adding the requisite flags in to indicate usage of the CCS.

```powershell

# Enable https manually for certificate store, because we can't do this in the UI.
Import-Module WebAdministration
$siteName = "siteName"
$siteHeader = "example.com"

New-WebBinding -Name $siteName -IPAddress "*" -Port 443 -HostHeader $siteheader -Protocol "https" -SslFlags 3 

```