---
id: 1187
title: Configuring Postfix For Local Development
date: 2014-04-23T14:24:09+00:00
author: kianryan
layout: post
guid: http://www.kianryan.co.uk/?p=1187
permalink: /2014/04/configuring-postfix-for-local-development/
mkd_text:
  - |
    Whilst working through "Agile Web Development With Rails 4", I was genuinely surprised to find the author advocating configuring your local development environment to send e-mail via an external SMTP server.  To me, this is a *bad idea*, since there's a real risk of unintentionally delivering mail to real accounts.
    
    To mitigate this, it's worth setting up a local SMTP server on your development system to trap all mail, and then use a mail client to display messages.  On Windows, I use [smtp4dev](http://smtp4dev.codeplex.com/) and [Windows Live Mail](http://windows.microsoft.com/en-gb/windows-live/essentials-other#essentials=mailother), which then gives me an alert and the option to view the delivered mail.
    
    Ubuntu comes with a number of SMTP servers available in its apt repositories.  These are full blown mail servers, designed to perform complex filtering, forwarding and delivery operations.  We don't need a mail server to do all that, but we do want it to capture all attempts to delivery at any server, and direct those to a local mailbox.  We'll use postfix to do this.  We can then use the client of our choice to view those mails.
    
    Installing the Necessary Packages
    =================================
    
    ``
    apt-get install postfix postfix-pcre
    ``
    
    If asked the type of mail server configuration, select "Internet site".  For "mail name", use whatever friendly name you wish - I used the name of the system.
    
    Configuring Postfix
    ===================
    
    First up, edit /etc/postfix/main.cf and add the following lines:
    ``
    virtual_alias_domain =
    virtual_alias_maps = pcre:/etc/postfix/virtual_forwardings.pcre
    virtual_mailbox_domains = pcre:/etc/postfix/virtual_domains.pcre
    ``
    
    Our objective here is to capture mail for _all users_ from _all domains_.  Here we tell postfix to load a set of regular expression from one file to map users and another file to map domains.
    
    Next, we tell postfix to deliver all mail delivered to this server to the current user.  Create /etc/postfix/virtual_forwardings.pcre and add the following lines:
    
    ``
    /@.*/ username
    ``
    
    Substitute username for your current Ubuntu username, or the local user you want mail delivered to.  This will capture all mail to any external address.
    
    Next we need to tell postfix to accept delivery for any named server, not just localhost.  Create /etc/postfix/virtual_forwardings and add the following:
    
    ``
    /^.* OK
    ``
    
    That's postfix configured.
    
    Restarting Postfix
    ==================
    
    Now postfix is configured, we need to restart the service:
    
    ``
    sudo service postfix restart
    ``
    
    This will load our configuration changes and start postfix listening on the default SMTP port, 25.
    
    Configuring a Mail Client
    =========================
    
    You now need a way of reading and sending e-mail.  I've tested [Mozilla Thunderbird](http://www.mozilla.org/en-US/thunderbird/) and [Mutt](http://www.mutt.org/), and both work with local mailboxes (which saves us having to faff around with running IMAP or POP servers).  If you've not already got Thunderbird installed:
    
    ``
    sudo apt-get install thunderbird
    ``
    
    Launch Thunderbird and cancel out of the default "add mail" dialogs.  Edit >> Account Settings >> Account Actions >> Add Other Account >> Unix Mailspool (Move Mail).
    
    Step through the dialogs, using username@localhost for your e-mail and localhost for your SMTP server.  You should now have a client that's set up to send mail through your SMTP server, and receive mail from your local mailbox.
    
    Testing Mail
    ============
    
    Final step is to test that all this works.  In theory, an e-mail sent from our mail client (or later our code), should arrive at our mail server for processing.  Our mail server sees that it's the destination for this message (any message), and attempts delivery to our specified user.  Since all users are aliased to our username, it's delivered to our local mail box.  We can then see this in our mail client.
    
    Click on "Write" and send an e-mail to an external account you have control of.  Once sent, you may need to click on "Get Mail" for your mail to appear in your local client, but delivery should be near instantaneous.  Ensure that the mail never left the system by checking your external account.
    
    Configuring Your Code
    =====================
    
    Now whenever you configure an application for development, rather than point your code at an external real-world SMTP server, you use localhost for your SMTP server and keep your mail client running in the background.  When your code delivers mail, your mail server will capture and delivery it, and you can view it from your client.
dsq_thread_id:
  - "2633211183"
categories:
  - Code
---
Whilst working through “Agile Web Development With Rails 4”, I was genuinely surprised to find the author advocating configuring your local development environment to send e-mail via an external SMTP server. To me, this is a _bad idea_, since there’s a real risk of unintentionally delivering mail to real accounts.

To mitigate this, it’s worth setting up a local SMTP server on your development system to trap all mail, and then use a mail client to display messages. On Windows, I use [smtp4dev](http://smtp4dev.codeplex.com/) and [Windows Live Mail](http://windows.microsoft.com/en-gb/windows-live/essentials-other#essentials=mailother), which then gives me an alert and the option to view the delivered mail.

Ubuntu comes with a number of SMTP servers available in its apt repositories. These are full blown mail servers, designed to perform complex filtering, forwarding and delivery operations. We don’t need a mail server to do all that, but we do want it to capture all attempts to delivery at any server, and direct those to a local mailbox. We’ll use postfix to do this. We can then use the client of our choice to view those mails.

# Installing the Necessary Packages

`apt-get install postfix postfix-pcre`

If asked the type of mail server configuration, select “Internet site”. For “mail name”, use whatever friendly name you wish – I used the name of the system.

# Configuring Postfix

First up, edit /etc/postfix/main.cf and add the following lines: `virtual_alias_domain =
virtual_alias_maps = pcre:/etc/postfix/virtual_forwardings.pcre
virtual_mailbox_domains = pcre:/etc/postfix/virtual_domains.pcre`

Our objective here is to capture mail for _all users_ from _all domains_. Here we tell postfix to load a set of regular expression from one file to map users and another file to map domains.

Next, we tell postfix to deliver all mail delivered to this server to the current user. Create /etc/postfix/virtual_forwardings.pcre and add the following lines:

`/@.*/ username`

Substitute username for your current Ubuntu username, or the local user you want mail delivered to. This will capture all mail to any external address.

Next we need to tell postfix to accept delivery for any named server, not just localhost. Create /etc/postfix/virtual_forwardings and add the following:

`/^.* OK`

That’s postfix configured.

# Restarting Postfix

Now postfix is configured, we need to restart the service:

`sudo service postfix restart`

This will load our configuration changes and start postfix listening on the default SMTP port, 25.

# Configuring a Mail Client

You now need a way of reading and sending e-mail. I’ve tested [Mozilla Thunderbird](http://www.mozilla.org/en-US/thunderbird/) and [Mutt](http://www.mutt.org/), and both work with local mailboxes (which saves us having to faff around with running IMAP or POP servers). If you’ve not already got Thunderbird installed:

`sudo apt-get install thunderbird`

Launch Thunderbird and cancel out of the default “add mail” dialogs. Edit >> Account Settings >> Account Actions >> Add Other Account >> Unix Mailspool (Move Mail).

Step through the dialogs, using username@localhost for your e-mail and localhost for your SMTP server. You should now have a client that’s set up to send mail through your SMTP server, and receive mail from your local mailbox.

# Testing Mail

Final step is to test that all this works. In theory, an e-mail sent from our mail client (or later our code), should arrive at our mail server for processing. Our mail server sees that it’s the destination for this message (any message), and attempts delivery to our specified user. Since all users are aliased to our username, it’s delivered to our local mail box. We can then see this in our mail client.

Click on “Write” and send an e-mail to an external account you have control of. Once sent, you may need to click on “Get Mail” for your mail to appear in your local client, but delivery should be near instantaneous. Ensure that the mail never left the system by checking your external account.

# Configuring Your Code

Now whenever you configure an application for development, rather than point your code at an external real-world SMTP server, you use localhost for your SMTP server and keep your mail client running in the background. When your code delivers mail, your mail server will capture and delivery it, and you can view it from your client.