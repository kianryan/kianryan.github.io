---
layout: post
title: From Wordpress To Jekyll
categories: Code
---

### Why Jekyll?

Wordpress annoys me.

I tend to draft blog posts using markdown, in Vim.  I then use a whole host of tricks to get them online.  A few years ago I switched the majority of my blogging from Wordpress to Tumblr, in a hope for greater social engagement, but it hasn't really worked.

Jekyll looks to give me the kind of blog control I really wanted from day 1.  Text files, markup, source control, some magic.  Done.  _Lovely._

### Running Jekyll On Windows

![](/assets/images/2018/02/28/full_window_jekyll.jpg)

Did anyone expect Microsoft to be supporting Linux on Windows?

[Linux Subsystem on Windows 10](https://docs.microsoft.com/en-us/windows/wsl/install-win10) has been an interesting project for Microsoft.  I'm running Ruby/Rails projects "natively" without having to dual boot, or run a full VM.  There's some quirkiness with tmux and vim, I expect it to get better over time.  It's certainly interesting times.

[Jekyll certainly works well out of the box.](https://jekyllrb.com/docs/windows)

### Exporting Posts From Wordpress

There's an [official Wordpress Importer](https://import.jekyllrb.com/docs/wordpress/), which will import your posts in to a Jekyll site, but not images, CSS, etc.

I used the [Wordpress to Jekyll plugin](https://github.com/benbalter/wordpress-to-jekyll-exporter), which did a pretty good job to grabbing almost everything from my Wordpress blog and generating a zip containing all my posts and images.  Not perfect, but usable as a starting point.

### Cleaning Up Encoding

My blog as been around since 2008.  Standardisation on UTF-8 was a pipe-dream back then.

Some of my posts ended up with a mess of HTML entities in titles and body content.  Wordpress, at least the earlier versions, shunned away from UTF-8, so on export there's HTML entities all over the place. Jekyll doesn't mind them in the body but does seem to get upset with them in the title in your Front Matter, and it screws with the rendering.

[Recode](https://github.com/pinard/Recode) can transform your posts from HTML encoding to UTF-8 encoding, which will broadly fix the problems.  Jekyll will spit out any pages that are still broken and you can fix them manually.

```
sudo apt-get install recode
recode HTML *.md
```

### Moving Images to /assets, Replacing Image Links in Posts

Exported posts will keep all your images linked to your original urls.  This is not necessarily a bad thing, but I want to move my images to an assets folder, and make my image urls relative.  [Sed](https://www.gnu.org/software/sed/manual/sed.html) can do an inline regular expression replacement to change your links from an absolute to a relative url, __and__ from wp-content to assets, all in one shot:

```
sed -i "s/http:\/\/www.kianryan.co.uk\/wp-content\/uploads\//\/assets\/images\//g" *.md
```

I found that all my image tags had explicit width and height attributes which broke under the new CSS.  Strip them out:

```
sed -i "s/width=\"[0-9]\+\"//g" *.md
sed -i "s/height=\"[0-9]\+\"//g" *.md
```

### Resizing and Compressing Images

The total size of the original images uploaded to Wordpress came in at 300Mb.  That was quite a bit.  Most were just too big.  They didn't need to be 15MP images, or 100% Jpgs - they just needed to be good enough for blog posts.  [Mogrify](https://www.imagemagick.org/script/mogrify.php) is a component of [ImageMagick](https://www.imagemagick.org/script/index.php) that allows you to modify image files in-situ.

```
sudo apt-get install imagemagick
cd assets
mogrify -quality 90 -resize "1280>" **/*.jpg
du -h --max-depth=1
```

My image folder is now around 28Mb, a massive improvement over 300Mb.

### Importing Tumblr Posts

The [official Tumblr importer](http://import.jekyllrb.com/docs/tumblr/) works just fine here.  It doesn't like non-ASCII characters in URLs (a problem if you've got titles including words such as flèche), but you can [rename your posts URLs](https://staff.tumblr.com/post/35833561/more-url-niceness) before import.

After my import, there was a folder of posts in \_posts/tumblr.  These contained no links to images, and the markdown was not great.  About a third of the posts needed heavy editing.  Since I use Tumblr for short and long form posts, I kept the long form posts and removed the short forms and reblogs.  Once happy, move the posts to \_posts folder.


### Adding a Theme

[Minima](https://github.com/jekyll/minima), the default theme is pretty good.  But I spend quite a lot of my day job exploiting Bootstrap.

[Minima-Reboot](https://github.com/aterenin/minima-reboot) is a rebuild of Minima using Bootstrap 4.

I've then added Bootstrap.js via CDN to head-includes.html to allow me to exploit drop downs, and various other components:

```
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" 
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" 
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" 
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" 
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" 
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" 
        crossorigin="anonymous"></script>
```

### Hosting and Putting It Live

[Github Pages](https://pages.github.com/) comes with [support for Jekyll](https://jekyllrb.com/docs/github-pages/).

With not much work [it'll serve a custom domain](https://help.github.com/articles/using-a-custom-domain-with-github-pages/).
