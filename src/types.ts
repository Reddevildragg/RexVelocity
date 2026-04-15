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
  color: string;
  image: string;
  description: string;
  benefits: string[];
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
