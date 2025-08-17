import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe@5/dist/photoswipe-lightbox.esm.js';
const jsonUrl = "https://script.google.com/macros/s/AKfycbxv3uAjuIrGsjyDyEsaQMzqtbH-N_xYYQw4jVKp940aZjtNwFgXF7qSGAOlwZHrOMHYww/exec";

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    console.log("取得したJSON:", data);

    const galleryEl = document.getElementById('gallery');

    data.forEach(eventData => {
      console.log("行事:", eventData.event, "写真枚数:", eventData.photos.length);

      // 行事ごとに区切る
      const section = document.createElement('div');
      section.className = "event-section";

      const title = document.createElement('h2');
      title.textContent = eventData.event;
      section.appendChild(title);

      const eventGallery = document.createElement('div');
      eventGallery.className = 'event-gallery';
      section.appendChild(eventGallery);

      eventData.photos.forEach(item => {
        console.log("画像URL:", item.src);

        const link = document.createElement('a');
        link.href = item.src;
        link.dataset.pswpWidth = 800;
        link.dataset.pswpHeight = 600;

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.name;

        link.appendChild(img);
        eventGallery.appendChild(link);
      });

      galleryEl.appendChild(section);
    });

    // PhotoSwipe 初期化
    const lightbox = new PhotoSwipeLightbox({
      gallery: '.event-gallery',
      children: 'a',
      pswpModule: () => import('https://unpkg.com/photoswipe@5/dist/photoswipe.esm.js')
    });
    lightbox.init();
  })
  .catch(err => console.error("JSON取得失敗:", err));
