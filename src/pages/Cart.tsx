import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, Gift, AlertCircle, ShoppingBag } from 'lucide-react';
import { useCart } from '../store/cart';
import { toast } from 'react-hot-toast';

const Cart = () => {
  const { items, total, removeItem, updateQuantity } = useCart();
  const navigate = useNavigate();

  const calculateDeliveryFee = () => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    if (totalQuantity >= 20) {
      return 0; // Free delivery for orders over 20kg
    } else if (totalQuantity <= 10) {
      return 60; // ₹60 delivery fee for orders up to 10kg
    } else {
      return 0; // Free delivery for orders between 10kg and 20kg
    }
  };

  const deliveryFee = calculateDeliveryFee();
  const finalTotal = total + deliveryFee;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity >= 5) {
      updateQuantity(productId, newQuantity);
    } else {
      toast.error('Minimum order quantity is 5kg');
    }
  };

  const handleProceedToCheckout = () => {
    const hasInsufficientQuantity = items.some(item => item.quantity < 5);
    if (hasInsufficientQuantity) {
      toast.error('Minimum order quantity is 5kg for each product');
      return;
    }
    navigate('/checkout');
  };

  const specialOffers = [
    {
      minAmount: 3000,
      reward: '3kg Banginapalli Mangoes FREE',
      description: 'Order above ₹3,000 and get 3kg of Banginapalli mangoes absolutely free!'
    },
    {
      minAmount: 5000,
      reward: '5kg Banginapalli Mangoes FREE',
      description: 'Spend ₹5,000 or more and receive 5kg of Banginapalli mangoes free!'
    }
  ];

  const applicableOffers = specialOffers.filter(offer => total >= offer.minAmount);
  const nextOffer = specialOffers.find(offer => total < offer.minAmount);

  // Mobile Cart Button
  const MobileCartButton = () => (
    <Link
      to="/cart"
      className="fixed bottom-20 right-6 md:hidden bg-green-500 text-white p-4 rounded-full shadow-lg z-50"
    >
      <ShoppingBag className="w-6 h-6" />
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {items.length}
        </span>
      )}
    </Link>
  );

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="text-green-600 hover:text-green-700"
        >
          Continue Shopping
        </Link>
        <MobileCartButton />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      {/* Special Offers Banner */}
      <div className="bg-green-50 rounded-lg p-4 md:p-6 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Gift className="w-6 h-6 text-green-600" />
          <h2 className="text-xl font-semibold text-green-800">Special Offers</h2>
        </div>
        {applicableOffers.length > 0 ? (
          <div className="space-y-2">
            <p className="text-green-700 font-semibold">
              Congratulations! You've unlocked:
            </p>
            {applicableOffers.map((offer, index) => (
              <div key={index} className="flex items-center gap-2 text-green-600">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>{offer.reward}</p>
              </div>
            ))}
          </div>
        ) : nextOffer && (
          <div className="text-gray-600">
            <p>Add ₹{(nextOffer.minAmount - total).toFixed(2)} more to get {nextOffer.reward}!</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: `${(total / nextOffer.minAmount) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        {items.map((item) => (
          <div key={item.product.id} className="flex flex-col md:flex-row md:items-center py-4 border-b">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-full md:w-24 h-48 md:h-24 object-cover rounded mb-4 md:mb-0"
            />
            <div className="flex-1 md:ml-4">
              <h3 className="text-lg font-semibold">{item.product.name}</h3>
              <p className="text-gray-600">₹{item.product.price}/kg</p>
            </div>
            <div className="flex flex-row md:flex-col items-center justify-between md:space-y-4 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleQuantityChange(item.product.id, Math.max(5, item.quantity - 1))}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center">{item.quantity}kg</span>
                <button
                  onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
        
        <div className="mt-6 border-t pt-4">
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>₹{finalTotal.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <button
              onClick={handleProceedToCheckout}
              className="w-full md:w-auto bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors text-center"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
      <MobileCartButton />
    </div>
  );
};

export default Cart;