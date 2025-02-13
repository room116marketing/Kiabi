// Control de la galería en las páginas hijas de multimedia:
// La selección de la carpeta que se usa para la carga se elige mediante el id del contenedor gallery-""
// Se cargan todas las imágenes que están dentro de la carpeta, pero es necesario que las fotos estén enumeradas
// En la carga de la web se muestran las fotos reducidas que están dentro de la carpeta "reduced", pero para la descarga se usa la imagen completa

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const loadMoreButton = document.getElementById('load-more');
  
  if (gallery && loadMoreButton) {
    const folder = gallery.id.split('-')[1];
    let imgCount = 0;
    let loadedImages = 0;
    const imagesPerLoad = 4;  

    function loadImage(index) {
      const img = new Image();
      img.src = `img/${folder}/${index}.jpg`;

      img.onload = function () {
        createGalleryItem(index);
        loadedImages++;
        imgCount++;
        
        if (loadedImages < imagesPerLoad) {
          loadImage(index + 1);
        } else {
          loadMoreButton.style.display = 'block';
        }
      };

      img.onerror = function () {
        if (loadedImages === 0) {
          loadMoreButton.style.display = 'none';
        } else {
          loadMoreButton.style.display = 'block';
        }
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

    loadMoreButton.addEventListener('click', function() {
      loadedImages = 0;
      loadImage(imgCount + 1);
    });

    // Initial load
    loadImage(1);
  }
});
