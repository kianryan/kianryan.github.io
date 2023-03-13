/* Kofi/Zapier/Jekyll */
/* On page initialization, will look for a kofi_timeline element
   If found, will load the rss feed from the instance, and display the first N
   items. */
/* Heavily inspired by:
   https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/ */

const KofiBar = {

  config: {
    url: 'https://zapier.com/engine/rss/14265922/kofifeedlive',
    itemsToDisplay: 3,
  },

  displayItems: function (data, dom) {

    const items = Array.from(data.querySelectorAll("item")).slice(0, KofiBar.config.itemsToDisplay);
    var html = '';

    if (items.length === 0) return;

    items.forEach(item => {

      /* Create short date/time string. */
      const date = new Date(item.querySelector("pubDate").innerHTML);
      const dateStr = date.toLocaleString(undefined, { dateStyle: 'short', timeStyle: 'short' });
      const message = item.querySelector("description").innerHTML;
      const paymentFrom = item.querySelector("title").innerHTML;
      const link = item.querySelector("link").innerHTML;

      // decode message
      const element = document.createElement("textarea");
      element.innerHTML = message;
      let decodedMessage = element.value;
      if (decodedMessage === '&nbsp;') decodedMessage = '';

      html += `
        <article>
          <h4><a href="${link}" target="_blank" rel="noopener">
              ${dateStr}
            </a></h4>
          <a href="${link}" target="_blank" rel="noopener">
          ☕ ${paymentFrom}</a>
          <p>
            ${decodedMessage}
          </p>
        </article>
      `;
    });

    dom.innerHTML = html;
  },

  decodeArea: document.createElement('textarea'),

  decodeHTML: function (html) {
    KofiBar.decodeArea.innerHTML = html;
    return KofiBar.decodeArea.value;
  },

  init: function () {
    const timeline = document.getElementById("kofi_timeline");
    if (timeline != null) {
      console.log("Initialize kofi");

      const rssUrl = KofiBar.config.url

      fetch(rssUrl).then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => KofiBar.displayItems(data, timeline));
    }
  },
};

document.addEventListener('DOMContentLoaded', KofiBar.init);