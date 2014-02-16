(function () {

  // DOM elements
  var convertButton = document.getElementById('convert'),
    readabilityTA = document.getElementById('readability-json'),
    instapaperTA = document.getElementById('instapaper-html');

  // export templates
  var before = '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Instapaper: Export</title></head><body><h1>Archive</h1><ol>',
    between = '</ol><h1>Unread</h1><ol>',
    after = '</ol></body></html>';

  // on click
  convertButton.addEventListener('click', function () {

    var items = JSON.parse(readabilityTA.value).bookmarks,
      linkIdx,
      item,
      archivedItems = '',
      unreadItems = '';

    for (linkIdx = 0; linkIdx < items.length; linkIdx++) {
      item = items[linkIdx];
      if (item.archive) {
        archivedItems += '<li><a href="' + item.article__url + '">' + item.article__title + '</a>: ' + item.article__excerpt + '</li>';
      } else {
        unreadItems += '<li><a href="' + item.article__url + '">' + item.article__title + '</a>: ' + item.article__excerpt + '</li>';
      }
    }

    instapaperTA.value = before + archivedItems + between + unreadItems + after;
  }, false);
})();
