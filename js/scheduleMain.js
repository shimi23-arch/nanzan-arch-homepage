const jsonUrl = "json/schedule.json"; // GitHubに置いたJSONのパス

fetch(jsonUrl)
  .then(res => res.json())
  .then(data => {
    const scheduleEl = document.getElementById("schedule");

    data.forEach(item => {
      const section = document.createElement("div");
      section.className = "schedule-item";

      const title = document.createElement("h2");
      title.textContent = `${item.type}: ${item.title}`;

      const date = document.createElement("p");
      date.textContent = `日付: ${item.date}`;

      const desc = document.createElement("p");
      desc.textContent = item.description;

      section.appendChild(title);
      section.appendChild(date);
      section.appendChild(desc);

      // PDF リンクがある場合
      if (item.documents) {
        const docsContainer = document.createElement("div");
        docsContainer.className = "documents";

        item.documents.forEach(doc => {
          const link = document.createElement("a");
          link.href = doc.file;
          link.textContent = doc.title;
          link.target = "_blank";
          docsContainer.appendChild(link);
          docsContainer.appendChild(document.createElement("br"));
        });

        section.appendChild(docsContainer);
      }

      scheduleEl.appendChild(section);
    });
  })
  .catch(err => console.error("JSON取得失敗:", err));
