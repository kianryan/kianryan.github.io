---
id: 1004
title: Google Maps Geocoding API v2
date: 2013-09-13T09:37:39+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=1004
permalink: /2013/09/google-maps-geocoding-api-v2/
dsq_thread_id:
  - "1755246786"
categories:
  - Code
---
Google have “turned down” v2 of their Geocoding API as of the 9th of September. For “turned down”, read “turned off”, making some interesting breakages for sites that rely on this API. Information available here:

https://developers.google.com/maps/articles/geocodingupgrade

The v3 API works just fine. For those in .NET land, the following code snippet will return lat/lon

If you’re using third party code or libraries to perform your geocoding operations, check for updates to your library first. Some libraries has been updated, others haven’t.