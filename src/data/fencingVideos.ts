export interface FencingVideoItem {
  id: string;
  src: string;
  title: string;
  category: string;
  description: string;
  duration?: string;
  location?: string;
}

export const FENCING_VIDEOS: FencingVideoItem[] = [
  {
    id: "video-1",
    src: "/videos/1.mp4",
    title: "On-Site Farmland Wire Tensioning & Post Alignment",
    category: "Site Execution",
    description: "Live recording of precision wire alignment and heavy-duty post anchoring across farmland.",
    location: "Therpathai / Tamil Nadu",
    duration: "Live Work"
  },
  {
    id: "video-2",
    src: "/videos/2.mp4",
    title: "Heavy-Gauge GI Mesh & Boundary Pillar Setup",
    category: "Installation",
    description: "Field video showcasing heavy galvanized wire netting installation and strut support.",
    location: "Erode / Gobichettipalayam",
    duration: "Live Work"
  },
  {
    id: "video-3",
    src: "/videos/3.mp4",
    title: "Precast Concrete Post Ground Setting & Wire Weaving",
    category: "Ground Work",
    description: "Deep foundation pit setting and multi-strand barbed wire tensioning on agricultural terrain.",
    location: "Tiruppur / Avinashi",
    duration: "Live Work"
  },
  {
    id: "video-4",
    src: "/videos/4.mp4",
    title: "Turnkey Boundary Demarcation & Perimeter Handover",
    category: "Completed Handover",
    description: "Inspection walkthrough of completed perimeter fencing providing total boundary protection.",
    location: "Salem / Namakkal",
    duration: "Live Work"
  }
];
