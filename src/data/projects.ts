export interface ProjectItem {
  id: string;
  title: string;
  category: "Agricultural" | "Farm" | "Residential" | "Commercial" | "Industrial";
  location: string;
  size: string;
  fencingType: string;
  description: string;
  image: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "12-Acre Coconut Farm Boundary Fencing",
    category: "Agricultural",
    location: "Pollachi, Coimbatore Dist.",
    size: "12 Acres (4,200 Running Feet)",
    fencingType: "7-Strand Heavy GI Barbed Wire with RCC Posts",
    description: "Secured a vast coconut grove against stray cattle and wildlife encroachments with 7ft precast RCC poles and galvanized barb wire.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-2",
    title: "Eco Farmstead & Dairy Paddock Enclosure",
    category: "Farm",
    location: "Gobichettipalayam, Erode Dist.",
    size: "5 Acres (1,800 Running Feet)",
    fencingType: "High-Tensile Woven Farm Mesh & Stone Pillars",
    description: "Installed graduated farm knot fencing to ensure cattle containment and protect fodder crops with durable stone post foundation.",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-3",
    title: "Gated Residential Layout Plot Boundary",
    category: "Residential",
    location: "Avinashi Road, Coimbatore",
    size: "24 Individual Plots (3,100 Running Feet)",
    fencingType: "PVC Coated Green Chain Link with MS Angle Framework",
    description: "Clear demarcation of residential layout plots preventing land disputes, with clean green aesthetic matching landscaped surroundings.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-4",
    title: "Textile Warehouse & Logistics Facility",
    category: "Industrial",
    location: "Tiruppur Outer Ring Road",
    size: "3.5 Acres (1,500 Running Feet)",
    fencingType: "Heavy-Gauge Galvanized Chain Link with Razor Wire",
    description: "High-security perimeter enclosure equipped with 3-tier concertina razor wire on top of 8-foot industrial chain link fencing.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-5",
    title: "Organic Mango Orchard Boundary Protection",
    category: "Agricultural",
    location: "Bhavani / Anthiyur, Erode Dist.",
    size: "8 Acres (2,600 Running Feet)",
    fencingType: "RCC Post + Barbed Wire & Bottom Mesh",
    description: "Protected fruit bearing orchard from wild boar intrusions using heavy base mesh coupled with high barbed wire lines.",
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-6",
    title: "Solar Power Plant Perimeter Enclosure",
    category: "Commercial",
    location: "Dharapuram, Tiruppur Dist.",
    size: "15 Acres (5,000 Running Feet)",
    fencingType: "Anti-Cut Industrial GI Chain Link",
    description: "Complied with state renewable energy security guidelines with tamper-evident perimeter boundary and double gate entry points.",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-7",
    title: "Hillside Plantation & Estate Fencing",
    category: "Farm",
    location: "Mettupalayam foothills, TN",
    size: "6.5 Acres (2,200 Running Feet)",
    fencingType: "Heavy-Duty Pre-Stressed RCC Post Fencing",
    description: "Contour-following boundary installation across rocky terrain with reinforced corner anchor pillars.",
    image: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-8",
    title: "Private Villa Estate Perimeter Fencing",
    category: "Residential",
    location: "Perundurai, Erode Dist.",
    size: "1.5 Acres (900 Running Feet)",
    fencingType: "Architectural Chain Link with Custom Iron Gate",
    description: "Sleek boundary enclosure providing unobstructed landscape views while keeping domestic pets safe and intruders away.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "proj-9",
    title: "Engineering Unit Compound Demarcation",
    category: "Industrial",
    location: "SIDCO Industrial Estate, Salem",
    size: "2 Acres (1,100 Running Feet)",
    fencingType: "Galvanized GI Wire Mesh with Heavy Concrete Footings",
    description: "Fast-track 4-day perimeter fence installation ensuring compliance with industrial zoning and factory perimeter norms.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
  }
];
