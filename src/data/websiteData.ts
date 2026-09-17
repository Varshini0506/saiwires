// High-resolution real-world fencing photographs
export const FENCING_IMAGES = {
  // Hero & cinematic full-width
  heroBackground: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg",
  cinematicBoundary: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg",
  finalCta: "/images/fencing/7594a0cd-85e0-4b8f-9773-a919d912bd5d.jpg",

  // See The Difference Collage
  differenceMain: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg", // RCC Posts & heavy wire
  differenceThumb1: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg", // Farm fencing
  differenceThumb2: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg", // Plot fencing
  differenceThumb3: "/images/fencing/27246645-baa5-4ffa-886a-55c081fb3862.jpg", // Chain link

  // Before & After
  beforeLand: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg",
  afterLand: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg",

  // Why Choose Us main backdrop
  whyChooseMain: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg",
  
  // Contact section photo
  contactPhoto: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg",
};

export interface SolutionItem {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  tag: string;
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "kambi-veli",
    name: "Kambi Veli (கம்பி வேலி)",
    subtitle: "Agricultural and open-land boundary fencing with concrete/stone posts.",
    image: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg",
    tag: "Most Popular",
  },
  {
    id: "chain-link",
    name: "Chain Link",
    subtitle: "Strong mesh fencing for properties, layout plots and farms.",
    image: "/images/fencing/27246645-baa5-4ffa-886a-55c081fb3862.jpg",
    tag: "High Visibility",
  },
  {
    id: "barbed-wire",
    name: "Barbed Wire",
    subtitle: "Practical boundary protection for large acreage & farmlands.",
    image: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg",
    tag: "Cost Effective",
  },
  {
    id: "gi-wire",
    name: "GI Wire Fencing",
    subtitle: "Durable hot-dip galvanized wire fencing solutions.",
    image: "/images/fencing/863c164a-634e-49da-992e-c370b4b4f47c.jpg",
    tag: "Rust Proof",
  },
  {
    id: "rcc-post",
    name: "RCC Post Fencing",
    subtitle: "Precast steel-reinforced concrete posts with reliable wire tension.",
    image: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg",
    tag: "25+ Yrs Lifespan",
  },
  {
    id: "farm-fencing",
    name: "Farm Fencing",
    subtitle: "Suitable for agricultural crops, coconut groves & plantations.",
    image: "/images/fencing/7594a0cd-85e0-4b8f-9773-a919d912bd5d.jpg",
    tag: "Crop Protection",
  },
  {
    id: "plot-fencing",
    name: "Plot Fencing",
    subtitle: "Protect open plots & property boundaries from encroachment.",
    image: "/images/fencing/824e623a-364a-4c13-bea7-5b5545887915.jpg",
    tag: "No Encroachment",
  },
  {
    id: "residential-fencing",
    name: "Residential Fencing",
    subtitle: "Secure home boundaries and private estate grounds.",
    image: "/images/fencing/cdad0cfe-d17b-4602-a9e6-a541596b5344.jpg",
    tag: "Clean Finish",
  },
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "AGRICULTURAL" | "CHAIN LINK" | "BOUNDARY" | "FARM" | "RCC POSTS" | "INSTALLATION";
  aspect: "landscape" | "portrait" | "wide" | "square";
  image: string;
  location: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "g-1",
    title: "Agricultural Land RCC Post Kambi Veli",
    category: "AGRICULTURAL",
    aspect: "wide",
    image: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg",
    location: "Therpathai / Farmland",
  },
  {
    id: "g-2",
    title: "Heavy-Gauge GI Chain Link Mesh",
    category: "CHAIN LINK",
    aspect: "portrait",
    image: "/images/fencing/27246645-baa5-4ffa-886a-55c081fb3862.jpg",
    location: "Erode / Gobichettipalayam Farm",
  },
  {
    id: "g-3",
    title: "Reinforced Corner Strut & Painted RCC Posts",
    category: "RCC POSTS",
    aspect: "landscape",
    image: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg",
    location: "Tiruppur / Avinashi Highway Plot",
  },
  {
    id: "g-4",
    title: "Field Perimeter Protection",
    category: "AGRICULTURAL",
    aspect: "wide",
    image: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg",
    location: "Dharapuram / Udumalpet Acreage",
  },
  {
    id: "g-5",
    title: "Heavy-Duty Precast Compound Netting",
    category: "FARM",
    aspect: "landscape",
    image: "/images/fencing/7594a0cd-85e0-4b8f-9773-a919d912bd5d.jpg",
    location: "Salem / Namakkal Farm Perimeter",
  },
  {
    id: "g-6",
    title: "Farmstead Land Boundary Demarcation",
    category: "BOUNDARY",
    aspect: "landscape",
    image: "/images/fencing/824e623a-364a-4c13-bea7-5b5545887915.jpg",
    location: "Pollachi / Coimbatore Farmland",
  },
  {
    id: "g-7",
    title: "Concrete Pillar Ground Anchor Setting",
    category: "RCC POSTS",
    aspect: "square",
    image: "/images/fencing/8e87a9a9-26a5-4b18-958a-5d9f55ee45ca.jpg",
    location: "Kangeyam Region",
  },
  {
    id: "g-8",
    title: "Open Plot & Commercial Boundary Protection",
    category: "FARM",
    aspect: "wide",
    image: "/images/fencing/92128bbf-4025-409e-a580-a75b547ab329.jpg",
    location: "Perundurai / Erode",
  },
  {
    id: "g-9",
    title: "Galvanized GI Diamond Mesh Fence",
    category: "CHAIN LINK",
    aspect: "portrait",
    image: "/images/fencing/863c164a-634e-49da-992e-c370b4b4f47c.jpg",
    location: "Sulur / Coimbatore",
  },
  {
    id: "g-10",
    title: "Turnkey Completed Farm Fencing Handover",
    category: "BOUNDARY",
    aspect: "landscape",
    image: "/images/fencing/eae3ec64-e9d1-4b1c-acf5-11e8b7dfe064.jpg",
    location: "Udumalaipettai",
  }
];

export const SERVICE_LOCATIONS_LIST = [
  "Coimbatore",
  "Erode",
  "Tiruppur",
  "Salem",
  "Namakkal",
  "Karur",
  "Bhavani",
  "Gobichettipalayam",
  "Sathyamangalam",
  "Perundurai",
];

export const REVIEWS_DATA = [
  {
    id: "rev-1",
    quote: "Excellent fencing work for our agricultural land in Pollachi. Strong RCC posts and tightly stretched GI wire.",
    author: "R. Palanisamy",
    role: "Coconut Farm Owner",
    location: "Coimbatore Dist.",
  },
  {
    id: "rev-2",
    quote: "Good finishing and professional installation. Completed 2,400 feet within 4 days on schedule.",
    author: "K. Mohanraj",
    role: "Property Investor",
    location: "Erode / Perundurai",
  },
  {
    id: "rev-3",
    quote: "Very satisfied with the fencing quality. Clear quotation with zero hidden charges. Highly recommended.",
    author: "V. Soundararajan",
    role: "Agro Farm Enterprise",
    location: "Gobichettipalayam",
  },
];

export const FAQS_COMPACT = [
  {
    id: "f-1",
    q: "What types of Kambi Veli do you provide?",
    a: "We provide high-tensile GI barbed wire, diamond mesh chain-link, precast RCC post fencing, farm knot mesh, and custom gate integrations.",
  },
  {
    id: "f-2",
    q: "Do you provide farm fencing for large agricultural land?",
    a: "Yes! We specialize in vast agricultural parcels from 1 acre up to 50+ acres with heavy-duty post setting and anti-wild animal protection.",
  },
  {
    id: "f-3",
    q: "Do you provide on-site measurement and site visits?",
    a: "Yes, our technical team visits your property across Tamil Nadu to verify boundary markers, evaluate terrain, and calculate exact running feet.",
  },
  {
    id: "f-4",
    q: "How is the fencing quotation calculated?",
    a: "Quotations are calculated transparently based on total running feet, fence height, post type (RCC concrete vs stone), wire gauge, and corner anchors.",
  },
  {
    id: "f-5",
    q: "How long does fencing installation take?",
    a: "Standard parcels of 1,000 to 2,500 running feet are typically completed within 3 to 5 working days.",
  },
];
