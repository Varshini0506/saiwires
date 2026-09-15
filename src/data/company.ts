export interface CompanyConfig {
  name: string;
  shortName: string;
  tagline: string;
  badge: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  email: string;
  address: string;
  state: string;
  workingHours: string;
  establishedYear: string;
  stats: {
    yearsExperience: string;
    projectsCompleted: string;
    customerSatisfaction: string;
    fencingSolutions: string;
  };
  social: {
    whatsappUrl: string;
    facebookUrl: string;
    instagramUrl: string;
    youtubeUrl: string;
  };
}

export const COMPANY_DATA: CompanyConfig = {
  name: "SAI WIRES AND FENCE",
  shortName: "SAI WIRES",
  tagline: "Strong Boundaries. Secure Lands.",
  badge: "Kambi Veli & Land Fencing Specialists",
  phone: "+919043124078",
  displayPhone: "+91 90431 24078",
  whatsapp: "919043124078",
  email: "info@saiwiresandfence.com",
  address: "Head Office & Yard, Tamil Nadu, India",
  state: "Tamil Nadu, India",
  workingHours: "Mon – Sat: 8:00 AM – 7:00 PM",
  establishedYear: "2014",
  stats: {
    yearsExperience: "12+",
    projectsCompleted: "600+",
    customerSatisfaction: "100%",
    fencingSolutions: "8+ Types",
  },
  social: {
    whatsappUrl: "https://wa.me/919043124078?text=Hello%20SAI%20WIRES%20AND%20FENCE,%20I%20want%20a%20quotation%20for%20Kambi%20Veli%20/%20Land%20Fencing.",
    facebookUrl: "https://facebook.com",
    instagramUrl: "https://instagram.com",
    youtubeUrl: "https://youtube.com",
  },
};
