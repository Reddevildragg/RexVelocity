import { Store, Product, TimelineEvent, Testimonial } from './types';

export const STORES: Store[] = [
  {
    id: '1',
    name: 'Apex Fitness Hub',
    address: '123 Predator Way, London',
    distance: '0.8 miles',
    status: 'Open',
    closingTime: '10:00 PM',
    coordinates: { lat: 51.5074, lng: -0.1278 },
  },
  {
    id: '2',
    name: 'Velocity Mart',
    address: '45 Speed Street, Manchester',
    distance: '1.2 miles',
    status: 'Open',
    closingTime: '11:00 PM',
    coordinates: { lat: 53.4808, lng: -2.2426 },
  },
  {
    id: '3',
    name: 'The Fuel Station',
    address: '88 Energy Blvd, Birmingham',
    distance: '2.5 miles',
    status: 'Closed',
    coordinates: { lat: 52.4862, lng: -1.8904 },
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'original',
    name: 'REX ORIGINAL',
    flavor: 'Classic Energy',
    color: 'text-primary',
    accentColor: '#ff8f70',
    img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=400',
    description: 'The foundation of the predator. Pure, raw energy to fuel your ascent.',
    flavorNotes: ['Classic Energy', 'Raw Power'],
    benefits: [
      { title: 'Instant Focus', description: 'Immediate alertness' },
      { title: 'Sustained Power', description: 'Energy throughout the day' },
      { title: 'Zero Crash', description: 'Smooth energy curve' }
    ],
    nutrition: [],
    tags: ['Energy', 'Focus', 'Power']
  },
  {
    id: 'citrus',
    name: 'CITRUS STRIKE',
    flavor: 'Zesty Lime & Lemon',
    color: 'text-secondary',
    accentColor: '#ffd709',
    img: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=400',
    description: 'A sharp, refreshing burst of citrus to awaken your senses.',
    flavorNotes: ['Zesty Lime', 'Tart Lemon'],
    benefits: [
      { title: 'Electrolyte Balance', description: 'Maintain hydration' },
      { title: 'Rapid Hydration', description: 'Quick absorption' },
      { title: 'Vitamin C Boost', description: 'Immune support' }
    ],
    nutrition: [],
    tags: ['Hydrate', 'Refresh', 'Vitamin']
  },
  {
    id: 'berry',
    name: 'BERRY BARRAGE',
    flavor: 'Wild Forest Berries',
    color: 'text-tertiary',
    accentColor: '#ff4a4a',
    img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&q=80&w=400',
    description: 'A powerful blend of dark berries for intense endurance.',
    flavorNotes: ['Wild Blackberry', 'Forest Raspberry'],
    benefits: [
      { title: 'Antioxidant Rich', description: 'Cellular protection' },
      { title: 'Endurance Support', description: 'Keep going longer' },
      { title: 'Natural Flavors', description: 'Pure berry extract' }
    ],
    nutrition: [],
    tags: ['Endure', 'Berries', 'Pure']
  },
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2022',
    title: 'THE GENESIS',
    description: 'Rex Velocity is born from the need for a cleaner, more powerful energy source.',
  },
  {
    year: '2023',
    title: 'THE PACK GROWS',
    description: 'Expansion into 500+ retail locations across the UK and Europe.',
  },
  {
    year: '2024',
    title: 'APEX EVOLUTION',
    description: 'Launch of the Science of the Predator research initiative.',
  },
  {
    year: '2025',
    title: 'GLOBAL DOMINANCE',
    description: 'Becoming the choice of elite athletes and high-performers worldwide.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Marcus Thorne',
    role: 'Pro MMA Fighter',
    content: 'Rex Velocity gives me the edge I need in the final rounds. It\'s not just energy; it\'s focus.',
    avatar: 'https://i.pravatar.cc/150?u=marcus',
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Ultra-Marathoner',
    content: 'The sustained release is incredible. No jitters, just pure performance for hours on end.',
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: '3',
    name: 'David Vane',
    role: 'Tech CEO',
    content: 'When I need to stay sharp for a 12-hour sprint, Rex is my go-to. The science behind it is real.',
    avatar: 'https://i.pravatar.cc/150?u=david',
  },
];
