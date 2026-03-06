module PlainTextPlugin
  class PlainTextPageGenerator < Jekyll::Generator
    safe true

    def generate(site)
      site.posts.each do |post|
        # Does this need to generate a page on pages?
        site.pages << PlainTextPage.new(site, post)
      end
    end
  end

  # Subclass of `Jekyll::Page` with custom method definitions.
  class PlainTextPage < Jekyll::Page
    def initialize(site, post)
      @site = site             # the current site instance.
      @base = site.source      # path to the source directory.
      @dir = ''
      @page = post

      @content = post.content

      path = post.url.chomp('/')

      # Needs the full date id
      @data = {
        :path => path + '.txt',
        :content => post.content
      }

      # Page name will have the same name as the existing post name.
      
      @basename = path      # full filename
      @ext      = '.txt'      # the extension.

      # Look up front matter defaults scoped to type `categories`, if given key
      # doesn't exist in the `data` hash.
      data.default_proc = proc do |_, key|
        site.frontmatter_defaults.find(relative_path, :plaintext, key)
      end
    end

      # Placeholders that are used in constructing page URL.
      def url_placeholders
        {
          :path       => @dir,
          :basename   => basename,
          :output_ext => output_ext,
        }
      end
  end
end
