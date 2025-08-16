const jsonUrl = "https://script.google.com/macros/s/AKfycbw_DhaLRpVKacitPH6c1_Smk6ZJ8rskDQutwDguVafAVP-rrko2aUNaSIpQMH3Uq5yD2Q/exec";

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    const galleryEl = document.getElementById('gallery');
    
    data.forEach(item => {
      const link = document.createElement('a');
      link.href = item.src;
      link.dataset.pswpWidth = 800;
      link.dataset.pswpHeight 600;

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.name;

      link.appendChild(img);
      galleryEl.appendChild(link);
    });

    const pswpElement = document.createElement('div');
    pswpElement.className = 'pswp';
    document.body.appendChild(pswpElement);

    gallery.addEventListener('click', (event) => {
      event.preventDefault();
      const targetLink = event.target.closest('a');
      if (!targetLink) return;

      const items = data.map(i => ({ src: i.src, w: 800, h: 600 }));
      const index = Array.from(gallery.children).indexOf(targetLink);
      const galleryInstance = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, { index });
      galleryInstance.init();
    });
  })
  .catch(err => console.error("JSON取得失敗:", err));
