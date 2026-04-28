---
layout: post
title: Plaintext pages in Jekyll
thumbnail-img: /assets/images/2026/04/plaintext.jpg
categories: lifetrack
tags: 
  - blogging
  - hosting
---

[Terence Eden](https://shkspr.mobi/blog/2025/12/a-small-collection-of-text-only-websites/) posted 
a collection of websites that post in both HTML and plain text, a nice clutter free 
way of consuming content.

I started looking into providing the same here and realised that I couldn't 
do that while using GitHub pages, so took the opportunity to migrate the 
site to Mythic Beasts.

Adding plain text to jekyll needs a couple of additional files, and a change to the 
config file.  

This will only generate plain text blog pages, and will create a .txt file for 
every equivalent blog url:

[https://www.kianryan.co.uk/2025-05-15-how-i-stream-video-from-every-old-device-on-my-desk/](https://www.kianryan.co.uk/2025-05-15-how-i-stream-video-from-every-old-device-on-my-desk/)  
[https://www.kianryan.co.uk/2025-05-15-how-i-stream-video-from-every-old-device-on-my-desk.txt](https://www.kianryan.co.uk/2025-05-15-how-i-stream-video-from-every-old-device-on-my-desk.txt)

1.  Add [plaintext.html](https://github.com/kianryan/kianryan.github.io/tree/main/_layouts) to \_layouts folder.
2.  Add [plain_text.rb](https://github.com/kianryan/kianryan.github.io/blob/main/_plugins/plain_text.rb) to \_plugins folder.
3. Add the following to the defaults section under \_config.yml

```
defaults:
  -
    scope:
      path: ""
      type: "plaintext"
    values:
      layout: "plaintext"
```

On serving your jekyll content, you should now have .txt files extensions to your blog posts.
