document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');

  if (gallery) {
    const folder = gallery.id.split('-')[1];
    let imgCount = 0;

    function loadImage(index) {
      const img = new Image();
      img.src = `img/${folder}/${index}.jpg`;

      img.onload = function () {
        createGalleryItem(index);
        loadImage(index + 1);
      };

      img.onerror = function () {
        imgCount = index - 1;
      };
    }

    function createGalleryItem(index) {
      const item = document.createElement('div');
      item.classList.add('item');

      const imageSrc = `img/${folder}/reduced/${index}-thumb.jpg`;

      const link = document.createElement('a');
      link.href = imageSrc;
      link.download = `${folder}-image-${index}.jpg`;

      const image = document.createElement('img');
      image.src = imageSrc;
      image.alt = `Image ${index}`;

      const icon = document.createElement('img');
      icon.classList.add('galery-img-icon');
      icon.src = 'img/icon.svg';
      icon.alt = '';

      link.appendChild(image);
      link.appendChild(icon);
      item.appendChild(link);
      gallery.appendChild(item);
    }

    loadImage(1);
  }
});
