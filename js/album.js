fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const galleryEl = document.getElementById("gallery");

    data.forEach(item => {
      const section = document.createElement("div");
      section.className = "event-section";

      const title = document.createElement("h2");
      title.textContent = item.event;

      const desc = document.createElement("p");
      desc.textContent = item.description;

      const img = document.createElement("img");
      img.src = item.thumbnail;
      img.alt = item.event;
      img.style.cursor = "pointer";

      img.addEventListener("click", () => {
        window.open(item.link, "_blank");
      });

      section.appendChild(title);
      section.appendChild(desc);
      section.appendChild(img);
      galleryEl.appendChild(section);
    });
  })
  .catch(err => console.error("JSON取得失敗:", err));


