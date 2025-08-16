const jsonUrl = "https://script.google.com/macros/s/AKfycbyGHVozroQs-kKpO7InuWJQ8PTqfjnsEJ8JC6AcgWLc3llFiCHDXzObL99dDFSLKmAsww/exec";

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById('gallery');

    data.forEach(item => {
      const link = document.createElement('a');
      link.href = item.src;
      link.setAttribute('data-pswp-width', 800);
      link.setAttribute('data-pswp-height', 600);
      link.className = "gallery-item";

      const img = document.creatElement('img');
      img.src = item.src;
      img.alt = item.name;
      img.style.width = "150px";

      link.appendChild(img);
      gallery.appendChild(link);
    });

    const pswpElement = document.querySelectorAll('.pswp')[0];
    gallery.addEventListener('click', function(event) {
      event.preventDefault();
      const items = data.map(i => ({
        src: i.src,
        w: 800,
        h: 600
      }));
      const options = { index: Array.form(gallery.children).indexOf(eent.target.parentNode) };
      const galleryInstance = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      galleryInstance.init();
    });
  });
        
