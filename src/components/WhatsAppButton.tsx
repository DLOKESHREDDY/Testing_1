import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useCart } from '../store/cart';

const WhatsAppButton = () => {
  const { items, total } = useCart();
  
  const handleWhatsAppClick = () => {
    const itemsList = items.map(item => 
      `${item.product.name} - ${item.quantity}kg - ₹${item.product.price * item.quantity}`
    ).join('\n');
    
    const message = encodeURIComponent(
      `Hi, I would like to order:\n\n${itemsList}\n\nTotal: ₹${total}`
    );
    window.open(`https://wa.me/918096497872?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50 flex items-center gap-2 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out">
        Order via WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppButton;