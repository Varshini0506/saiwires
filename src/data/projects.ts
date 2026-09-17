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
    title: "Agricultural Land RCC Post Kambi Veli",
    category: "Agricultural",
    location: "Therpathai / Farmland",
    size: "12 Acres (4,200 Running Feet)",
    fencingType: "Heavy-Duty Precast RCC Posts with Tensioned GI Wire",
    description: "Secured vast farmland against animal encroachments with precast RCC poles and galvanized wire.",
    image: "/images/fencing/2093d765-dd00-412e-bf1b-f7d31cedc2a4.jpg"
  },
  {
    id: "proj-2",
    title: "Heavy-Gauge GI Chain Link Mesh Fencing",
    category: "Farm",
    location: "Erode / Gobichettipalayam Farm",
    size: "5 Acres (1,800 Running Feet)",
    fencingType: "High-Tensile Galvanized Diamond Mesh & Steel/RCC Posts",
    description: "Installed heavy gauge hot-dip galvanized wire mesh on durable support posts.",
    image: "/images/fencing/27246645-baa5-4ffa-886a-55c081fb3862.jpg"
  },
  {
    id: "proj-3",
    title: "Reinforced Corner Strut & Concrete Pillars",
    category: "Residential",
    location: "Tiruppur / Avinashi Highway Plot",
    size: "24 Individual Plots (3,100 Running Feet)",
    fencingType: "Engineered A-Frame Corner Bracing & Concrete Pillars",
    description: "Clear demarcation of plots with robust corner struts and painted concrete pillars.",
    image: "/images/fencing/2842b4ce-4379-4313-8723-8233fc5b5b97.jpg"
  },
  {
    id: "proj-4",
    title: "Slope Terrain Agricultural Perimeter Fencing",
    category: "Agricultural",
    location: "Dharapuram / Udumalpet Acreage",
    size: "8.5 Acres (3,200 Running Feet)",
    fencingType: "Terrain-Adaptive Full Length Kambi Veli",
    description: "Full length agricultural land boundary protection across varying soil elevation.",
    image: "/images/fencing/2ac4f63b-d71d-4056-9ae3-cad590c039c0.jpg"
  },
  {
    id: "proj-5",
    title: "Heavy-Duty Precast Compound Netting",
    category: "Farm",
    location: "Salem / Namakkal Farm Perimeter",
    size: "6 Acres (2,400 Running Feet)",
    fencingType: "Weather-Proof Galvanized GI Wire Mesh",
    description: "Weather-proof galvanized wire mesh with heavy concrete posts for orchards.",
    image: "/images/fencing/7594a0cd-85e0-4b8f-9773-a919d912bd5d.jpg"
  }
];
