export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Gold Facial Cream',
    description: 'Luxury moisturizing cream with colloidal gold and Damascus rose extract. Provides elasticity and radiance to the skin with 30 days of continuous use.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop'
  },
  {
    id: '2',
    name: 'Elite Anti-Aging Serum',
    description: 'Concentrated serum with pure vitamin C, hyaluronic acid, and bioactive peptides. Reduces wrinkles, improves firmness, and deeply rejuvenates the skin. Visible results in 14 days.',
    price: 125,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop'
  },
  {
    id: '3',
    name: 'Apex Signature Perfume 100ml',
    description: 'Exclusive Eau de Parfum with notes of amber, sandalwood, and musk. Sophisticated aroma that lasts up to 12 hours. Handmade artisanal crystal bottle from Grasse, France.',
    price: 185,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&fit=crop'
  },
  {
    id: '4',
    name: 'Executive Luxury Blazer',
    description: 'Premium merino wool blazer with perfect Italian cut. Available in navy blue (#032b4a) and pearl gray. Ideal for executives, conferences, and business events.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
  },
  {
    id: '5',
    name: 'Luxury Leather Briefcase',
    description: 'Handcrafted Italian leather briefcase with gold-plated hardware. Multiple compartments for laptop and documents. Water-resistant finish. Perfect for business professionals.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
  },
  {
    id: '6',
    name: 'Premium Silk Tie Set',
    description: 'Set of three premium silk ties with classic patterns. Hand-stitched edges. Colors include navy blue, burgundy, and silver gray. Perfect complement to executive attire.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&h=500&fit=crop'
  }
];
