function toggleHiddenNews() {
  var hiddenNewsItems = document.querySelectorAll('.hidden-news');

  hiddenNewsItems.forEach(function(item) {
    if (item.style.display === '' || item.style.display === 'none') {
      item.style.display = 'block';
    }
  });

 }
