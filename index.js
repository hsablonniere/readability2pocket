(function () {
  var convertButton = document.getElementById('convert'),
      readabilityTA = document.getElementById('readability-json'),
      instapaperTA = document.getElementById('instapaper-html'),
      before = '<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Instapaper: Export</title></head><body><h1>Unread</h1><ol>',
      between = '</ol><h1>Archive</h1><ol>',
      after = '</ol></body></html>';

  convertButton.addEventListener('click', function () {
  
  var readabilityLinks = JSON.parse(readabilityTA.value);
  
  console.log(readabilityLinks.bookmarks.length);
        unreadItems = "";
        archivedItems = "";
             
    for(var i=0; i < readabilityLinks.bookmarks.length; i++)
    {
    	link = readabilityLinks.bookmarks[i];
    	unreadItems += '<li><a href="' + link.article__url + '">' + link.article__title + '</a>: ' + link.article__excerpt + '</li>'; 
    }
         
    instapaperTA.value = before + unreadItems + between + archivedItems + after;     
        
             
    /*for (Object in readabilityLinks) {
      
      link = readabilityLinks[Object];
      
      unreadItems += '<li><a href="' + link.article__url + '">' + link.article__title + '</a>: ' + link.article__excerpt + '</li>';
      
      
    }

    instapaperTA.value = before + unreadItems + between + archivedItems + after;*/
  }, false);
})();
