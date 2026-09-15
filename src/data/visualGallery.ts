export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  badge?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  location: string;
  size: string;
  type: string;
  image: string;
  spanClass?: string; // for masonry/bento proportion
}

export const WORK_GALLERY: GalleryItem[] = [
  {
    id: "work-1",
    title: "Agricultural Land Kambi Veli",
    category: "Farmland",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80",
    badge: "Most Requested"
  },
  {
    id: "work-2",
    title: "Coconut Grove Farm Fencing",
    category: "Farm",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=1000&q=80",
    badge: "Heavy GI Wire"
  },
  {
    id: "work-3",
    title: "Heavy-Gauge Chain Link Fencing",
    category: "Chain Link",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-4",
    title: "7-Strand Barbed Wire Fence",
    category: "Barbed Wire",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1000&q=80",
    badge: "Budget Friendly"
  },
  {
    id: "work-5",
    title: "Reinforced RCC Post Fencing",
    category: "RCC Posts",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=1000&q=80",
    badge: "25+ Yrs Life"
  },
  {
    id: "work-6",
    title: "Open Plot & Layout Boundary",
    category: "Plot Boundary",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-7",
    title: "Coconut Farm Perimeter Kambi Veli",
    category: "Coconut Farm",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-8",
    title: "Vegetable & Horticulture Farm Fence",
    category: "Crop Safety",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-9",
    title: "Large Acreage Field Fencing",
    category: "Vast Acreage",
    image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-10",
    title: "Residential Plot Demarcation",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-11",
    title: "Roadside Land Boundary Wire",
    category: "Roadside",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-12",
    title: "Cattle & Livestock Enclosure",
    category: "Livestock",
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-13",
    title: "High-Tensile Boundary Wire",
    category: "Boundary Protection",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-14",
    title: "Heavy Corner Strut Support Post",
    category: "Corner Posts",
    image: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-15",
    title: "Long Distance Highway Field Fencing",
    category: "Long Distance",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-16",
    title: "Close-up: GI Wire & Precast Concrete Posts",
    category: "Material Detail",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-17",
    title: "Completed Farm Perimeter Handover",
    category: "Completed Project",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "work-18",
    title: "Expert Workers Installing Wire & Posts",
    category: "Installation Work",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
  }
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "feat-1",
    title: "15-Acre Farm Kambi Veli",
    location: "Pollachi, Coimbatore",
    size: "4,500 Running Feet",
    type: "RCC Posts + 7-Line Barbed Wire",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    spanClass: "span-wide"
  },
  {
    id: "feat-2",
    title: "Coconut Estate Boundary Mesh",
    location: "Gobichettipalayam, Erode",
    size: "2,200 Running Feet",
    type: "Heavy GI Chain Link",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=85",
    spanClass: "span-portrait"
  },
  {
    id: "feat-3",
    title: "Residential Layout Plot Fencing",
    location: "Avinashi Road, Tiruppur",
    size: "3,100 Running Feet",
    type: "Precast Concrete Posts + Mesh",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=85",
    spanClass: "span-portrait"
  },
  {
    id: "feat-4",
    title: "Orchard Wild Animal Protection",
    location: "Bhavani / Anthiyur",
    size: "2,800 Running Feet",
    type: "RCC Post + Farm Knot Mesh",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=85",
    spanClass: "span-standard"
  },
  {
    id: "feat-5",
    title: "Highway Commercial Land Demarcation",
    location: "Salem Bypass Road",
    size: "1,800 Running Feet",
    type: "High-Tensile Wire & Steel Gates",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=85",
    spanClass: "span-standard"
  },
  {
    id: "feat-6",
    title: "Vast Plantation Security Perimeter",
    location: "Mettupalayam Foothills",
    size: "5,200 Running Feet",
    type: "Heavy Galvanized Kambi Veli",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=85",
    spanClass: "span-wide"
  }
];

export const FENCING_TYPES_CARDS = [
  {
    id: "type-kambi-veli",
    name: "Kambi Veli (கம்பி வேலி)",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    tag: "Most Popular"
  },
  {
    id: "type-chain-link",
    name: "Chain Link Fence",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80",
    tag: "High Visibility"
  },
  {
    id: "type-barbed-wire",
    name: "Barbed Wire Fence",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80",
    tag: "Cost Effective"
  },
  {
    id: "type-rcc-post",
    name: "RCC Post Fencing",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80",
    tag: "25+ Yrs Lifespan"
  },
  {
    id: "type-farm-fence",
    name: "Farm & Cattle Fence",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80",
    tag: "Livestock Safe"
  },
  {
    id: "type-plot-fence",
    name: "Open Plot Fence",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
    tag: "Plot Protection"
  }
];
