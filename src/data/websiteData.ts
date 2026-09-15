// High-resolution real-world curated fencing photographs
export const FENCING_IMAGES = {
  // Hero & cinematic full-width
  heroBackground: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=85",
  cinematicBoundary: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=2000&q=85",
  finalCta: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=85",

  // See The Difference Collage
  differenceMain: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1200&q=85", // RCC Posts & heavy wire
  differenceThumb1: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=600&q=80", // Farm fencing
  differenceThumb2: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80", // Plot fencing
  differenceThumb3: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80", // Chain link

  // Before & After
  beforeLand: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  afterLand: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",

  // Why Choose Us main backdrop
  whyChooseMain: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1200&q=85",
  
  // Contact section photo
  contactPhoto: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1000&q=85",
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
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    tag: "Most Popular",
  },
  {
    id: "chain-link",
    name: "Chain Link",
    subtitle: "Strong mesh fencing for properties, layout plots and farms.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    tag: "High Visibility",
  },
  {
    id: "barbed-wire",
    name: "Barbed Wire",
    subtitle: "Practical boundary protection for large acreage & farmlands.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80",
    tag: "Cost Effective",
  },
  {
    id: "gi-wire",
    name: "GI Wire Fencing",
    subtitle: "Durable hot-dip galvanized wire fencing solutions.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
    tag: "Rust Proof",
  },
  {
    id: "rcc-post",
    name: "RCC Post Fencing",
    subtitle: "Precast steel-reinforced concrete posts with reliable wire tension.",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
    tag: "25+ Yrs Lifespan",
  },
  {
    id: "farm-fencing",
    name: "Farm Fencing",
    subtitle: "Suitable for agricultural crops, coconut groves & plantations.",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80",
    tag: "Crop Protection",
  },
  {
    id: "plot-fencing",
    name: "Plot Fencing",
    subtitle: "Protect open plots & property boundaries from encroachment.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    tag: "No Encroachment",
  },
  {
    id: "residential-fencing",
    name: "Residential Fencing",
    subtitle: "Secure home boundaries and private estate grounds.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
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
    title: "Agricultural Land Kambi Veli",
    category: "AGRICULTURAL",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    location: "Pollachi, Coimbatore",
  },
  {
    id: "g-2",
    title: "Coconut Farm Boundary Posts",
    category: "FARM",
    aspect: "portrait",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=85",
    location: "Gobichettipalayam",
  },
  {
    id: "g-3",
    title: "Heavy-Gauge Chain-Link Fence",
    category: "CHAIN LINK",
    aspect: "portrait",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=85",
    location: "Avinashi Road",
  },
  {
    id: "g-4",
    title: "7-Strand Barbed Wire Fence",
    category: "BOUNDARY",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=85",
    location: "Dharapuram",
  },
  {
    id: "g-5",
    title: "Reinforced RCC Concrete Posts",
    category: "RCC POSTS",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1000&q=85",
    location: "Erode Highway",
  },
  {
    id: "g-6",
    title: "High-Tensile GI Wire Fence",
    category: "AGRICULTURAL",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=85",
    location: "Sathyamangalam",
  },
  {
    id: "g-7",
    title: "Large Land Boundary Fencing",
    category: "BOUNDARY",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=85",
    location: "Kangeyam",
  },
  {
    id: "g-8",
    title: "Small Plot Encroachment Protection",
    category: "BOUNDARY",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85",
    location: "Perundurai",
  },
  {
    id: "g-9",
    title: "Residential Property Perimeter",
    category: "CHAIN LINK",
    aspect: "portrait",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=85",
    location: "Sulur",
  },
  {
    id: "g-10",
    title: "Industrial & Solar Yard Boundary",
    category: "BOUNDARY",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    location: "Salem SIDCO",
  },
  {
    id: "g-11",
    title: "Corner Strut Post Foundation",
    category: "RCC POSTS",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=85",
    location: "Tiruchengode",
  },
  {
    id: "g-12",
    title: "Roadside Land Demarcation",
    category: "AGRICULTURAL",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=85",
    location: "Bhavani Outer",
  },
  {
    id: "g-13",
    title: "Long-Distance Hillside Field Fencing",
    category: "FARM",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85",
    location: "Mettupalayam",
  },
  {
    id: "g-14",
    title: "Close-up: GI Wire & Precast Concrete Posts",
    category: "RCC POSTS",
    aspect: "portrait",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=85",
    location: "Anthiyur",
  },
  {
    id: "g-15",
    title: "Completed Farm Perimeter Handover",
    category: "FARM",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=1000&q=85",
    location: "Namakkal",
  },
  {
    id: "g-16",
    title: "Workers Installing Wire & Setting Posts",
    category: "INSTALLATION",
    aspect: "landscape",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=85",
    location: "Site Team at Work",
  },
  {
    id: "g-17",
    title: "Cattle & Farmstead Paddock Enclosure",
    category: "FARM",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=85",
    location: "Udumalaipettai",
  },
  {
    id: "g-18",
    title: "Vast Estate Perimeter Kambi Veli",
    category: "AGRICULTURAL",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    location: "Karur Region",
  },
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
