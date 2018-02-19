---
id: 274
title: 'Ecommerce Headaches – Prices & VAT'
date: 2009-09-21T15:05:26+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/09/ecommerce-headaches-prices-vat/
permalink: /2009/09/ecommerce-headaches-prices-vat/
ljID:
  - "149"
dsq_thread_id:
  - "174926359"
categories:
  - Comment
---

<img style="float:right;" src="/assets/images/2009/09/hector.jpg" alt="Hector the Tax Inspector" /> I felt this warranted a blog post.

I’m currently writing an e-commerce system for some very nice people which is quite literally all-singing, all-dancing. When we originally wrote the prices part of the system, we had a very serious conversation about how pricing and VAT would be handled. It went something like this:

> Client) We want to store prices inclusive of VAT.
    
> Me) Are you sure? Inclusive of who’s VAT?
    
> Client) We want the prices to be nicely rounded, and then we take the VAT off the total price.
    
> Me) Are you sure? This has some interesting international implications.
    
> Client) Yes, we’re sure. Here – go do pretty things.
    
> Me) Ok.

Seems fair enough. They want pretty rounded prices on the site which meant they didn’t have to think about VAT. Which is great for working in the UK. Then I received a change request asking us to display the VAT dependant upon which country the user was purchasing from. This would still be calculated as a percentage of the earlier specified total price.

> Me) So if the user’s country has a VAT of 90%, you’re happy to only receive 10% of the total sale value?
     
> Client) Erm…. Ah.

This is a little extreme, no-one as of yet uses a VAT of 90%. The UK has a rather modest 15%, but countries such as Norway have a rather more eye-watering 25%. Admittedly, if you’re shipping to Panama, you’re quids in, since VAT is only 5%.

There are several different ways pricing and VAT can be managed on an e-commerce site. When I brought this topic up in an IRC channel I frequent, I thought the following exchange illustrated the complexity and confusion rather nicely:

> 15:17 <@ccooke> kian: you need to store the VAT on the exact item at the exact moment it was stored.
    
> 15:18 < kian> ccooke: no you don’t.
    
> 15:18 < kian> ccooke: hold. for which scenario. a, b or c?
    
> 15:19 <@ccooke> which one’s which?
    
> 15:19 < kian> ccooke: a) static price, flexible VAT b) static base price + UK VAT, remove VAT add countries VAT, c) Price Ex VAT + WhateverVAT, d) sod this – pub.
    
> 15:20 <@ccooke> d!
    
> 15:20 < kian> I’m with you. Be there in three hours.

So, for your interest and ponderings, here are the three options I see:

# Fixed Price, Flexible VAT

Price is stored, inclusive of VAT. VAT is calculated as a percentage of the price at point of sale with respect to the user’s country. So if you buy from the UK, you’re paying Â£100 of which 15% is VAT and if you buy from Norway, you’re paying Â£100 of which 25% is VAT.

Pros: Nice pretty prices. Cons: The amount of money you return from each sale is dependant upon where the user purchases your item from.

# Price + “Home” VAT, Flexible VAT

Prices are stored, inclusive of “home” VAT. When calculating prices for foreign countries, the VAT for the home country is deducted before adding on the VAT for the user’s country. So if you buy from the UK, you’re paying Â£100 of which 15% is VAT, and if you buy from Norway, you pay Â£108 (100 * 1.25 / 1.15 ) of which 25% is VAT.

Pros: Pretty prices for home country, protected base price for foreign country. If home VAT rate changes, prices remain same (gain or loss dependant on home VAT). Cons: You could end up with some odd prices for non-home countries.

# Price Ex VAT, Flexible VAT

Prices are stored, exclusive of any VAT. VAT is calculated on the shop at run time dependant on the user’s country. So if you buy from the UK, you’re paying Â£115 of which 15% is VAT, and if you buy from Norway, you pay Â£125 of which 25% is VAT.

Pros: Your base price does not fluctuate, therefore the value of the VAT is irrelevant. Cons: Potentially ugly, non marketing friendly prices. Price changes on VAT changes.

We’re still debating which one of these is the best option for the system we are currently building. We are currently using “fixed price, flexible VAT”, but this position may change as we delve into the implications more deeply.

If you’re still with us at this point, well done. I’ve spent an hour trying to get my head around this rather prickly topic, double checking import/export and VAT regulations as I go. But its a good example of how something so initially clean-cut as product pricing can lead into a headache of trouble.

It’s all about scope.