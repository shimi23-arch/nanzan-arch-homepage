import PhotoSwipeLightbox from './photoswipe-lightbox.esm.js';

const jsonUrl = "https://script.google.com/macros/s/AKfycbyGHVozroQs-kKpO7InuWJQ8PTqfjnsEJ8JC6AcgWLc3llFiCHDXzObL99dDFSLKmAsww/exec";

const galleryEl = document.getElementById('gallery');

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const link = document.createElement('a');
      link.href = item.src;
      link.setAttribute('data-pswp-width', item.width || 800);
      link.setAttribute('data-pswp-height', item.height || 600);

      const img = document.creatElement('img');
      img.src = item.src;
      img.alt = item.name;
      img.style.width = "150px";

      link.appendChild(img);
      galleryEl.appendChild(link);
    });

    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('./photoswipe.esm.js')
    });
    lightbox.init();
  })
.catch(err => {
  console.error("JSON取得失敗:", err);
});
        
