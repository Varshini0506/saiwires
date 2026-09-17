export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  tag: string;
  features: string[];
  bestFor: string;
  image: string;
}

export interface FencingTypeItem {
  id: string;
  name: string;
  tamilName?: string;
  bestSuitedFor: string;
  description: string;
  lifespan: string;
  maintenance: string;
  image: string;
  highlights: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "agricultural",
    title: "Agricultural Land Fencing",
    shortDesc: "Protect farms and agricultural properties with strong, durable fencing against wild animals and boundary disputes.",
    fullDesc: "Specialized agricultural fence systems built with premium galvanized wires and rugged stone/RCC posts designed for harsh weather, livestock control, and crop protection.",
    iconName: "Tractor",
    tag: "Most Popular",
    features: ["Wild Boar & Animal Protection", "High Tensile GI Wire", "Stone / RCC Post Support", "Weather Resistant Coating"],
    bestFor: "Farmlands, Coconut Groves, Paddy Fields, Plantations",
    image: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg"
  },
  {
    id: "chain-link",
    title: "Chain Link Fencing",
    shortDesc: "Reliable diamond-mesh fencing offering clear boundary visibility, robust security, and long-lasting strength.",
    fullDesc: "Heavy-gauge hot-dipped galvanized and PVC-coated chain link mesh for farms, residential layouts, tennis courts, and commercial compounds.",
    iconName: "Grid",
    tag: "High Durability",
    features: ["Hot-Dip Galvanized & PVC Coated", "Custom Mesh Size (2\" to 4\")", "Uniform Tension & Clean Finish", "Rust & Corrosion Free"],
    bestFor: "Farm Boundaries, Layout Plots, Residential Compounds, Sports Grounds",
    image: "/images/fencing/27246645-baa5-4ffa-886a-55c081fb3862.jpg"
  },
  {
    id: "barbed-wire",
    title: "Barbed Wire Fencing",
    shortDesc: "Cost-effective and time-tested perimeter boundary protection for large land parcels and perimeter demarcations.",
    fullDesc: "Double-strand, 4-point sharp barb wires engineered with high-strength GI wire, ideal for defining vast boundaries affordably and effectively.",
    iconName: "ShieldAlert",
    tag: "Cost Effective",
    features: ["4-Point Sharp Barb Spacing", "Heavy Zinc Coating", "Multi-Line Configurations (3 to 7 lines)", "Quick Installation"],
    bestFor: "Large Acreage Farms, Highway Borders, Barren Land Demarcation",
    image: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg"
  },
  {
    id: "rcc-post",
    title: "RCC Post Fencing",
    shortDesc: "Heavy-duty reinforced cement concrete posts paired with premium fence wire for uncompromising boundary permanence.",
    fullDesc: "Pre-stressed vibrating concrete posts reinforced with steel rods, capable of withstanding heavy impact, moisture, and decades of outdoor exposure.",
    iconName: "Columns",
    tag: "Maximum Strength",
    features: ["Steel-Reinforced Concrete", "Pre-drilled Eyelet Holes", "Termite & Weather Proof", "Up to 25+ Years Lifespan"],
    bestFor: "Permanent Boundary Security, Farmlands, Commercial Yards",
    image: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg"
  },
  {
    id: "farm-cattle",
    title: "Farm & Cattle Fencing",
    shortDesc: "Specialized containment fencing suitable for livestock farms, dairy enclosures, poultry, and animal paddocks.",
    fullDesc: "Woven wire knot fencing designed with gradual mesh spacing to protect cows, goats, sheep, and horses safely without injury.",
    iconName: "Trees",
    tag: "Livestock Safe",
    features: ["Graduated Mesh Spacing", "Impact Absorption Flexibility", "Predator Deterrence", "Safe for Animals"],
    bestFor: "Dairy Farms, Goat & Sheep Enclosures, Stud Farms, Organic Orchards",
    image: "/images/fencing/7594a0cd-85e0-4b8f-9773-a919d912bd5d.jpg"
  },
  {
    id: "residential",
    title: "Residential Boundary Fencing",
    shortDesc: "Secure open plots, independent houses, villas, and residential developments with aesthetically pleasing fences.",
    fullDesc: "Sleek and protective boundary solutions that prevent encroachment on vacant plots, enhance curb appeal, and guard private residential grounds.",
    iconName: "Home",
    tag: "Plot Protection",
    features: ["Encroachment Prevention", "Clean & Modern Appearance", "Anti-Climb Design", "Gate Integration Available"],
    bestFor: "Vacant Plots, Residential Layouts, Farmhouses, Villa Communities",
    image: "/images/fencing/824e623a-364a-4c13-bea7-5b5545887915.jpg"
  },
  {
    id: "industrial",
    title: "Industrial & Commercial Fencing",
    shortDesc: "High-security perimeter fencing for factories, warehouses, solar parks, and commercial yards.",
    fullDesc: "Heavy industrial fencing integrated with anti-cut mesh, concertina razor wire toppings, and fortified steel posts for maximum facility security.",
    iconName: "Factory",
    tag: "High Security",
    features: ["Razor Blade / Concertina Coils", "Heavy Industrial Gauge", "Anti-Intrusion Design", "IS Standard Certified GI Materials"],
    bestFor: "Warehouses, Factories, Solar Plants, Logistics Yards",
    image: "/images/fencing/863c164a-634e-49da-992e-c370b4b4f47c.jpg"
  },
  {
    id: "custom",
    title: "Custom Fencing Solutions",
    shortDesc: "Tailored fencing designed precisely according to your land terrain, gradient, specific height needs, and budget.",
    fullDesc: "End-to-end custom perimeter engineering including custom gates, hybrid barbed-chainlink setups, solar fencing integration, and corner reinforcement.",
    iconName: "Sliders",
    tag: "Tailored Design",
    features: ["Site-Specific Engineering", "Sloped Terrain Adaptability", "Turnkey Fabrication & Gates", "Flexible Budgeting Packages"],
    bestFor: "Irregular Terrains, Rocky Hillsides, Custom Estate Properties",
    image: "/images/fencing/eae3ec64-e9d1-4b1c-acf5-11e8b7dfe064.jpg"
  },
];

export const FENCING_TYPES_DATA: FencingTypeItem[] = [
  {
    id: "chainlink",
    name: "Chain Link Mesh Fence",
    bestSuitedFor: "Plots, Layouts, Farmhouses & Compounds",
    description: "Woven diamond mesh made from galvanized steel. Gives clear line of sight while preventing unauthorized entry.",
    lifespan: "15–20 Years",
    maintenance: "Low Maintenance",
    image: "/images/fencing/27246645-baa5-4ffa-886a-55c081fb3862.jpg",
    highlights: ["2\" to 4\" Mesh Options", "8 to 12 Gauge Wire", "PVC Coating in Green/Blue available", "Easy to Repair"]
  },
  {
    id: "barbed",
    name: "Barbed Wire Fence",
    bestSuitedFor: "Vast Farmlands, Plantations & Long Boundaries",
    description: "High tensile double-strand wire with sharp 4-point barbs every 3 to 4 inches. Best budget-friendly perimeter solution.",
    lifespan: "12–18 Years",
    maintenance: "Minimal Maintenance",
    image: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg",
    highlights: ["High deterrent value", "Lowest cost per running foot", "3, 5, or 7 string layouts", "Fast deployment"]
  },
  {
    id: "gi-wire",
    name: "Heavy GI Wire Mesh Fence",
    bestSuitedFor: "Poultry, Small Animal Security & Garden Borders",
    description: "Rigid welded or woven galvanized wire offering firm stability and uniform spacing for animal containment.",
    lifespan: "15+ Years",
    maintenance: "Very Low",
    image: "/images/fencing/863c164a-634e-49da-992e-c370b4b4f47c.jpg",
    highlights: ["Hot-dipped galvanizing", "Strong weld points", "Resistant to gnawing pests", "Aesthetic clean lines"]
  },
  {
    id: "rcc-posts",
    name: "Precast RCC Post Fence",
    bestSuitedFor: "Permanent Boundary Demarcation & Agriculture",
    description: "Concrete poles reinforced with high-grade steel rods. Acts as indestructible backbone for any wire type.",
    lifespan: "25+ Years",
    maintenance: "Zero Maintenance",
    image: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg",
    highlights: ["6ft, 7ft & 8ft heights", "High concrete density", "Pre-molded wire holes", "Weather & fire immune"]
  },
  {
    id: "farm-mesh",
    name: "High-Tensile Farm Knot Fence",
    bestSuitedFor: "Cattle Farms, Coconut Orchards & Hill Country",
    description: "Flexible high tensile hinge-joint fencing that flexes on impact and springs back without breaking.",
    lifespan: "20+ Years",
    maintenance: "Low Maintenance",
    image: "/images/fencing/7594a0cd-85e0-4b8f-9773-a919d912bd5d.jpg",
    highlights: ["Graduated ground-level protection", "Spring-action steel", "No stretching sag", "Wild hog deterring"]
  },
  {
    id: "custom-boundary",
    name: "Custom Hybrid & Razor Fence",
    bestSuitedFor: "High Value Estates, Industrial & Solar Yards",
    description: "Multi-layered perimeter with bottom RCC foundation, heavy chain link, and top razor wire coils.",
    lifespan: "20+ Years",
    maintenance: "Periodic Inspection",
    image: "/images/fencing/8e87a9a9-26a5-4b18-958a-5d9f55ee45ca.jpg",
    highlights: ["Concertina razor coil tops", "Anti-dig ground beam", "Custom entrance gates", "Maximum security rating"]
  }
];
