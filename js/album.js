// サムネイル画像をリンクではなく img として表示
const img = document.createElement("img");
img.src = item.thumbnail;
img.alt = item.event;
img.style.cursor = "pointer"; // クリックできることを示す

// クリックしたらリンク先を開く
img.addEventListener("click", () => {
  window.open(item.link, "_blank"); // 新しいタブで開く
});

section.appendChild(img);


