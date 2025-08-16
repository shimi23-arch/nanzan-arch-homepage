import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js';
const jsonUrl = "https://script.google.com/macros/s/AKfycbxEFQfhNbcAmrF0XeGcYW0yjnnGdghzE4xmmWlFYURDEXgagc8Efg-Kj9wEEsE2gIXgEA/exec";

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    const galleryEl = document.getElementById('gallery');
    
    data.forEach(item => {
      const link = document.createElement('a');
      link.href = item.src;
      link.dataset.pswpWidth = 800;
      link.dataset.pswpHeight = 600;

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.name;
      img.style.width = "200px";
      img.style.margin = "5px";

      link.appendChild(img);
      galleryEl.appendChild(link);
    });

    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
    });
    lightbox.init();
  })
  .catch(err => console.error("JSON取得失敗:", err));
