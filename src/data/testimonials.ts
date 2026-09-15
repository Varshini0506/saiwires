export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  propertyType: string;
  rating: number;
  content: string;
  date: string;
}

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "test-1",
    name: "K. Rangaraj",
    role: "Coconut Farm Owner",
    location: "Pollachi, Coimbatore",
    propertyType: "10-Acre Agricultural Land",
    rating: 5,
    content: "Good quality fencing work and professional installation. The team completed our farm boundary work neatly within 4 days. Strong RCC posts and tightly stretched GI wire. Highly recommend Sri Fence Solutions!",
    date: "February 2026"
  },
  {
    id: "test-2",
    name: "S. Mohanraj",
    role: "Property Investor",
    location: "Perundurai Road, Erode",
    propertyType: "Residential Layout Plots",
    rating: 5,
    content: "Quotation was clear and transparent with zero hidden costs. The team visited our site, took precise measurements, and finished the chain link fence on time. Clear demarcation gives great peace of mind.",
    date: "January 2026"
  },
  {
    id: "test-3",
    name: "V. Soundararajan",
    role: "Agro Farm Enterprise",
    location: "Gobichettipalayam",
    propertyType: "8-Acre Organic Farm",
    rating: 5,
    content: "Very good solution for our agricultural land. Strong fencing, robust post alignment, and clean finishing. Stopped wild boar menace completely. The team is polite and very dedicated.",
    date: "December 2025"
  },
  {
    id: "test-4",
    name: "M. Jayakumar",
    role: "Industrial Unit Director",
    location: "Tiruppur SIDCO",
    propertyType: "Commercial Factory Perimeter",
    rating: 5,
    content: "We needed urgent high-security fencing with concertina razor wires for our textile warehouse. Sri Fence completed 1,400 feet with impeccable quality. True professionals in Tamil Nadu.",
    date: "March 2026"
  }
];
