export interface Store {
  id: string;
  name: string;
  address: string;
  distance: string;
  status: 'Open' | 'Closed';
  closingTime?: string;
  coordinates: { lat: number; lng: number };
}

export interface Product {
  id: string;
  name: string;
  flavor: string;
  type?: 'can' | 'powder';
  color: string;
  accentColor: string;
  img: string;
  description: string;
  flavorNotes: string[];
  benefits: { title: string; description: string }[];
  nutrition: { label: string; value: string }[];
  tags: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
