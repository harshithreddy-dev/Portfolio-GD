const fs = require("fs");
const path = require("path");

const root = "C:\\Users\\harsh\\OneDrive\\Desktop\\editorsforyou\\final_web";
const pages = [
  "index.html",
  "Transformation.html",
  "Baby Shower.html",
  "Anniversary.html",
  "Trips.html",
  "Creator.html",
  "SMM.html",
  "contact.html",
  "thankyou.html",
];

const pageThemes = {
  "index.html": "theme-home",
  "Transformation.html": "theme-glow",
  "Baby Shower.html": "theme-baby",
  "Anniversary.html": "theme-forever",
  "Trips.html": "theme-journey",
  "Creator.html": "theme-creator",
  "SMM.html": "theme-social",
  "contact.html": "theme-contact",
  "thankyou.html": "theme-contact",
};

const pricingGroups = {
  "Transformation.html": "creator",
  "Creator.html": "creator",
  "SMM.html": "creator",
  "Trips.html": "memories",
  "Anniversary.html": "memories",
  "Baby Shower.html": "memories",
};

const pricingPlans = {
  creator: [
    {
      name: "IGNITE EDITS",
      price: "₹600 total",
      rate: "₹600 / minute",
      features: [
        "Up to 1 minute",
        "Cinematic Editing",
        "Captions",
        "Music + Sound Effects",
        "Color Grading",
        "1 Revision",
        "Delivery: 2–3 days",
      ],
    },
    {
      name: "MOMENTUM EDITS",
      price: "₹5,400 total",
      rate: "₹600 / minute",
      features: [
        "Up to 10 minutes",
        "Cinematic Editing",
        "Storytelling",
        "Motion Graphics",
        "Sound Effects",
        "2 Revisions",
        "Priority Support",
        "Delivery: 5–7 days",
      ],
    },
    {
      name: "ASCENT EDITS",
      price: "₹9,600 total",
      rate: "₹600 / minute",
      features: [
        "Up to 20 minutes",
        "Premium Cinematics",
        "Advanced Storytelling",
        "Sound Design",
        "High-end Motion Graphics",
        "Priority Delivery",
      ],
    },
  ],
  memories: [
    {
      name: "MEMORIES",
      price: "₹900 total",
      rate: "₹900 / minute",
      features: [
        "Up to 1 minute",
        "Emotional Storytelling",
        "Music + Sound Design",
        "Color Grading",
        "1 Revision",
        "Delivery: 3–4 days",
      ],
    },
    {
      name: "TIMELESS",
      price: "₹8,100 total",
      rate: "₹900 / minute",
      features: [
        "Up to 10 minutes",
        "Emotional Editing",
        "Storytelling Flow",
        "Transitions",
        "Sound Effects",
        "2 Revisions",
        "Priority Support",
      ],
    },
    {
      name: "LEGACY",
      price: "₹14,400 total",
      rate: "₹900 / minute",
      features: [
        "Up to 20 minutes",
        "Full Cinematic Story",
        "Advanced Sound Design",
        "Premium Storytelling",
        "Priority Delivery",
      ],
    },
  ],
};

const nav = `
<nav class="site-nav">
  <a href="index.html" class="nav-brand">EDITORS FOR YOU</a>
  <div class="nav-links">
    <a href="index.html">Home</a>
    <a href="index.html#services">Services</a>
    <a href="index.html#about">About Us</a>
    <a href="contact.html">Contact</a>
  </div>
  <a href="contact.html" class="nav-cta">Book Now</a>
</nav>`;

const footer = `
<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <h2>EDITORS FOR YOU</h2>
      <p>Turning moments into cinematic stories through emotion-driven editing, premium pacing, and memorable visual storytelling.</p>
    </div>
    <div>
      <h3>Navigation</h3>
      <a href="index.html">Home</a>
      <a href="index.html#services">Our Services</a>
      <a href="index.html#about">About Us</a>
      <a href="contact.html">Contact</a>
    </div>
    <div>
      <h3>Services</h3>
      <a href="Transformation.html">Transformation Stories</a>
      <a href="Creator.html">Creator Content</a>
      <a href="Trips.html">Travel & Trip Films</a>
      <a href="Anniversary.html">Anniversary Storytelling</a>
      <a href="Baby Shower.html">Baby Shower Memories</a>
      <a href="SMM.html">Social Media Management</a>
    </div>
    <div>
      <h3>Contact</h3>
      <p>Ready to start your story?</p>
      <a href="contact.html" class="footer-cta">Get your editor today</a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 Editors For You. All rights reserved.</p>
    <div>
      <a href="contact.html">Start a Project</a>
      <a href="index.html#services">View Services</a>
    </div>
  </div>
</footer>`;

const sharedCss = `

/* ---------- SHARED SITE UPDATES ---------- */
body{
  --page-accent:#ffffff;
  --page-accent-2:var(--page-accent);
  --page-accent-soft:rgba(255,255,255,.14);
  animation:pageFadeIn .55s ease both;
  transition:opacity .28s ease, transform .28s ease !important;
}

body.is-leaving{
  opacity:0 !important;
  transform:translateY(8px) !important;
}

body.theme-home,
body.theme-social,
body.theme-contact{
  --page-accent:#1aff7a;
  --page-accent-2:#ffffff;
  --page-accent-soft:rgba(26,255,122,.16);
}

body.theme-glow{
  --page-accent:#ff6b6b;
  --page-accent-2:#ffb199;
  --page-accent-soft:rgba(255,107,107,.18);
}

body.theme-baby{
  --page-accent:#d81b60;
  --page-accent-2:#ff8fbd;
  --page-accent-soft:rgba(216,27,96,.34);
}

body.theme-forever{
  --page-accent:#d4a574;
  --page-accent-2:#f4dfb4;
  --page-accent-soft:rgba(212,165,116,.2);
}

body.theme-journey{
  --page-accent:#50b4ff;
  --page-accent-2:#ff9f43;
  --page-accent-soft:rgba(80,180,255,.18);
}

body.theme-creator{
  --page-accent:#b478ff;
  --page-accent-2:#f0a7ff;
  --page-accent-soft:rgba(180,120,255,.18);
}

.site-nav{
  position:fixed !important;
  top:0 !important;
  left:0 !important;
  right:0 !important;
  z-index:9999 !important;
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:24px !important;
  padding:16px 6vw !important;
  background:rgba(0,0,0,.68) !important;
  border-bottom:1px solid rgba(255,255,255,.14) !important;
  box-shadow:0 12px 40px rgba(0,0,0,.22) !important;
  backdrop-filter:blur(20px) saturate(145%) !important;
  -webkit-backdrop-filter:blur(20px) saturate(145%) !important;
}

.site-nav a{
  text-decoration:none !important;
  transition:color .28s ease, background .28s ease, transform .28s ease, box-shadow .28s ease, opacity .28s ease !important;
}

.nav-brand{
  color:#ffffff !important;
  font-weight:800 !important;
  letter-spacing:.08em !important;
  white-space:nowrap !important;
}

.nav-links{
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  gap:22px !important;
  flex-wrap:wrap !important;
}

.nav-links a{
  color:rgba(255,255,255,.78) !important;
  font-weight:600 !important;
  transition:.25s ease !important;
}

.nav-links a:hover{
  color:#ffffff !important;
}

.nav-cta,
.footer-cta{
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  border-radius:999px !important;
  color:#000000 !important;
  background:#ffffff !important;
  font-weight:800 !important;
  box-shadow:0 14px 34px rgba(255,255,255,.14) !important;
}

.nav-cta{
  padding:11px 22px !important;
  white-space:nowrap !important;
}

.hero h1{
  color:var(--page-accent) !important;
  text-shadow:0 0 36px var(--page-accent-soft) !important;
}

.section-title{
  padding:34px 6vw 18px !important;
  text-align:center !important;
}

.section-title h2{
  font-family:'Playfair Display', serif !important;
  font-size:clamp(2rem,4vw,3.4rem) !important;
  color:var(--page-accent) !important;
  margin-bottom:10px !important;
}

.section-title p{
  color:rgba(255,255,255,.66) !important;
  max-width:680px !important;
  margin:0 auto !important;
}

.about-section{
  padding:88px 6vw 96px !important;
  text-align:center !important;
}

.about-inner{
  max-width:860px !important;
  margin:0 auto !important;
}

.about-section h2{
  font-family:'Playfair Display', serif !important;
  font-size:clamp(2.2rem,5vw,4rem) !important;
  color:var(--page-accent) !important;
  margin-bottom:28px !important;
  text-align:center !important;
}

.about-copy{
  display:grid !important;
  gap:18px !important;
  color:rgba(255,255,255,.76) !important;
  justify-items:center !important;
  text-align:center !important;
}

.about-copy p{
  font-size:1rem !important;
  line-height:1.85 !important;
  max-width:780px !important;
  margin:0 auto !important;
}

.about-services{
  display:grid !important;
  grid-template-columns:repeat(auto-fit,minmax(220px,1fr)) !important;
  gap:12px !important;
  margin:30px 0 !important;
}

.about-services span{
  border:1px solid var(--page-accent-soft) !important;
  border-radius:8px !important;
  padding:14px 16px !important;
  background:rgba(255,255,255,.035) !important;
  color:white !important;
  font-weight:700 !important;
}

.about-close{
  margin-top:34px !important;
  text-align:center !important;
}

.about-close strong{
  display:block !important;
  color:var(--page-accent) !important;
  font-size:1.35rem !important;
  letter-spacing:.1em !important;
}

.about-close span{
  display:block !important;
  margin-top:8px !important;
  color:rgba(255,255,255,.72) !important;
}

.projects-row{
  display:grid !important;
  grid-template-columns:repeat(2,minmax(280px,520px)) !important;
  justify-content:center !important;
  gap:28px !important;
}

.project{
  width:100% !important;
  max-width:520px !important;
}

.project video{
  width:100% !important;
  height:auto !important;
  aspect-ratio:16 / 9 !important;
  object-fit:cover !important;
  border-radius:16px !important;
}

.pricing-grid{
  align-items:stretch !important;
}

.pricing-card{
  display:flex !important;
  flex-direction:column !important;
  min-height:100% !important;
}

.pricing-card h3{
  color:var(--page-accent) !important;
  letter-spacing:.08em !important;
}

.pricing-card .price{
  color:#ffffff !important;
  -webkit-text-fill-color:#ffffff !important;
  margin-bottom:6px !important;
}

.pricing-rate{
  color:var(--page-accent) !important;
  font-weight:800 !important;
  margin:0 0 18px !important;
}

.pricing-features{
  display:grid !important;
  gap:10px !important;
  list-style:none !important;
  margin:18px 0 28px !important;
  padding:0 !important;
}

.pricing-features li{
  color:rgba(255,255,255,.74) !important;
  line-height:1.55 !important;
  padding-left:20px !important;
  position:relative !important;
}

.pricing-features li::before{
  content:"" !important;
  position:absolute !important;
  left:0 !important;
  top:.72em !important;
  width:7px !important;
  height:7px !important;
  border-radius:50% !important;
  background:linear-gradient(135deg,var(--page-accent),var(--page-accent-2)) !important;
  box-shadow:0 0 14px var(--page-accent-soft) !important;
}

.pricing-button{
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  width:100% !important;
  margin-top:auto !important;
  padding:14px 22px !important;
  border-radius:999px !important;
  text-decoration:none !important;
  font-weight:900 !important;
  color:#050505 !important;
  background:linear-gradient(135deg,var(--page-accent),var(--page-accent-2)) !important;
  box-shadow:0 16px 38px var(--page-accent-soft) !important;
  transition:transform .3s ease, box-shadow .3s ease, filter .3s ease !important;
}

.pricing-button:hover{
  transform:translateY(-4px) !important;
  filter:brightness(1.08) !important;
  box-shadow:0 22px 52px var(--page-accent-soft) !important;
}

.pricing-note{
  margin:-42px 6vw 74px !important;
  text-align:center !important;
  color:rgba(255,255,255,.68) !important;
  line-height:1.7 !important;
}

.pricing-note strong{
  color:#ffffff !important;
}

a,
button,
.btn,
.card,
.project,
.pricing-button,
.footer-cta,
.nav-cta{
  transition:
    color .28s ease,
    background .28s ease,
    background-color .28s ease,
    background-image .28s ease,
    border-color .28s ease,
    box-shadow .28s ease,
    filter .28s ease,
    opacity .28s ease,
    transform .28s ease !important;
}

a:active,
button:active,
.btn:active,
.pricing-button:active,
.footer-cta:active,
.nav-cta:active{
  transform:translateY(1px) scale(.99) !important;
}

@keyframes pageFadeIn{
  from{
    opacity:0;
    transform:translateY(10px);
  }
  to{
    opacity:1;
    transform:translateY(0);
  }
}

body.theme-baby .hero h1,
body.theme-baby .pricing-card h3,
body.theme-baby .pricing-rate{
  color:#8f003d !important;
  text-shadow:
    0 1px 0 rgba(255,255,255,.38),
    0 0 22px rgba(216,27,96,.18) !important;
}

body.theme-baby .pricing-card p,
body.theme-baby .pricing-features li,
body.theme-baby .pricing-note{
  color:#4f1230 !important;
}

body.theme-baby .pricing-card .pricing-rate{
  color:#8f003d !important;
}

body.theme-baby .pricing-card .price{
  color:#6f002f !important;
  -webkit-text-fill-color:#6f002f !important;
  text-shadow:0 1px 0 rgba(255,255,255,.45) !important;
}

body.theme-baby .pricing-features li::before{
  background:#9b0045 !important;
  box-shadow:0 0 12px rgba(155,0,69,.28) !important;
}

body.theme-baby .pricing-note strong{
  color:#8f003d !important;
}

body.theme-baby .pricing-button{
  color:#ffffff !important;
  background:linear-gradient(135deg,#b0004b,#ff4f93) !important;
  box-shadow:0 18px 42px rgba(216,27,96,.36) !important;
}

.site-footer{
  padding:70px 6vw 34px !important;
  text-align:left !important;
  background:rgba(0,0,0,.92) !important;
  border-top:1px solid rgba(255,255,255,.16) !important;
}

.footer-grid{
  display:grid !important;
  grid-template-columns:1.25fr .8fr 1fr 1fr !important;
  gap:48px !important;
  max-width:1180px !important;
  margin:0 auto !important;
}

.site-footer h2,
.site-footer h3{
  color:white !important;
  margin-bottom:18px !important;
}

.site-footer h2{
  color:#ffffff !important;
  font-size:1.5rem !important;
  letter-spacing:.08em !important;
}

.site-footer h3{
  font-size:1rem !important;
}

.site-footer p,
.site-footer a{
  color:rgba(255,255,255,.68) !important;
  line-height:1.75 !important;
}

.site-footer a{
  display:block !important;
  text-decoration:none !important;
  margin:9px 0 !important;
  transition:.25s ease !important;
}

.site-footer a:hover{
  color:#ffffff !important;
}

.footer-cta{
  display:inline-flex !important;
  color:#000000 !important;
  padding:12px 20px !important;
  margin-top:16px !important;
  margin-left:auto !important;
  margin-right:auto !important;
  text-align:center !important;
}

.site-footer .footer-cta{
  display:flex !important;
  width:max-content !important;
  color:#000000 !important;
  margin:16px auto 0 !important;
  text-align:center !important;
}

.site-footer .footer-cta:hover{
  color:#006dff !important;
}

.footer-bottom{
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:24px !important;
  max-width:1180px !important;
  margin:54px auto 0 !important;
  padding-top:26px !important;
  border-top:1px solid rgba(255,255,255,.08) !important;
}

.footer-bottom div{
  display:flex !important;
  gap:28px !important;
  flex-wrap:wrap !important;
}

@media(max-width:900px){
  .site-nav{
    align-items:flex-start !important;
    flex-wrap:wrap !important;
    padding:14px 5vw !important;
  }

  .nav-links{
    order:3 !important;
    width:100% !important;
    justify-content:flex-start !important;
    gap:14px 18px !important;
  }

  .projects-row{
    grid-template-columns:minmax(0,520px) !important;
  }

  .footer-grid{
    grid-template-columns:1fr 1fr !important;
  }

  .footer-bottom{
    align-items:flex-start !important;
    flex-direction:column !important;
  }
}

@media(max-width:560px){
  .nav-cta{
    padding:10px 16px !important;
  }

  .footer-grid{
    grid-template-columns:1fr !important;
  }
}
`;

const servicesTitle = `
<section class="section-title" id="services">
  <h2>Our Services</h2>
  <p>Choose the story you want to tell. Every service is shaped with cinematic pacing, clean emotion, and premium attention.</p>
</section>
`;

const about = `
<section class="about-section" id="about">
  <div class="about-inner">
    <h2>About Us</h2>
    <div class="about-copy">
      <p>At Editors For You, we believe editing is more than cuts, transitions, and effects.</p>
      <p>Every story deserves to be felt.</p>
      <p>Whether it's a transformation journey, a creator building their audience, an anniversary, a trip with friends, or a once-in-a-lifetime celebration, we turn moments into cinematic experiences people remember.</p>
      <p>We focus on emotion-driven storytelling, creating edits that don't just look good but connect, inspire, and leave an impact.</p>
      <p>From personal memories to content creators and brands, our goal stays the same:</p>
      <p>Create videos people watch till the end, and remember after it ends.</p>
      <p>At Editors For You, quality doesn't change with pricing. The difference is only in volume. Because every story deserves premium treatment.</p>
      <div class="about-services">
        <span>Transformation Stories</span>
        <span>Creator & Social Media Content</span>
        <span>Travel & Trip Films</span>
        <span>Anniversary Storytelling</span>
        <span>Baby Shower Memories</span>
        <span>Social Media Management</span>
      </div>
      <p>We don't edit videos.</p>
      <p>We create experiences.</p>
    </div>
    <div class="about-close">
      <strong>EDITORS FOR YOU</strong>
      <span>Turning moments into cinematic stories.</span>
    </div>
  </div>
</section>
`;

const pageTransitionScript = `
<script>
document.addEventListener("click", function (event) {
  var link = event.target.closest("a");
  if (!link || event.defaultPrevented) return;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (link.target && link.target !== "_self") return;

  var url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return;
  if (url.pathname === window.location.pathname && url.hash) return;

  event.preventDefault();
  document.body.classList.add("is-leaving");
  window.setTimeout(function () {
    window.location.href = url.href;
  }, 220);
});
</script>`;

function replaceNav(html) {
  return html.replace(/<nav[\s\S]*?<\/nav>/i, nav);
}

function replaceFooter(html) {
  if (/<footer[\s\S]*?<\/footer>/i.test(html)) {
    return html.replace(/<footer[\s\S]*?<\/footer>/i, footer);
  }
  return html.replace(/<\/body>/i, `${footer}\n</body>`);
}

function injectCss(html) {
  if (html.includes("SHARED SITE UPDATES")) {
    return html.replace(
      /\/\* ---------- SHARED SITE UPDATES ---------- \*\/[\s\S]*?(?=\n\/\* ---------- MOBILE MOTION OVERFLOW FIX ---------- \*\/|\n<\/style>)/,
      sharedCss.trim()
    );
  }
  return html.replace(/<\/style>/i, `${sharedCss}\n</style>`);
}

function setTheme(html, page) {
  const theme = pageThemes[page] || "theme-home";
  return html.replace(/<body([^>]*)>/i, (match, attrs) => {
    const cleanAttrs = attrs
      .replace(/\sclass=(["'])(?:(?!\1).)*\1/i, "")
      .replace(/\s+/g, " ")
      .trim();
    const suffix = cleanAttrs ? ` ${cleanAttrs}` : "";
    return `<body class="${theme}"${suffix}>`;
  });
}

function injectMobileMotionFix(html) {
  const fix = `

/* ---------- MOBILE MOTION OVERFLOW FIX ---------- */
@media(max-width:700px){
  .motion-layer{
    display:none !important;
    width:100vw !important;
    max-width:100vw !important;
    contain:layout paint !important;
  }

  .motion-track{
    display:none !important;
  }

  .hero::before{
    width:70vw !important;
    height:70vw !important;
  }
}
`;
  if (html.includes("MOBILE MOTION OVERFLOW FIX")) {
    return html.replace(/\/\* ---------- MOBILE MOTION OVERFLOW FIX ---------- \*\/[\s\S]*?(?=\n<\/style>)/, fix.trim());
  }
  return html.replace(/<\/style>/i, `${fix}\n</style>`);
}

function updateProjects(html) {
  html = html.replace(/<h2>\s*PROJECTS\s*<\/h2>/gi, "<h2>FEATURED PROJECTS</h2>");
  const projectBlocks = [...html.matchAll(/<div class="project">[\s\S]*?<\/div>/gi)];
  if (projectBlocks.length >= 3) {
    const third = projectBlocks[2][0];
    html = html.replace(third, "");
  }
  return html;
}

function pricingSection(group) {
  const cards = pricingPlans[group].map((plan) => `
<div class="card pricing-card">
  <h3>${plan.name}</h3>
  <div class="price">${plan.price}</div>
  <p class="pricing-rate">${plan.rate}</p>
  <ul class="pricing-features">
${plan.features.map((feature) => `    <li>${feature}</li>`).join("\n")}
  </ul>
  <a href="contact.html" class="pricing-button">Book Now</a>
</div>`).join("\n\n");

  return `<div class="grid pricing-grid">
${cards}
</div>

<p class="pricing-note">
  <strong>Same premium editing quality across all plans.</strong><br>
  Longer projects receive discounted pricing.
</p>

`;
}

function updatePricing(html, page) {
  const group = pricingGroups[page];
  if (!group) return html;
  return html.replace(
    /<div class="grid(?:\s+pricing-grid)?">[\s\S]*?(?=\s*<footer class="site-footer">)/i,
    pricingSection(group)
  );
}

function updateHome(html) {
  if (!html.includes('class="section-title" id="services"')) {
    html = html.replace(/<div\s+class="grid"\s+id="services"\s*>/i, `${servicesTitle}\n<div class="grid">`);
  }
  if (!html.includes('class="about-section" id="about"')) {
    html = html.replace(/<\/div>\s*(?=<footer)/i, `</div>\n\n${about}\n`);
  }
  return html;
}

function injectPageTransitionScript(html) {
  html = html.replace(/\n?<script>\s*document\.addEventListener\("click"[\s\S]*?<\/script>/i, "");
  return html.replace(/<\/body>/i, `${pageTransitionScript}\n</body>`);
}

for (const page of pages) {
  const file = path.join(root, page);
  let html = fs.readFileSync(file, "utf8");
  html = setTheme(html, page);
  html = injectCss(html);
  html = injectMobileMotionFix(html);
  if (/<nav[\s\S]*?<\/nav>/i.test(html)) {
    html = replaceNav(html);
  } else {
    html = html.replace(/<body[^>]*>/i, (match) => `${match}\n${nav}`);
  }
  html = replaceFooter(html);
  if (page === "index.html") {
    html = updateHome(html);
  } else if (!["contact.html", "thankyou.html"].includes(page)) {
    html = updateProjects(html);
    html = updatePricing(html, page);
  }
  html = injectPageTransitionScript(html);
  fs.writeFileSync(file, html, "utf8");
}

console.log(`Updated ${pages.length} HTML files in ${root}`);
