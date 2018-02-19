---
id: 281
title: Internet Explorer User-Agent Strings
date: 2009-10-01T17:36:23+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2009/10/internet-explorer-user-agent-strings/
permalink: /2009/10/internet-explorer-user-agent-strings/
ljID:
  - "154"
dsq_thread_id:
  - "174926372"
categories:
  - Code
---
Internet Explorer can be a right PITA when it wants to be. I&#8217;m using Thickbox to render on page dialogues in one of my projects. Thickbox relies on testing $jquery.browser.version for determining the version number of Internet Explorer.

<pre class="brush: jscript; title: ; notranslate" title="">!(jQuery.browser.msie &amp;&amp; jQuery.browser.version &lt; 7
</pre>

Apart from the fact that it doesn&#8217;t always work. Below is what you would expect to be presented as a user agent string for IE8:

    Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; GTB6; SLCC2; 
    .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; 
    .NET CLR 4.0.20506; InfoPath.2)
    

So far today, I&#8217;ve seen three customers with the following string

    User Agent: Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0; 
    Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1) ; .NET CLR 1.1.4322; 
    .NET CLR 2.0.50727; .NET CLR 3.0.04506.30; .NET CLR 3.0.04506.648; .NET CLR 
    3.0.4506.2152; .NET CLR 3.5.30729)
    

Somewhere, somehow, the user agent string has become corrupted (and hence the MSIE 6.0). There&#8217;s some information on this available on [Microsoft communities](http://www.microsoft.com/communities/newsgroups/list/en-us/default.aspx?dg=microsoft.public.internetexplorer.general&tid=e5458712-937b-4e81-b805-2a5f67320742&cat=en_us_28cca3eb-7037-4d4f-bde1-d8efee1f1420&lang=en&cr=us&sloc=&p=1).

The way around this is to do some explicit regular expression checking on the useragent string. For those that didn&#8217;t know about this previously, it&#8217;s demonstrated by [Jamie Thompson](http://jamazon.co.uk/web/2008/03/17/thickbox-31-ie7-positioning-bug/). He introduces a new property called $.browser.msie6 which is used to check for the presence of the IE6 string without the IE7 string.

<pre class="brush: jscript; title: ; notranslate" title="">$.browser.msie6 =
    $.browser.msie
    &amp;&amp; /MSIE 6&#46;0/i.test(window.navigator.userAgent)
    &amp;&amp; !/MSIE 7&#46;0/i.test(window.navigator.userAgent);
</pre>

You then adapt thickbox.js to test for this new property.

<pre class="brush: jscript; title: ; notranslate" title="">if ( !(jQuery.browser.msie6)) { // take away IE6
    $("#TB_window").css({marginTop: '-' + parseInt((TB_HEIGHT / 2),10) + 'px'});
}
</pre>

Which works great for IE6, great for IE7, fine for vanilla IE8 (which doesn&#8217;t suffer from the above bug), but falls down on corrupted IE8. Not to panic, simply adjust $.browser.msie6 to look for this additional string.

<pre class="brush: jscript; title: ; notranslate" title="">$.browser.msie6 =
    $.browser.msie
    &amp;&amp; /MSIE 6&#46;0/i.test(window.navigator.userAgent)
    &amp;&amp; !/MSIE 7&#46;0/i.test(window.navigator.userAgent)
    &amp;&amp; !/MSIE 8&#46;0/i.test(window.navigator.userAgent);
</pre>

The downside to this fix is that if and when Microsoft comes out with Internet Explorer 9, then you&#8217;ll need to adjust this script again to take this into account. I therefore propose a slight departure, using regular expressions to test for values above 6:

<pre class="brush: jscript; title: ; notranslate" title="">$.browser.versionOver6 = function() {
    var re = /MSIE (\d+)/ig;
    var match;
    while (match = re.exec(window.navigator.userAgent)) {
        if (match[1] &gt; 6) {
            return true;
        }
    }
    return false;
}&lt;/p&gt;

&lt;p&gt;$.browser.msie6 =
    $.browser.msie &amp;&amp;
    $.browser.versionOver6();
</pre>

This modified version should work on all future versions of IE. Browsers which report a MSIE 6.0 as _well as_ a MSIE 7.0, MSIE 8.0, MSIE 9.0, etc will now also report as not IE6, which should make filtering off IE6 fixes a little easier.

Enjoy.