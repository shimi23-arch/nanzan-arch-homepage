const jsonUrl = "json/schedule.json"; // GitHubに置いたJSONのパス

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("cards-container");

    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";

      const type = document.createElement("div");
      type.className = "type";
      type.textContent = item.type;

      const title = document.createElement("h2");
      title.textContent = item.title;

      const date = document.createElement("p");
      date.textContent = "日付: " + item.date;

      const desc = document.createElement("p");
      desc.textContent = item.description;

      card.appendChild(type);
      card.appendChild(title);
      card.appendChild(date);
      card.appendChild(desc);

      container.appendChild(card);
    });
  })
  .catch(err => console.error("JSON取得失敗:", err));
