import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Banginapalli Mangoes',
    description: 'The king of mangoes, known for its sweet taste and golden color.',
    price: 150,
    image: '/images/Banginpalle.jpg',
    category: 'Premium',
    weight: '5kg',
    inStock: true
  },
  {
    id: '2',
    name: 'Suvaranreka Mangoes',
    description: 'Premium variety known for its rich taste and perfect texture.',
    price: 170,
    image: '/images/SuvarnaRekha.png',
    category: 'Premium',
    weight: '5kg',
    inStock: true
  },
  {
    id: '3',
    name: 'Kobbari Mamidi',
    description: 'Sweet and juicy mangoes perfect for making coconut-based mango dishes.',
    price: 100,
    image: '/images/KobbariMamidi.jpg',
    category: 'Traditional',
    weight: '5kg',
    inStock: true
  },
  {
    id: '4',
    name: 'Cherukurasalu',
    description: 'Extra sweet variety perfect for making juices and desserts.',
    price: 160,
    image: '/images/CherukuRasalu.png',
    category: 'Special',
    weight: '5kg',
    inStock: true
  },
  {
    id: '5',
    name: 'Thiyamamidi',
    description: 'Traditional variety loved for its authentic taste.',
    price: 100,
    image: '/images/KobbariMamidi.jpg',
    category: 'Traditional',
    weight: '5kg',
    inStock: true
  },
  {
    id: '6',
    name: 'Pickle Mangoes',
    description: 'Perfect for making traditional pickles.',
    price: 80,
    image: '/images/PickelMango.png',
    category: 'Traditional',
    weight: '5kg',
    inStock: true
  },
  {
    id: '7',
    name: 'Bengaluru Mangoes',
    description: 'Special variety from Bangalore region.',
    price: 80,
    image: '/images/BangloreMangoes.png',
    category: 'Special',
    weight: '5kg',
    inStock: true
  },
  {
    id: '8',
    name: 'Pedha Rasallu',
    description: 'Large, juicy mangoes with rich flavor.',
    price: 160,
    image: '/images/PedhaRasallu.jfif',
    category: 'Premium',
    weight: '5kg',
    inStock: true
  },
  {
    id: '9',
    name: 'Chinna Rasallu',
    description: 'Small, sweet mangoes perfect for desserts.',
    price: 160,
    image: '/images/ChinnaRasallu.jfif',
    category: 'Premium',
    weight: '5kg',
    inStock: true
  }
];

export const reviews = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Best Banginapalli mangoes I have ever tasted. Will definitely order again!',
    language: 'en',
    date: '2024-02-15',
    verified: true
  },
  {
    id: '2',
    name: 'రాధిక',
    rating: 5,
    comment: 'చాలా బాగున్నాయి మామిడి పండ్లు. మా పిల్లలకి చాలా ఇష్టమైంది. తప్పకుండా మళ్ళీ ఆర్డర్ చేస్తాను.',
    language: 'te',
    date: '2024-02-10',
    verified: true
  },
  {
    id: '3',
    name: 'Priya Sharma',
    rating: 4,
    comment: 'Fresh and sweet mangoes. Packaging was also very good.',
    language: 'en',
    date: '2024-02-08',
    verified: true
  }
] as const;