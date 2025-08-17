// JSON ファイルの場所
const jsonUrl = "data.json";

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    const galleryEl = document.getElementById("gallery");

    data.forEach(item => {
      // 行事ごとのセクション
      const section = document.createElement("div");
      section.className = "event-section";

      // 行事名
      const title = document.createElement("h2");
      title.textContent = item.event;

      // 説明文
      const desc = document.createElement("p");
      desc.className = "event-description";
      desc.textContent = item.description;

      // サムネイル画像（クリックでリンク先に飛ぶ）
      const link = document.createElement("a");
      link.href = item.link;
      link.target = "_blank";

      const img = document.createElement("img");
      img.src = item.thumbnail;
      img.alt = item.event;

      link.appendChild(img);

      // セクションに追加
      section.appendChild(title);
      section.appendChild(desc);
      section.appendChild(link);

      // HTML の #gallery に追加
      galleryEl.appendChild(section);
    });
  })
  .catch(err => console.error("JSON取得失敗:", err));

