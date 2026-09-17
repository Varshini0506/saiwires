export interface FencingImageItem {
  id: string;
  src: string;
  title: string;
  category: 'Kambi Veli' | 'Chain Link' | 'Farm Fencing' | 'Boundary Fencing' | 'RCC Posts' | 'All';
  label: string;
  description: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide' | 'panoramic';
  tags: string[];
  location?: string;
  highlight?: string;
}

/**
 * Real fencing portfolio images uploaded by the customer in public/images/fencing/
 */
export const FENCING_PORTFOLIO_IMAGES: FencingImageItem[] = [
  {
    id: "fence-img-1",
    src: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg",
    title: "Agricultural Land RCC Post Kambi Veli",
    category: "Farm Fencing",
    label: "Farm Fencing",
    description: "Heavy-duty precast RCC concrete posts with tensioned GI wire fencing along farm boundary.",
    aspectRatio: "landscape",
    tags: ["RCC Posts", "Agricultural", "Farmland", "GI Mesh"],
    location: "Therpathai / Farmland",
    highlight: "Precast Concrete Posts"
  },
  {
    id: "fence-img-2",
    src: "/images/fencing/27246645-baa5-4ffa-886a-55c081fb3862.jpg",
    title: "Heavy-Gauge GI Chain Link Mesh Fencing",
    category: "Chain Link",
    label: "Chain Link",
    description: "High tensile hot-dip galvanized wire mesh installed on durable steel and concrete support posts.",
    aspectRatio: "portrait",
    tags: ["Chain Link", "GI Wire", "Plantation Border", "Rust Resistant"],
    location: "Gobichettipalayam Farm",
    highlight: "Heavy Gauge Galvanized"
  },
  {
    id: "fence-img-3",
    src: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg",
    title: "Reinforced Corner Strut & Concrete Pillars",
    category: "RCC Posts",
    label: "Boundary Fencing",
    description: "Engineered A-frame corner bracing strut posts with painted pillars and tight wire mesh.",
    aspectRatio: "landscape",
    tags: ["Corner Strut", "RCC Posts", "Commercial Plot", "Boundary Stability"],
    location: "Tiruppur / Avinashi Highway Plot",
    highlight: "Reinforced Corner Struts"
  },
  {
    id: "fence-img-4",
    src: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg",
    title: "Agricultural Field Perimeter Protection",
    category: "Kambi Veli",
    label: "Kambi Veli",
    description: "Full length agricultural land boundary protection across varying soil elevation and natural terrain.",
    aspectRatio: "wide",
    tags: ["Kambi Veli", "Sloped Land", "Acreage Boundary", "Crop Security"],
    location: "Dharapuram / Udumalpet Acreage",
    highlight: "Terrain-Adaptive Installation"
  },
  {
    id: "fence-img-5",
    src: "/images/fencing/7594a0cd-85e0-4b8f-9773-a919d912bd5d.jpg",
    title: "Heavy-Duty Precast Compound Netting",
    category: "Farm Fencing",
    label: "Farm Fencing",
    description: "Weather-proof galvanized wire mesh with heavy concrete posts for crops and orchards.",
    aspectRatio: "landscape",
    tags: ["GI Wire Mesh", "Crop Protection", "Vegetable Farm", "Zero Rust"],
    location: "Salem / Namakkal Farm Perimeter",
    highlight: "Weather Resistant"
  },
  {
    id: "fence-img-6",
    src: "/images/fencing/824e623a-364a-4c13-bea7-5b5545887915.jpg",
    title: "Farmstead Land Boundary Demarcation",
    category: "Boundary Fencing",
    label: "Boundary Fencing",
    description: "High security perimeter demarcation with concrete posts and multi-strand wire tension.",
    aspectRatio: "landscape",
    tags: ["Boundary", "Land Protection", "Secure Plot"],
    location: "Pollachi / Coimbatore",
    highlight: "Precision Alignment"
  },
  {
    id: "fence-img-7",
    src: "/images/fencing/863c164a-634e-49da-992e-c370b4b4f47c.jpg",
    title: "Durable GI Wire Mesh Fencing",
    category: "Chain Link",
    label: "Chain Link",
    description: "Galvanized interlocking wire mesh offering maximum visibility and security.",
    aspectRatio: "portrait",
    tags: ["Chain Link", "GI Wire", "Anti-Intrusion"],
    location: "Erode Dist.",
    highlight: "Anti-Rust Coating"
  },
  {
    id: "fence-img-8",
    src: "/images/fencing/8e87a9a9-26a5-4b18-958a-5d9f55ee45ca.jpg",
    title: "Concrete Pillar Ground Anchor Setting",
    category: "RCC Posts",
    label: "RCC Posts",
    description: "Deep foundation pit setting and firm corner anchoring for permanent boundaries.",
    aspectRatio: "square",
    tags: ["RCC Posts", "Foundation", "Heavy Duty"],
    location: "Kangeyam Region",
    highlight: "Solid Base"
  },
  {
    id: "fence-img-9",
    src: "/images/fencing/92128bbf-4025-409e-a580-a75b547ab329.jpg",
    title: "Open Plot & Commercial Boundary Protection",
    category: "Kambi Veli",
    label: "Kambi Veli",
    description: "Protection for open plots and commercial land preventing unauthorized encroachment.",
    aspectRatio: "wide",
    tags: ["Kambi Veli", "Plot Protection", "Encroachment Free"],
    location: "Perundurai / Erode",
    highlight: "Encroachment Free"
  },
  {
    id: "fence-img-10",
    src: "/images/fencing/bc9a5a9f-b97a-47b2-b8ca-2acc7aa3f3b8.jpg",
    title: "High-Tensile Farmland Boundary Fencing",
    category: "Farm Fencing",
    label: "Farm Fencing",
    description: "Tightly tensioned GI wire strands protecting coconut and agricultural groves.",
    aspectRatio: "landscape",
    tags: ["Farm Fencing", "High Tensile", "Coconut Farm"],
    location: "Sulur / Coimbatore",
    highlight: "Zero Sagging"
  },
  {
    id: "fence-img-11",
    src: "/images/fencing/cdad0cfe-d17b-4602-a9e6-a541596b5344.jpg",
    title: "Commercial Layout & Roadside Fencing",
    category: "Boundary Fencing",
    label: "Boundary Fencing",
    description: "Neat line demarcation for highway and layout perimeters with reinforced posts.",
    aspectRatio: "landscape",
    tags: ["Roadside", "Layout", "Demarcation"],
    location: "Salem Bypass Road",
    highlight: "Clear Visibility"
  },
  {
    id: "fence-img-12",
    src: "/images/fencing/eae3ec64-e9d1-4b1c-acf5-11e8b7dfe064.jpg",
    title: "Turnkey Completed Farm Fencing Handover",
    category: "Farm Fencing",
    label: "Farm Fencing",
    description: "Fully completed and tensioned boundary handover for large acreage property.",
    aspectRatio: "wide",
    tags: ["Turnkey", "Completed Project", "Secure"],
    location: "Udumalaipettai",
    highlight: "Turnkey Finish"
  }
];

// Helper subsets for specialized layout views
export const HERO_SLIDES = FENCING_PORTFOLIO_IMAGES.slice(0, 5);

export const VISUAL_INTRO_IMAGES = {
  featured: FENCING_PORTFOLIO_IMAGES[0],
  secondaryTop: FENCING_PORTFOLIO_IMAGES[1],
  secondaryBottom: FENCING_PORTFOLIO_IMAGES[2]
};

export const SERVICES_LIST = [
  {
    id: "kambi-veli",
    name: "Kambi Veli",
    tagline: "கம்பி வேலி",
    description: "Wire mesh fencing for agricultural land and properties.",
    image: FENCING_PORTFOLIO_IMAGES[3].src,
    badge: "Most Popular",
    benefits: ["Tight tensioning", "Long-term security", "Prevents stray cattle"]
  },
  {
    id: "chain-link",
    name: "Chain Link Fencing",
    tagline: "செயின் லிங்க் வேலி",
    description: "Strong mesh fencing for farms and plots.",
    image: FENCING_PORTFOLIO_IMAGES[1].src,
    badge: "High Strength",
    benefits: ["Hot-dip GI wire", "Custom mesh sizes", "Zero sagging"]
  },
  {
    id: "barbed-wire",
    name: "Barbed Wire Fencing",
    tagline: "முள் கம்பி வேலி",
    description: "Practical boundary fencing for large areas.",
    image: FENCING_PORTFOLIO_IMAGES[0].src,
    badge: "Cost-Effective",
    benefits: ["3 to 7 line strands", "High security", "Fast installation"]
  },
  {
    id: "rcc-post",
    name: "RCC Post Fencing",
    tagline: "RCC கான்கிரீட் தூண் வேலி",
    description: "Concrete posts with durable wire fencing.",
    image: FENCING_PORTFOLIO_IMAGES[2].src,
    badge: "25+ Yrs Lifespan",
    benefits: ["Steel reinforced", "Weatherproof", "Rigid corner struts"]
  },
  {
    id: "farm-fence",
    name: "Farm Fencing",
    tagline: "விவசாய நில வேலி",
    description: "Protection for agricultural and plantation land.",
    image: FENCING_PORTFOLIO_IMAGES[4].src,
    badge: "Crop Safety",
    benefits: ["Wild boar protection", "Livestock enclosure", "Estate boundary"]
  },
  {
    id: "plot-fence",
    name: "Plot Fencing",
    tagline: "மனை & காலி நில வேலி",
    description: "Secure open plots and property boundaries.",
    image: FENCING_PORTFOLIO_IMAGES[5].src,
    badge: "Encroachment Free",
    benefits: ["Legal boundary marking", "Visible ownership", "Low maintenance"]
  }
];

export const EDITORIAL_SHOWCASE = {
  hero: FENCING_PORTFOLIO_IMAGES[0],
  sideTop: FENCING_PORTFOLIO_IMAGES[1],
  sideBottom: FENCING_PORTFOLIO_IMAGES[2],
  wideBottom: FENCING_PORTFOLIO_IMAGES[3],
  featuredPvc: FENCING_PORTFOLIO_IMAGES[4]
};

export const CTA_BANNER_IMAGE = FENCING_PORTFOLIO_IMAGES[3].src;
export const CONTACT_BANNER_IMAGE = FENCING_PORTFOLIO_IMAGES[0].src;
export const ABOUT_BANNER_IMAGE = FENCING_PORTFOLIO_IMAGES[2].src;
