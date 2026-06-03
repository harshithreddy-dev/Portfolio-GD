export type ProjectCategory =
  | "Logos"
  | "Event Banners"
  | "Invitations"
  | "Posters";

export type PortfolioProject = {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  brief: string;
  image: string;
  palette: string[];
};

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  "Logos",
  "Event Banners",
  "Invitations",
  "Posters"
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "art-house-logo",
    title: "Art House Logo",
    category: "Logos",
    year: "2026",
    brief: "A polished logo concept with a clean creative identity and memorable mark.",
    image: "/projects/logos/ART%20HOUSE%20LOGO.png",
    palette: ["#E08040", "#8040E0", "#E0C040", "#404040"]
  },
  {
    id: "peak-pulse-logo",
    title: "Peak Pulse Logo",
    category: "Logos",
    year: "2026",
    brief: "Bold logo design crafted for a high-energy modern brand presence.",
    image: "/projects/logos/PEAK%20PULSE.png",
    palette: ["#A0A0A0", "#C0C0C0", "#E0E0E0", "#808080"]
  },
  {
    id: "the-hydra-logo",
    title: "The Hydra Logo",
    category: "Logos",
    year: "2026",
    brief: "A strong emblem-style logo with character, contrast, and brand attitude.",
    image: "/projects/logos/THE%20HYDRA%20LOGO.png",
    palette: ["#E00000", "#C00000", "#400000", "#200000"]
  },
  {
    id: "the-codes-logo",
    title: "The Codes Logo",
    category: "Logos",
    year: "2026",
    brief: "Tech-focused logo direction designed for clarity, identity, and recall.",
    image: "/projects/logos/THE%20CODES%20LOGO.png",
    palette: ["#E0C060", "#E04020", "#C0A040", "#C0C0C0"]
  },
  {
    id: "vedic-vox-logo",
    title: "Vedic Vox Logo",
    category: "Logos",
    year: "2026",
    brief: "A distinctive identity concept balancing cultural feel with modern polish.",
    image: "/projects/logos/VEDIC%20VOX%20LOGO.png",
    palette: ["#E0E000", "#E0E060", "#C0C0C0", "#E0E0E0"]
  },
  {
    id: "yuga-spark-logo",
    title: "Yuga Spark Logo",
    category: "Logos",
    year: "2026",
    brief: "A vibrant logo concept made to feel youthful, energetic, and memorable.",
    image: "/projects/logos/YUGA%20SPARK%20LOGO.png",
    palette: ["#E0C020", "#E0E0C0", "#E0E0E0", "#E0E0A0"]
  },
  {
    id: "cse-data-science-banner",
    title: "CSE Data Science Banner",
    category: "Event Banners",
    year: "2026",
    brief: "Event banner design created for strong visibility, structure, and audience impact.",
    image: "/projects/Event%20Banners/Copy%20of%20CSE(DATA%20SCIENCE).png",
    palette: ["#000020", "#E0E0E0", "#002040", "#606080"]
  },
  {
    id: "freshers-party-banner",
    title: "Freshers Party Banner",
    category: "Event Banners",
    year: "2026",
    brief: "A celebratory event creative designed to feel energetic, welcoming, and social-ready.",
    image: "/projects/Event%20Banners/Copy%20of%20Copy%20of%20Fresher%20s%20Party.png",
    palette: ["#200000", "#402000", "#604020", "#404020"]
  },
  {
    id: "advitiya-drop-banner",
    title: "Advitiya Drop Banner",
    category: "Event Banners",
    year: "2026",
    brief: "A bold drop banner designed with strong event presence, rich colors, and print-ready impact.",
    image: "/projects/Event%20Banners/ADVITIYA-DROP%20BANNER.png",
    palette: ["#C00000", "#A00000", "#C0A000", "#800000", "#C08000"]
  },
  {
    id: "advitiyan-invitation",
    title: "Advitiyan Invitation",
    category: "Invitations",
    year: "2026",
    brief: "Invitation design with a clean event layout and refined visual presentation.",
    image: "/projects/Invitations/Advitiyan's%20Invitation.png",
    palette: ["#E0C000", "#C0A000", "#C0C0C0", "#E0E0E0"]
  },
  {
    id: "engineers-day-invitation",
    title: "Engineers Day Invitation",
    category: "Invitations",
    year: "2026",
    brief: "Professional invitation creative designed for clear communication and visual appeal.",
    image: "/projects/Invitations/Engineers_day%20Invitation.png",
    palette: ["#A080C0", "#404040", "#202020", "#E0E040"]
  },
  {
    id: "clubs-brief-poster",
    title: "Clubs Brief Poster",
    category: "Posters",
    year: "2026",
    brief: "Poster design focused on hierarchy, readability, and strong event presence.",
    image: "/projects/Posters/Clubs%20Breif.png",
    palette: ["#E0C020", "#E0E0E0", "#E0C000", "#C0C0C0"]
  },
  {
    id: "rgm-anniversary-poster",
    title: "RGM Anniversary Poster",
    category: "Posters",
    year: "2026",
    brief: "Anniversary poster creative with a polished layout and occasion-focused design.",
    image: "/projects/Posters/RGM%20Anniversary.png",
    palette: ["#E0C020", "#E0E0E0", "#202020", "#002020"]
  }
];

export const services = [
  "Logo Design",
  "Event Banners",
  "Invitation Design",
  "Drop Banners",
  "Posters",
  "Social Media Creatives",
  "Marketing Materials",
  "Brand Identity Design"
];

export const tools = ["Adobe Photoshop", "Adobe Illustrator", "Canva", "Figma", "Lightroom"];
