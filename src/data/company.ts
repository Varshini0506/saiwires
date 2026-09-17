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
  location: string;
  state: string;
  workingHours: string;
  establishedYear: string;
  founder: string;
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
  name: "SRI SAI WIRE NETTING",
  shortName: "SRI SAI",
  tagline: "Strong Boundaries. Secure Lands.",
  badge: "Kambi Veli & Land Fencing Specialists",
  phone: "+919843932637",
  displayPhone: "98439 32637",
  whatsapp: "919843932637",
  email: "info@srisaiwirenetting.com",
  address: "Therpathai, Tamil Nadu, India",
  location: "Therpathai",
  state: "Tamil Nadu, India",
  workingHours: "Mon – Sat: 8:00 AM – 7:00 PM",
  establishedYear: "2014",
  founder: "Mahendran P.",
  stats: {
    yearsExperience: "12+",
    projectsCompleted: "600+",
    customerSatisfaction: "100%",
    fencingSolutions: "8+ Types",
  },
  social: {
    whatsappUrl: "https://wa.me/919843932637?text=Hello%20SRI%20SAI%20WIRE%20NETTING,%20I%20want%20a%20quotation%20for%20Kambi%20Veli%20/%20Land%20Fencing.",
    facebookUrl: "https://facebook.com",
    instagramUrl: "https://instagram.com",
    youtubeUrl: "https://youtube.com",
  },
};
