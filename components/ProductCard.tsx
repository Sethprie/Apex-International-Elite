'use client';

import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100"
      style={{
        borderColor: 'rgba(3, 43, 74, 0.1)',
      }}
    >
      <div className="relative h-64 w-full overflow-hidden bg-gray-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: '#032b4a' }}>
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed min-h-20">{product.description}</p>

        <div className="flex items-center justify-between">
          <span
            className="text-2xl font-bold"
            style={{ color: '#b29559' }}
          >
            ${product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </span>
          <button
            onClick={handleAddToCart}
            className="rounded-2xl px-6 py-2 text-white font-semibold transition-all duration-300 hover:shadow-lg active:scale-95"
            style={{
              backgroundColor: '#032b4a',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#051f3a';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#032b4a';
            }}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};
