---
id: 218
title: 'ASP.NET &#8211; Forms Inside Forms.'
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
&#8220;It is a truth universally acknowledged, that an ASP.NET page in possession of a component, must be in want of a form.&#8221;

I&#8217;ve just come across this sticky little scenario in one of my projects:

ASP.NET components need to be wrapped in a form tag for their post-back magic to happen. As such, the form tag is usually as high level as it can possibly go (usually just inside the body tag). Some mailing list (sorry &#8211; mail marketing) companies provide you with a HTML form to integrate into your site so users can subscribe to the site&#8217;s mailing list. Sometimes these forms also come with a little chunk of Javascript to perform some page validation before performing the post.

So what we&#8217;ve got looks like this:

<pre class="brush: xml; title: ; notranslate" title="">&lt;script src="somethirdpartyvalidator.js"&gt;&lt;/script&gt;&lt;/p&gt;

&lt;form id="Form1" method="post" runat="server"&gt;
    &lt;form id="MailingForm" method="post" action="somethingremote.pl" onSubmit="validate(this);"&gt;
        &lt;!-- Insert some form components here --&gt;
        &lt;input type="submit" value="Submit" /&gt;
    &lt;/form&gt;
&lt;/form&gt;

&lt;p&gt;</pre>

And here&#8217;s the fun. When you click the submit button, it doesn&#8217;t perform the expected behaviour and perform a post to somethingremote.pl. Instead it performs a regular post-back to your site and (most likely) will do diddly squat. The culprit is __doPostBack, injected by ASP.NET at runtime, which hijacks the onSubmit event of the parent form to provide the post-back functionality. Your poor little mailing form doesn&#8217;t even get a look in.

The answer is to provide a little roll your own javascript for your own submit functionality. [This article](http://www.nerdymusings.com/LPMArticle.asp?ID=27) demonstrates a version of this technique. My version of the is shown below:

<pre class="brush: xml; title: ; notranslate" title="">&lt;script language="javascript" src="somethirdpartyvalidator.js"&gt;&lt;/script&gt;&lt;/p&gt;

&lt;script language="javascript"&gt;
    function submitForm() {
        var theForm = document.getElementById('signupForm');
        if (validateForm(theForm) != false) {
            theForm.encoding = 'application/x-www-form-urlencoded';
            theForm.action = 'somethingremote.pl';
            theForm.submit();
        }
    }
 &lt;/script&gt;

&lt;form id="Form1" method="post" runat="server"&gt;
    &lt;form id="MailingForm"&gt;
        &lt;!-- Insert some form components here --&gt;
        &lt;a href="javascript: submitForm();"&gt;Submit;&lt;/a&gt;
    &lt;/form&gt;
&lt;/form&gt;

&lt;p&gt;</pre>

The variation from [James Byrd&#8217;s original article](http://www.nerdymusings.com/LPMArticle.asp?ID=27) comes from which form we submit. In the original, James posts the global form (in our example Form1) and instructs the reader to simply blank out any values they may not want to communicate to the third party. This seems overly permissive to me, especially in a potentially dynamic environment where you may have hundreds of components and as such my version simply selects the target form from the page before passing it through the validator and performing the submit action. The postback event is avoided, the third party only gets the data they need and the world is a happier place.