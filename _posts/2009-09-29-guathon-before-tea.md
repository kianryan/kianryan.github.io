---
id: 279
title: 'Guathon – Before Tea'
date: 2009-09-29T13:17:02+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/09/guathon-before-tea/
permalink: /2009/09/guathon-before-tea/
ljID:
  - "152"
dsq_thread_id:
  - "241152243"
categories:
  - Code
---
Covered so far:

  * Websitespark (we know about this already
  * Web Platforms Installer (Apt for windows – this looks good – can developers submit apps to it?)
  * MVC (we’re here for two hours on this – basic intro and new stuff on 2.0) 
      * Support for jQuery.validate in MVC2
      * (Usual MVC basics – saw this at Mix 07)
      * Humm, routes supports reg-ex. Is this new to 2.0?
      * Ahh – scaffolding, etc _is_ T4. That’s been an itching question. I severely like the layout of the default generated views.
      * MVC2 – new “filter” attributes. [HttpPost] replaces [AcceptVerbs(Http.Post)]. Small but nice detail.
      * Ohh, you can mark which attributes are bindable in the class – you don’t have to do it in UpdateModel.
      * “buddy class” – way to get around partial method limitation. Haven’t seen this before… Link the buddy class to the type class using [Metadatatype(typeof(buddy))]
      * Er, okay. This is new stuff in the validation. Direct validation attributes using the buddy class. COOL! System.ComponentModel.DataAnnotations.
      * The binding has changed quite a bit. I like the new architecture, much less messy, much stronger.
      * MicrosoftMvcJQueryValidation.js <– nice one.
      * Complex validation – base off a webservice.
      * New helpers: Html.EditorFor, Html.DisplayFor. Strongly typed lambda syntax – compile time checking.
      * Templates allow override of HTML generated for EditorFor and DisplayFor. Uses partial views. Name partial view to type (e.g. Decimal). Drop in “EditorTemplates” folder. Can be applied to shared folder and/or view specific. Nice.
      * Can also generate templates not related to type, pass to “EditorFor” as a parameter. Also nice.
      * Can use the buddy class with [UIHint] attribute to specify type to field. Big emphasis on DRY. Ohhh nice.
      * Whole model can be CRUD rendered on the fly. [ScaffoldColumn] can be used to inclue/exclude properties.
      * Unit testing time… First up the unit testing sales pitch.
      * “Vs 08 adds all this value added … crap” as the Gu goes mad with the delete key.
      * Unit testing models, unit testing controllers (nothing new here so far).
      * Simple testing on controllers to ensure they render views, etc.
      * Here we go – the hiccups with tight binding to the DB for tests. Ohh, dependancy injection.
      * IService, Db imp of service. Pass into constructor.
      * Use 3rd party dependancy injection or “poor mans – pass through the controller”. 
      * Pass collection of objects to “FakeService”. How should you happen multiple services?
      * No shame in writing tests to test the database _and_ tests against the fake services.

<div align="left">
</div>