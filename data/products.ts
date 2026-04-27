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
    name: 'Crema Facial Premium Gold',
    description: 'Crema hidratante de lujo con oro coloidal y extracto de rosa de Damasco. Proporciona elasticidad y luminosidad a la piel en 30 días de uso continuo.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop'
  },
  {
    id: '2',
    name: 'Serum Anti-Envejecimiento Elite',
    description: 'Serum concentrado con vitamina C pura, ácido hialurónico y péptidos bioactivos. Reduce arrugas, mejora firmeza y rejuvenece la piel en profundidad. Resultados visibles en 14 días.',
    price: 125,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=500&fit=crop'
  },
  {
    id: '3',
    name: 'Perfume Apex Signature 100ml',
    description: 'Eau de Parfum exclusiva con notas de ámbar, sándalo y almizcaro. Aroma sofisticado que dura hasta 12 horas. Frasco de cristal artesanal hecho a mano en Grasse, Francia.',
    price: 185,
    image: 'https://images.unsplash.com/photo-1595957511227-e8390cf3f8ad?w=500&h=500&fit=crop'
  },
  {
    id: '4',
    name: 'Colección Luxury - Blazer Ejecutivo',
    description: 'Blazer en lana merino premium con corte italiano perfecto. Disponible en azul marino oscuro (#032b4a) y gris perla. Ideal para ejecutivos, conferencias y eventos de negocios.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1591047990975-2ae5b36ec3b9?w=500&h=500&fit=crop'
  },
  {
    id: '5',
    name: 'Reloj de Oro Blanco Suizo',
    description: 'Reloj de cuarzo suizo en oro blanco de 18 quilates con cristal de zafiro resistente a rayos. Movimiento precisión cronógrafo. Garantía de 10 años. Diseño minimalista atemporal.',
    price: 2450,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&h=500&fit=crop'
  }
];
