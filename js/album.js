import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js';
const jsonUrl = "https://script.google.com/macros/s/AKfycbzRf8_dK3kQKQP-23V1LdJ_kyIbFljtrP14cYzB2aIj4Y35HD0GBJbvXyU_lQKEUHG01A/exec";

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    console.log("取得したJSON:", data); // ← デバッグ用
    const galleryEl = document.getElementById('gallery');

    data.forEach(item => {
      const link = document.createElement('a');
      link.href = item.src;
      link.dataset.pswpWidth = 800;
      link.dataset.pswpHeight = 600;

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.name;
      img.style.width = "200px"; // サムネイル用
      img.style.margin = "5px";
      img.style.borderRadius = "8px";

      link.appendChild(img);
      galleryEl.appendChild(link);
    });

    // PhotoSwipe 初期化
    const lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
    });
    lightbox.init();
  })
  .catch(err => console.error("JSON取得失敗:", err));
