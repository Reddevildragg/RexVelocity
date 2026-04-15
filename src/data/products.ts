export interface Product {
  id: string;
  name: string;
  flavor: string;
  color: string;
  accentColor: string;
  img: string;
  description: string;
  flavorNotes: string[];
  benefits: { title: string; description: string }[];
  nutrition: { label: string; value: string }[];
}

export const products: Product[] = [
  {
    id: '01',
    name: 'VOLCANIC BLOOD',
    flavor: 'Blood Orange & Ginger',
    color: 'text-primary',
    accentColor: '#ff8f70',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASGcT8QnRGfP04zfobSxvbv75pmQ9d4mM2fpnkUTHQ-XRrhoyGbA89sOpqTlJ3zov7mV3EcLAZe6X1s1nmUlHmJ5XhgR6anzHMgZnvXztR5RW-30KsHq3Bc3Gc16XoLjFNv1XdqQefVNKjtAdcIaG-1px8Y_xImsa0CgMuagGsJxQldqZIFNjSfkZk-3nDD_Pa7A1cXUdSh-m8Nk2H7EBMttaSV-cz1W89zJ91MSVmQqKFuKkvg7phWldQvhOZ_N7xTOBv2FTmft8',
    description: 'A seismic shift in energy. Volcanic Blood combines the sharp, citrus bite of Mediterranean blood oranges with a slow-burn ginger finish that ignites your focus.',
    flavorNotes: ['Zesty Blood Orange', 'Spicy Ginger Root', 'Citrus Undertones'],
    benefits: [
      { title: 'Neural Ignition', description: '200mg of natural caffeine for immediate cognitive startup.' },
      { title: 'Metabolic Heat', description: 'Ginger extract to support thermogenesis and sustained energy.' },
      { title: 'Zero Crash', description: 'Balanced with L-Theanine for a smooth descent.' }
    ],
    nutrition: [
      { label: 'Calories', value: '10' },
      { label: 'Total Sugar', value: '0g' },
      { label: 'Caffeine', value: '200mg' },
      { label: 'B-Vitamins', value: '100% DV' }
    ]
  },
  {
    id: '02',
    name: 'ELECTRIC EXTINCTION',
    flavor: 'Sour Lemon & Caffeine',
    color: 'text-secondary',
    accentColor: '#ffd709',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7r4LNd0l7h-NTYoiNZHtQqrirg8IKEowkoDZN-E0lsONzqkoawr81AbcPvMhnDXckEME6ucreVeZ39rcYhTRAJqDjp2XywN8126x6iqp_Y6HYDU_m3GzNqQwTlYOJWmsh0bpY28f5SZhHOVZtipqNWwMTU34QJrRXCvcg3jbesdXxcG8AbCkR7aYAbeUKFVS75HGEivIJ3lNYNVwKStgYwkndObp7_Zvs27tLrAIbopJbHCraZZZB3ApabsqyJR5Y8lj4LQ0LbNg',
    description: 'Shock your system into the next era. Electric Extinction delivers a high-voltage sour lemon surge that cuts through mental fog like a lightning strike.',
    flavorNotes: ['Electric Lemon', 'Tart Citrus', 'Neon Sour'],
    benefits: [
      { title: 'High Voltage', description: 'Rapid-release caffeine for instant physical velocity.' },
      { title: 'Electrolyte Surge', description: 'Optimized mineral blend for peak biological hydration.' },
      { title: 'Zero Sugar', description: 'Pure energy without the insulin spike.' }
    ],
    nutrition: [
      { label: 'Calories', value: '5' },
      { label: 'Total Sugar', value: '0g' },
      { label: 'Caffeine', value: '200mg' },
      { label: 'Sodium', value: '150mg' }
    ]
  },
  {
    id: '03',
    name: 'PREHISTORIC PUNCH',
    flavor: 'Wild Berry & Guarana',
    color: 'text-tertiary',
    accentColor: '#ff9f4a',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy-3QEhbaxN_wGA7_z9A-qZOx3x7HkXsjUen3Nw_cdq-ng4ruN_EXOph6ksinV_2RRkwJAMTkRUWbu0h0SWzY6BmP0jLUuOBRoIyKR92p1MwBHlmxLg6BSdkaL4ZTovMPk0gnobnSTfzFxrtXOM69PzmIZ8NGCC9Smc2WNOwYsgnejUcRobGmamHg4eTqfyo-xsGCL5JhndtucZfn0WoSwE8uD4KJeWom1aNseeumNRGcAYLvT8155sdvWSV1nJRiVH0bbOFDaROU',
    description: 'The primal choice for long-distance dominance. A complex blend of wild forest berries reinforced with natural Guarana for a sustained, hunter-gatherer endurance.',
    flavorNotes: ['Wild Blackberry', 'Forest Raspberry', 'Earthy Guarana'],
    benefits: [
      { title: 'Primal Endurance', description: 'Guarana extract for extended energy release over 6+ hours.' },
      { title: 'Antioxidant Shield', description: 'Natural berry polyphenols to combat oxidative stress.' },
      { title: 'Focus Matrix', description: 'Enhanced with Panax Ginseng for mental clarity.' }
    ],
    nutrition: [
      { label: 'Calories', value: '15' },
      { label: 'Total Sugar', value: '0g' },
      { label: 'Caffeine', value: '180mg' },
      { label: 'Guarana', value: '100mg' }
    ]
  },
  {
    id: '04',
    name: 'ARCTIC ANNIHILATION',
    flavor: 'Blue Raspberry & Mint',
    color: 'text-blue-400',
    accentColor: '#60a5fa',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASGcT8QnRGfP04zfobSxvbv75pmQ9d4mM2fpnkUTHQ-XRrhoyGbA89sOpqTlJ3zov7mV3EcLAZe6X1s1nmUlHmJ5XhgR6anzHMgZnvXztR5RW-30KsHq3Bc3Gc16XoLjFNv1XdqQefVNKjtAdcIaG-1px8Y_xImsa0CgMuagGsJxQldqZIFNjSfkZk-3nDD_Pa7A1cXUdSh-m8Nk2H7EBMttaSV-cz1W89zJ91MSVmQqKFuKkvg7phWldQvhOZ_N7xTOBv2FTmft8',
    description: 'Sub-zero focus for the coldest competitors. Arctic Annihilation pairs a deep blue raspberry sweetness with a cooling menthol-like mint finish that keeps your head in the game.',
    flavorNotes: ['Frosty Blue Raspberry', 'Cooling Mint', 'Ice-Cold Finish'],
    benefits: [
      { title: 'Cryo-Focus', description: 'Cooling sensation to lower perceived exertion during intense sessions.' },
      { title: 'Rapid Hydration', description: 'Coconut water base for natural mineral replenishment.' },
      { title: 'Zero Crash', description: 'Precision-dosed for a clean, linear energy curve.' }
    ],
    nutrition: [
      { label: 'Calories', value: '10' },
      { label: 'Total Sugar', value: '0g' },
      { label: 'Caffeine', value: '200mg' },
      { label: 'Potassium', value: '200mg' }
    ]
  },
  {
    id: '05',
    name: 'JUNGLE JOLT',
    flavor: 'Green Apple & Matcha',
    color: 'text-green-400',
    accentColor: '#4ade80',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7r4LNd0l7h-NTYoiNZHtQqrirg8IKEowkoDZN-E0lsONzqkoawr81AbcPvMhnDXckEME6ucreVeZ39rcYhTRAJqDjp2XywN8126x6iqp_Y6HYDU_m3GzNqQwTlYOJWmsh0bpY28f5SZhHOVZtipqNWwMTU34QJrRXCvcg3jbesdXxcG8AbCkR7aYAbeUKFVS75HGEivIJ3lNYNVwKStgYwkndObp7_Zvs27tLrAIbopJbHCraZZZB3ApabsqyJR5Y8lj4LQ0LbNg',
    description: 'Unleash the beast within the canopy. Jungle Jolt fuses the crisp, tart snap of green apples with the ceremonial-grade focus of Japanese Matcha.',
    flavorNotes: ['Crisp Green Apple', 'Earthy Matcha', 'Tart & Clean'],
    benefits: [
      { title: 'Zen Velocity', description: 'Matcha-derived L-Theanine for calm, laser-like focus.' },
      { title: 'Natural Surge', description: 'Combined caffeine sources for a multi-stage energy lift.' },
      { title: 'Detox Support', description: 'Chlorophyll-rich matcha for biological cleansing.' }
    ],
    nutrition: [
      { label: 'Calories', value: '12' },
      { label: 'Total Sugar', value: '0g' },
      { label: 'Caffeine', value: '190mg' },
      { label: 'Matcha', value: '250mg' }
    ]
  },
  {
    id: '06',
    name: 'NEON NEBULA',
    flavor: 'Grape & Dragonfruit',
    color: 'text-purple-400',
    accentColor: '#c084fc',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAy-3QEhbaxN_wGA7_z9A-qZOx3x7HkXsjUen3Nw_cdq-ng4ruN_EXOph6ksinV_2RRkwJAMTkRUWbu0h0SWzY6BmP0jLUuOBRoIyKR92p1MwBHlmxLg6BSdkaL4ZTovMPk0gnobnSTfzFxrtXOM69PzmIZ8NGCC9Smc2WNOwYsgnejUcRobGmamHg4eTqfyo-xsGCL5JhndtucZfn0WoSwE8uD4KJeWom1aNseeumNRGcAYLvT8155sdvWSV1nJRiVH0bbOFDaROU',
    description: 'A cosmic surge from the deep past. Neon Nebula blends the deep sweetness of concord grapes with the exotic, electrifying snap of dragonfruit.',
    flavorNotes: ['Concord Grape', 'Electric Dragonfruit', 'Cosmic Sweetness'],
    benefits: [
      { title: 'Neural Warp', description: 'High-speed cognitive processing with zero lag.' },
      { title: 'Antioxidant Pulse', description: 'Anthocyanin-rich profile for biological resilience.' },
      { title: 'Smooth Orbit', description: 'Sustained energy without the atmospheric re-entry crash.' }
    ],
    nutrition: [
      { label: 'Calories', value: '15' },
      { label: 'Total Sugar', value: '0g' },
      { label: 'Caffeine', value: '200mg' },
      { label: 'Antioxidants', value: 'High' }
    ]
  },
  {
    id: '07',
    name: 'FOSSIL FUEL',
    flavor: 'Mocha & Salted Caramel',
    color: 'text-amber-600',
    accentColor: '#d97706',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASGcT8QnRGfP04zfobSxvbv75pmQ9d4mM2fpnkUTHQ-XRrhoyGbA89sOpqTlJ3zov7mV3EcLAZe6X1s1nmUlHmJ5XhgR6anzHMgZnvXztR5RW-30KsHq3Bc3Gc16XoLjFNv1XdqQefVNKjtAdcIaG-1px8Y_xImsa0CgMuagGsJxQldqZIFNjSfkZk-3nDD_Pa7A1cXUdSh-m8Nk2H7EBMttaSV-cz1W89zJ91MSVmQqKFuKkvg7phWldQvhOZ_N7xTOBv2FTmft8',
    description: 'The ultimate morning hunt companion. Fossil Fuel combines rich, dark roasted mocha with a decadent salted caramel finish for a heavy-hitting energy boost.',
    flavorNotes: ['Dark Roast Mocha', 'Salted Caramel', 'Velvety Finish'],
    benefits: [
      { title: 'Apex Alertness', description: 'Double-stacked caffeine sources for maximum morning dominance.' },
      { title: 'Neural Comfort', description: 'Rich flavor profile to satisfy the primal palate.' },
      { title: 'Steady Burn', description: 'Complex carbohydrates for a long-lasting metabolic fire.' }
    ],
    nutrition: [
      { label: 'Calories', value: '20' },
      { label: 'Total Sugar', value: '0g' },
      { label: 'Caffeine', value: '220mg' },
      { label: 'B-Vitamins', value: '200% DV' }
    ]
  },
  {
    id: '08',
    name: 'RAPTOR RUSH',
    flavor: 'Watermelon & Lime',
    color: 'text-pink-500',
    accentColor: '#ec4899',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC7r4LNd0l7h-NTYoiNZHtQqrirg8IKEowkoDZN-E0lsONzqkoawr81AbcPvMhnDXckEME6ucreVeZ39rcYhTRAJqDjp2XywN8126x6iqp_Y6HYDU_m3GzNqQwTlYOJWmsh0bpY28f5SZhHOVZtipqNWwMTU34QJrRXCvcg3jbesdXxcG8AbCkR7aYAbeUKFVS75HGEivIJ3lNYNVwKStgYwkndObp7_Zvs27tLrAIbopJbHCraZZZB3ApabsqyJR5Y8lj4LQ0LbNg',
    description: 'High-speed hydration for the agile predator. Raptor Rush delivers a refreshing blast of sun-ripened watermelon with a sharp, predatory lime finish.',
    flavorNotes: ['Sun-Ripened Watermelon', 'Zesty Lime', 'Refreshing Snap'],
    benefits: [
      { title: 'Agile Energy', description: 'Lightweight formula for rapid absorption and immediate action.' },
      { title: 'Hydration Strike', description: 'Advanced electrolyte matrix for superior fluid balance.' },
      { title: 'Clean Kill', description: 'Zero artificial aftertaste. Just pure, refreshing power.' }
    ],
    nutrition: [
      { label: 'Calories', value: '8' },
      { label: 'Total Sugar', value: '0g' },
      { label: 'Caffeine', value: '180mg' },
      { label: 'Electrolytes', value: '400mg' }
    ]
  }
];
