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
    title: "Agricultural Land RCC Post Kambi Veli",
    category: "Farmland",
    image: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg",
    badge: "Most Requested"
  },
  {
    id: "work-2",
    title: "Heavy-Gauge GI Chain Link Mesh",
    category: "Farm",
    image: "/images/fencing/27246645-baa5-4ffa-886a-55c081fb3862.jpg",
    badge: "Heavy GI Wire"
  },
  {
    id: "work-3",
    title: "Reinforced Corner Strut & Painted Posts",
    category: "Chain Link",
    image: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg",
  },
  {
    id: "work-4",
    title: "Slope Terrain Agricultural Perimeter",
    category: "Barbed Wire",
    image: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg",
    badge: "Budget Friendly"
  },
  {
    id: "work-5",
    title: "Heavy-Duty Precast Compound Netting",
    category: "RCC Posts",
    image: "/images/fencing/7594a0cd-85e0-4b8f-9773-a919d912bd5d.jpg",
    badge: "25+ Yrs Life"
  },
  {
    id: "work-6",
    title: "Open Plot & Farmland Boundary",
    category: "Plot Boundary",
    image: "/images/fencing/824e623a-364a-4c13-bea7-5b5545887915.jpg",
  }
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "feat-1",
    title: "Agricultural Land RCC Post Kambi Veli",
    location: "Therpathai / Farmland",
    size: "4,500 Running Feet",
    type: "RCC Posts + Galvanized Wire",
    image: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg",
    spanClass: "span-wide"
  },
  {
    id: "feat-2",
    title: "Heavy-Gauge GI Chain Link Mesh",
    location: "Gobichettipalayam, Erode",
    size: "2,200 Running Feet",
    type: "Heavy GI Chain Link",
    image: "/images/fencing/27246645-baa5-4ffa-886a-55c081fb3862.jpg",
    spanClass: "span-portrait"
  },
  {
    id: "feat-3",
    title: "Reinforced Corner Struts & RCC Posts",
    location: "Avinashi Road, Tiruppur",
    size: "3,100 Running Feet",
    type: "Precast Concrete Posts + Mesh",
    image: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg",
    spanClass: "span-portrait"
  },
  {
    id: "feat-4",
    title: "Slope Terrain Agricultural Perimeter",
    location: "Dharapuram / Udumalpet Acreage",
    size: "2,800 Running Feet",
    type: "Terrain-Adaptive Kambi Veli",
    image: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg",
    spanClass: "span-standard"
  },
  {
    id: "feat-5",
    title: "Precast Compound Netting Protection",
    location: "Salem / Namakkal Farm",
    size: "1,800 Running Feet",
    type: "Weather-Proof GI Mesh",
    image: "/images/fencing/7594a0cd-85e0-4b8f-9773-a919d912bd5d.jpg",
    spanClass: "span-standard"
  }
];

export const FENCING_TYPES_CARDS = [
  {
    id: "type-kambi-veli",
    name: "Kambi Veli (கம்பி வேலி)",
    image: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg",
    tag: "Most Popular"
  },
  {
    id: "type-chain-link",
    name: "Chain Link Fence",
    image: "/images/fencing/27246645-baa5-4ffa-886a-55c081fb3862.jpg",
    tag: "High Visibility"
  },
  {
    id: "type-barbed-wire",
    name: "Barbed Wire Fence",
    image: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg",
    tag: "Cost Effective"
  },
  {
    id: "type-rcc-post",
    name: "RCC Post Fencing",
    image: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg",
    tag: "25+ Yrs Lifespan"
  },
  {
    id: "type-farm-fence",
    name: "Farm & Cattle Fence",
    image: "/images/fencing/7594a0cd-85e0-4b8f-9773-a919d912bd5d.jpg",
    tag: "Crop Safe"
  },
  {
    id: "type-plot-fence",
    name: "Open Plot Fence",
    image: "/images/fencing/824e623a-364a-4c13-bea7-5b5545887915.jpg",
    tag: "Plot Protection"
  }
];
