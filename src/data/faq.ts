export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Materials" | "Process" | "Pricing";
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What types of fencing do you provide?",
    answer: "We provide comprehensive fencing solutions including Agricultural Barbed Wire Fencing, Chain Link Mesh Fencing, Precast RCC Concrete Post Fencing, High-Tensile Farm & Cattle Knot Fencing, Anti-Cut Industrial Mesh, and Concertina Razor Wire Security Toppings."
  },
  {
    id: "faq-2",
    category: "General",
    question: "Do you provide fencing for agricultural land and farms?",
    answer: "Yes, agricultural fencing is one of our key specialities. We construct heavy-duty farm perimeter boundaries designed to prevent wild boar/animal encroachment, trespassers, and clearly safeguard crop investments with durable GI wires and solid RCC or stone posts."
  },
  {
    id: "faq-3",
    category: "General",
    question: "Can you fence large land areas of several acres?",
    answer: "Absolutely. We have the manpower, machinery, and material supply chain to execute fencing for properties ranging from single residential plots (1,000 sq.ft) up to vast multi-acre agricultural estates, solar parks (50+ acres), and industrial complexes."
  },
  {
    id: "faq-4",
    category: "Process",
    question: "Do you provide on-site measurement and survey visits?",
    answer: "Yes, our technical team visits your site across Tamil Nadu to assess the terrain, verify boundary markers, take running-feet measurements, evaluate soil conditions for post installation, and discuss the best fencing option for your budget."
  },
  {
    id: "faq-5",
    category: "Pricing",
    question: "How is the fencing quotation calculated?",
    answer: "Quotations are calculated transparently based on total running feet, height of fence (e.g. 5ft, 6ft, 7ft), post type (RCC concrete posts vs stone vs MS pipe), wire specification (gauge & coating), number of wire strands or mesh thickness, and corner strut reinforcements."
  },
  {
    id: "faq-6",
    category: "Process",
    question: "How long does the installation take?",
    answer: "Most medium agricultural parcels (around 1,000 to 2,500 running feet) are completed within 3 to 6 working days. Smaller residential plots are typically finished in 1 to 2 days, depending on ground conditions and post foundation curing time."
  },
  {
    id: "faq-7",
    category: "Materials",
    question: "Can I choose different fencing materials and custom heights?",
    answer: "Yes! You can customize wire thickness (10 to 14 gauge), post heights (5ft to 10ft), post spacing (8ft to 10ft), mesh aperture sizes (2\" to 4\"), PVC color coatings (forest green, silver galvanized), and add entry gates of customized dimensions."
  },
  {
    id: "faq-8",
    category: "General",
    question: "Do you provide residential boundary and vacant plot fencing?",
    answer: "Yes, we specialize in vacant plot boundary protection to prevent illegal trespassing and encroachments in residential layouts and suburban areas across Coimbatore, Erode, Tiruppur, Salem, and surrounding districts."
  }
];

export interface ServiceLocation {
  district: string;
  regions: string[];
  tag: string;
}

export const SERVICE_LOCATIONS: ServiceLocation[] = [
  { district: "Coimbatore", regions: ["Pollachi", "Mettupalayam", "Sulur", "Annur", "Kinathukadavu", "Karamadai"], tag: "Primary Hub" },
  { district: "Erode", regions: ["Gobichettipalayam", "Bhavani", "Perundurai", "Sathyamangalam", "Anthiyur", "Modakkurichi"], tag: "Primary Hub" },
  { district: "Tiruppur", regions: ["Avinashi", "Dharapuram", "Kangeyam", "Udumalaipettai", "Palladam"], tag: "Active Coverage" },
  { district: "Salem", regions: ["Attur", "Omalur", "Mettur", "Sankari", "Edappadi"], tag: "Active Coverage" },
  { district: "Namakkal", regions: ["Tiruchengode", "Rasipuram", "Paramathi Velur", "Komarapalayam"], tag: "Active Coverage" },
  { district: "Karur", regions: ["Kulithalai", "Aravakurichi", "Manmangalam", "Pugalur"], tag: "Active Coverage" }
];
