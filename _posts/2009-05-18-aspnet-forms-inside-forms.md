---
id: 218
title: 'ASP.NET – Forms Inside Forms.'
date: 2009-05-18T11:51:21+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/05/aspnet-forms-inside-forms/
permalink: /2009/05/aspnet-forms-inside-forms/
ljID:
  - "130"
dsq_thread_id:
  - "190790972"
categories:
  - Code
---
“It is a truth universally acknowledged, that an ASP.NET page in possession of a component, must be in want of a form.”

I’ve just come across this sticky little scenario in one of my projects:

ASP.NET components need to be wrapped in a form tag for their post-back magic to happen. As such, the form tag is usually as high level as it can possibly go (usually just inside the body tag). Some mailing list (sorry – mail marketing) companies provide you with a HTML form to integrate into your site so users can subscribe to the site’s mailing list. Sometimes these forms also come with a little chunk of Javascript to perform some page validation before performing the post.

So what we’ve got looks like this:

<pre class="brush: xml; title: ; notranslate" title=""><script src="somethirdpartyvalidator.js"></script></p>

<form id="Form1" method="post" runat="server">
    <form id="MailingForm" method="post" action="somethingremote.pl" onSubmit="validate(this);">
        <!-- Insert some form components here -->
        <input type="submit" value="Submit" />
    </form>
</form>

<p></pre>

And here’s the fun. When you click the submit button, it doesn’t perform the expected behaviour and perform a post to somethingremote.pl. Instead it performs a regular post-back to your site and (most likely) will do diddly squat. The culprit is __doPostBack, injected by ASP.NET at runtime, which hijacks the onSubmit event of the parent form to provide the post-back functionality. Your poor little mailing form doesn’t even get a look in.

The answer is to provide a little roll your own javascript for your own submit functionality. [This article](http://www.nerdymusings.com/LPMArticle.asp?ID=27) demonstrates a version of this technique. My version of the is shown below:

<pre class="brush: xml; title: ; notranslate" title=""><script language="javascript" src="somethirdpartyvalidator.js"></script></p>

<script language="javascript">
    function submitForm() {
        var theForm = document.getElementById('signupForm');
        if (validateForm(theForm) != false) {
            theForm.encoding = 'application/x-www-form-urlencoded';
            theForm.action = 'somethingremote.pl';
            theForm.submit();
        }
    }
 </script>

<form id="Form1" method="post" runat="server">
    <form id="MailingForm">
        <!-- Insert some form components here -->
        <a href="javascript: submitForm();">Submit;</a>
    </form>
</form>

<p></pre>

The variation from [James Byrd’s original article](http://www.nerdymusings.com/LPMArticle.asp?ID=27) comes from which form we submit. In the original, James posts the global form (in our example Form1) and instructs the reader to simply blank out any values they may not want to communicate to the third party. This seems overly permissive to me, especially in a potentially dynamic environment where you may have hundreds of components and as such my version simply selects the target form from the page before passing it through the validator and performing the submit action. The postback event is avoided, the third party only gets the data they need and the world is a happier place.