'use client';

import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { X, Minus, Plus } from 'lucide-react';

export const ShoppingCart = () => {
  const { items, updateQuantity, removeItem, total, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleOrder = () => {
    if (items.length === 0) return;

    const message = items
      .map((item) => `${item.name} (Quantity: ${item.quantity})`)
      .join('\n');

    const subject = 'New Order from Apex International Elite Website';
    const body = `Order Details:\n\n${message}\n\nTotal: $${formatPrice(total)}`;
    const mailtoUrl = `mailto:Apexinternationalelite@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    clearCart();
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón flotante del carrito */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center z-40 transition-all duration-300 hover:shadow-3xl active:scale-95"
        style={{ backgroundColor: '#b29559' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#a68349';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#b29559';
        }}
      >
        <div className="relative">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {items.length > 0 && (
            <span
              className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
            >
              {items.length}
            </span>
          )}
        </div>
      </button>

      {/* Panel del carrito */}
      {isOpen && (
        <div className="fixed inset-0 z-[70]">
          {/* Card del carrito - Menú desplegable desde la derecha */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out md:max-w-lg">
            {/* Header */}
            <div
              className="flex items-center justify-between p-6 border-b"
              style={{ backgroundColor: '#032b4a', borderColor: '#e5e7eb' }}
            >
              <h2 className="text-2xl font-bold text-white">My Order</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-opacity-80 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  The cart is empty
                </p>
              ) : (
                <>
                  {/* Items List */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <p className="text-gray-600">${formatPrice(item.price)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 ml-2"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  <div className="p-6 border-t">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xl font-semibold" style={{ color: '#032b4a' }}>
                        Total:
                      </span>
                      <span className="text-xl font-bold" style={{ color: '#032b4a' }}>
                        ${formatPrice(total)}
                      </span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => clearCart()}
                        className="flex-1 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Clear Cart
                      </button>
                      <button
                        onClick={handleOrder}
                        className="flex-1 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg"
                        style={{ backgroundColor: '#b29559' }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#a68349';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#b29559';
                        }}
                      >
                        Send Order via Email
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer */}
          </div>
        </div>
      )}
    </>
  );
};
