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
 * Real fencing portfolio images uploaded by the company.
 * Clean paths stored under /images/fencing/
 */
export const FENCING_PORTFOLIO_IMAGES: FencingImageItem[] = [
  {
    id: "fence-img-1",
    src: "/images/fencing/fence-rcc-farmland.jpg",
    title: "Agricultural Land RCC Post Kambi Veli",
    category: "Farm Fencing",
    label: "Farm Fencing",
    description: "Heavy-duty precast RCC concrete posts with tensioned GI wire fencing along red soil farm boundary.",
    aspectRatio: "landscape",
    tags: ["RCC Posts", "Agricultural", "Red Soil Farm", "GI Mesh"],
    location: "Pollachi / Coimbatore Farmland",
    highlight: "Precast Concrete Posts"
  },
  {
    id: "fence-img-2",
    src: "/images/fencing/fence-chainlink-closeup.jpg",
    title: "Heavy-Gauge GI Chain Link Mesh Fencing",
    category: "Chain Link",
    label: "Chain Link",
    description: "High tensile hot-dip galvanized wire mesh installed on durable steel/concrete support posts.",
    aspectRatio: "portrait",
    tags: ["Chain Link", "GI Wire", "Plantation Border", "Rust Resistant"],
    location: "Erode / Gobichettipalayam Farm",
    highlight: "Heavy Gauge Galvanized"
  },
  {
    id: "fence-img-3",
    src: "/images/fencing/fence-corner-strut.png",
    title: "Reinforced Corner Strut & Painted RCC Posts",
    category: "RCC Posts",
    label: "Boundary Fencing",
    description: "Engineered A-frame corner bracing strut posts with painted concrete pillars and tight wire mesh for maximum stability.",
    aspectRatio: "landscape",
    tags: ["Corner Strut", "RCC Posts", "Commercial Plot", "Boundary Stability"],
    location: "Tiruppur / Avinashi Highway Plot",
    highlight: "Reinforced Corner Struts"
  },
  {
    id: "fence-img-4",
    src: "/images/fencing/fence-agriculture-slope.jpg",
    title: "Slope Terrain Agricultural Perimeter Fencing",
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
    src: "/images/fencing/fence-pvc-coated-farm.png",
    title: "PVC-Coated Blue GI Chain Link Crop Protection",
    category: "Farm Fencing",
    label: "Farm Fencing",
    description: "Weather-proof blue coated GI wire mesh with heavy concrete posts for vegetable fields and orchards.",
    aspectRatio: "landscape",
    tags: ["PVC Coated", "Crop Protection", "Vegetable Farm", "Zero Rust"],
    location: "Salem / Namakkal Farm Perimeter",
    highlight: "Weather Resistant PVC Coat"
  }
];

// Helper subsets for specialized layout views
export const HERO_SLIDES = FENCING_PORTFOLIO_IMAGES;

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
    image: FENCING_PORTFOLIO_IMAGES[0].src,
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
