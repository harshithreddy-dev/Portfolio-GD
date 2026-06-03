const fs = require("fs");
const path = require("path");

const root = "C:\\Users\\harsh\\OneDrive\\Desktop\\editorsforyou\\final_web";
const pages = [
  "creator-longform.html",
  "creator-shortform.html",
  "celebration-beginnings.html",
  "celebration-frames.html",
  "transformation-growth.html",
  "transformation-lifestyle.html",
  "social-business.html",
  "social-brand.html",
];

const css = `

/* ---------- PROJECT VIDEO THUMBNAILS ---------- */
.youtube-project{
  position:relative !important;
  width:100% !important;
  aspect-ratio:16 / 9 !important;
  border:0 !important;
  border-radius:16px !important;
  overflow:hidden !important;
  display:block !important;
  cursor:pointer !important;
  background:#111 !important;
  box-shadow:0 18px 50px rgba(0,0,0,.34), 0 0 0 1px var(--page-accent-soft), 0 0 34px rgba(255,255,255,.035) !important;
}

.youtube-project img{
  width:100% !important;
  height:100% !important;
  display:block !important;
  object-fit:cover !important;
  filter:saturate(1.05) contrast(1.04) brightness(.92) !important;
  transition:transform .38s cubic-bezier(.16,1,.3,1), filter .38s cubic-bezier(.16,1,.3,1) !important;
}

.youtube-project:hover img{
  transform:scale(1.035) !important;
  filter:saturate(1.12) contrast(1.08) brightness(1) !important;
}

.youtube-project::after{
  content:"" !important;
  position:absolute !important;
  inset:0 !important;
  background:linear-gradient(180deg,rgba(0,0,0,.04),rgba(0,0,0,.42)) !important;
  pointer-events:none !important;
}

.youtube-project span{
  position:absolute !important;
  left:50% !important;
  top:50% !important;
  width:62px !important;
  height:62px !important;
  transform:translate(-50%,-50%) !important;
  border-radius:50% !important;
  display:grid !important;
  place-items:center !important;
  z-index:2 !important;
  background:linear-gradient(135deg,var(--page-accent),var(--page-accent-2)) !important;
  box-shadow:0 16px 44px rgba(0,0,0,.32), 0 0 28px var(--page-accent-soft) !important;
}

.youtube-project span::before{
  content:"" !important;
  margin-left:4px !important;
  border-top:12px solid transparent !important;
  border-bottom:12px solid transparent !important;
  border-left:18px solid #050505 !important;
}

.youtube-project iframe{
  position:absolute !important;
  inset:0 !important;
  width:100% !important;
  height:100% !important;
  border:0 !important;
}
`;

const script = `
<script>
document.addEventListener("click", function (event) {
  var button = event.target.closest(".youtube-project");
  if (!button || button.dataset.loaded === "true") return;
  var id = button.dataset.youtubeId;
  var title = button.dataset.youtubeTitle || "Project video";
  button.dataset.loaded = "true";
  button.innerHTML = '<iframe src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" title="' + title.replace(/"/g, "&quot;") + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
});
</script>`;

function thumbnailButton(id, title) {
  return `<button class="youtube-project" type="button" data-youtube-id="${id}" data-youtube-title="${title.replace(/"/g, "&quot;")}" aria-label="Play ${title.replace(/"/g, "&quot;")}">
<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="${title.replace(/"/g, "&quot;")} thumbnail" loading="lazy">
<span aria-hidden="true"></span>
</button>`;
}

for (const page of pages) {
  const full = path.join(root, page);
  let html = fs.readFileSync(full, "utf8");

  html = html.replace(
    /<iframe\s+src="https:\/\/www\.youtube\.com\/embed\/([^"?]+)(?:\?[^"]*)?"\s+title="([^"]+)"\s+allow="[^"]*"\s+referrerpolicy="[^"]*"\s+allowfullscreen><\/iframe>/g,
    (_, id, title) => thumbnailButton(id, title)
  );

  html = html.replace(/\n\/\* ---------- PROJECT VIDEO THUMBNAILS ---------- \*\/[\s\S]*?(?=\n<\/style>)/, "");
  html = html.replace("</style>", `${css}\n</style>`);

  if (!html.includes('closest(".youtube-project")')) {
    html = html.replace("</body>", `${script}\n</body>`);
  }

  fs.writeFileSync(full, html, "utf8");
}

console.log("Added visible YouTube thumbnails for project videos.");
