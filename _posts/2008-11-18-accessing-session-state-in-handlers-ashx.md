---
id: 17
title: Accessing Session State in Handlers (.ashx)
date: 2008-11-18T00:57:16+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/2008/11/accessing-session-state-in-handlers-ashx/
permalink: /2008/11/accessing-session-state-in-handlers-ashx/
aktt_notify_twitter:
  - 'no'
ljID:
  - "89"
dsq_thread_id:
  - "176800485"
categories:
  - Code
---
I use generic handlers (.ashx) quite a bit when working with client side Javascript, they’re a good way of getting data to and from the client. I’ll do an in-depth post at some point showing a nice way of chaining generic handlers, JQuery and JSON in a quick way of writing AJAXesque web apps.

For the moment though, a quick tip for people needing access to their session variables in handlers. Because a generic handler is stripped down to its bare bones, you’ll need to import your session state by including a specific interface.

<pre class="brush: csharp; title: ; notranslate" title="">using System.Web.UI.HtmlControls;</p>

<p>public class GenericHandler : IHttpHandler, IRequiresSessionState
{
    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        context.Response.ContentEncoding = System.Text.Encoding.UTF8;</p>

<pre><code>    context.Response.Write(context.Session["name"]);
}

public bool IsReusable
{
    get
    {
        return false;
    }
}
</code></pre>

<p>}
</pre>

Also remember that your session now exists as a property of the context, remember to address it as such.