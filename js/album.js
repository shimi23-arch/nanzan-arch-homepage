const jsonUrl = "https://script.google.com/macros/s/AKfycbxnEqU0Tmg6q7OMzu2t2uAT8ea7myHPO1WU1B83lYFDHtRvHdoV5HoxJjiaTEITpnLVOg/exec";

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    const galleryEl = document.getElementById('gallery');

    data.forEach(eventData => {
      // 行事ごとにセクション作成
      const section = document.createElement('div');
      section.className = "event-section";

      const title = document.createElement('h2');
      title.textContent = eventData.event;
      section.appendChild(title);

      const eventGallery = document.createElement('div');
      eventGallery.className = 'event-gallery';
      section.appendChild(eventGallery);

      eventData.photos.forEach(item => {
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

    
    const lightbox = new PhotoSwipeLightbox({
      gallery: '.event-gallery',
      children: 'a',
      pswpModule: () => import('./photoswipe.esm.js')
    });
    lightbox.init();
  })
  .catch(err => console.error("JSON取得失敗:", err));
