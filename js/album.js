const jsonUrl = "data.json"; // GitHub に置いた data.json のパス

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

      // サムネイル画像
      const img = document.createElement("img");
      img.src = item.thumbnail;
      img.alt = item.event;
      img.style.cursor = "pointer"; // カーソルを指にする

      // クリックで Google Photos のリンクを開く
      img.addEventListener("click", () => {
        window.open(item.link, "_blank"); // 新しいタブで開く
      });

      // セクションに追加
      section.appendChild(title);
      section.appendChild(desc);
      section.appendChild(img);
      galleryEl.appendChild(section);
    });
  })
  .catch(err => console.error("JSON取得失敗:", err));


