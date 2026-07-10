export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  details: string[];
  image: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  location: string;
  client: string;
  challenge: string;
  approach: string;
  execution: string;
  result: string;
  galleryImages: string[];
}

export interface ClientStory {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  eventName: string;
  challenge: string;
  solution: string;
  outcome: string;
  quote: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
}

export interface TimelineStep {
  label: string;
  description: string;
  detail: string;
}

export interface ConsultationInput {
  name: string;
  email: string;
  company: string;
  eventType: string;
  date: string;
  guestCount: string;
  budgetRange: string;
  description: string;
}
