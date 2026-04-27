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
      .join('%0A');

    const whatsappMessage = `Hello, I would like to place an order:%0A%0A${message}%0A%0ATotal: $${formatPrice(total)}`;
    const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

    window.open(whatsappUrl, '_blank');
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
                <p className="text-center text-gray-500 py-8">The cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="flex-1">
                        <h3
                          className="font-semibold text-sm"
                          style={{ color: '#032b4a' }}
                        >
                          {item.name}
                        </h3>
                        <p
                          className="text-sm font-bold mt-1"
                          style={{ color: '#b29559' }}
                        >
                          ${formatPrice(item.price * item.quantity)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Minus size={16} style={{ color: '#032b4a' }} />
                        </button>
                        <span className="w-6 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <Plus size={16} style={{ color: '#032b4a' }} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-2 p-1 hover:bg-red-100 rounded transition-colors"
                        >
                          <X size={16} className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div
                className="border-t p-6"
                style={{ borderColor: '#e5e7eb' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold" style={{ color: '#032b4a' }}>
                    Total:
                  </span>
                  <span
                    className="text-2xl font-bold"
                    style={{ color: '#b29559' }}
                  >
                    ${formatPrice(total)}
                  </span>
                </div>

                <button
                  onClick={handleOrder}
                  className="w-full py-4 rounded-2xl text-white font-bold transition-all duration-300 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#b29559' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#a68349';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#b29559';
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.946 1.347l-.355.206-.368-.06C3.904 6.859 3.154 5.308 3.154 3.659c0-3.184 2.759-5.753 6.155-5.753 1.685 0 3.263.671 4.441 1.882.312.312.623.641.923.989.3-.348.611-.677.923-.989 1.178-1.211 2.756-1.882 4.441-1.882 3.396 0 6.155 2.569 6.155 5.753 0 1.649-.75 3.2-2.026 4.227l-.368.06-.355-.206c-1.527-.927-3.262-1.347-4.946-1.347h-.004c-.788 0-1.547.178-2.268.525-.721-.347-1.48-.525-2.268-.525z"/>
                  </svg>
                  Send Order via WhatsApp
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
