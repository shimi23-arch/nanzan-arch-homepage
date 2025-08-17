const jsonUrl = "data.json"; // JSON ファイルのパス

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    const galleryEl = document.getElementById("gallery");

    data.forEach(item => {
      const section = document.createElement("div");
      section.className = "event-section";

      // 行事名
      const title = document.createElement("h2");
      title.textContent = item.event;

      // 説明文
      const desc = document.createElement("p");
      desc.className = "event-description";
      desc.textContent = item.description;

      // ギャラリー
      const eventGallery = document.createElement("div");
      eventGallery.className = "event-gallery";

      item.photos.forEach(photo => {
        const link = document.createElement("a");
        link.href = photo.link;
        link.target = "_blank"; // 新しいタブで開く

        const img = document.createElement("img");
        img.src = photo.thumbnail;
        img.alt = item.event;

        link.appendChild(img);
        eventGallery.appendChild(link);
      });

      section.appendChild(title);
      section.appendChild(desc);
      section.appendChild(eventGallery);
      galleryEl.appendChild(section);
    });
  })
  .catch(err => console.error("JSON取得失敗:", err));


