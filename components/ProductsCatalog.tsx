'use client';

import { products } from '@/data/products';
import { ProductCard } from './ProductCard';

export const ProductsCatalog = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: '#032b4a' }}
          >
            Selected Premium Products
          </h2>
          <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#b29559' }}></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed mb-2">
            Our catalog includes a curated selection of luxury creams, exclusive perfumes, executive clothing collections, and fine accessories.
          </p>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            Each product is personally selected to guarantee maximum quality and exclusivity. All are available for direct WhatsApp orders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
