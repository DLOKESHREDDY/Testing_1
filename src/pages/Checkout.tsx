import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useCart } from '../store/cart';
import { CreditCard, QrCode } from 'lucide-react';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const calculateDeliveryFee = () => {
    const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    if (totalQuantity >= 20) {
      return 0;
    } else if (totalQuantity <= 10) {
      return 60;
    } else {
      return 0;
    }
  };

  const deliveryFee = calculateDeliveryFee();
  const finalTotal = total + deliveryFee;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const orderData = {
        amount: Math.round(finalTotal * 100),
        currency: 'INR',
        receipt: `order_${Date.now()}`,
        shipping: formData,
        items: items.map(item => ({
          ...item,
          subtotal: item.product.price * item.quantity
        })),
        deliveryFee
      };

      const options = {
        key: 'rzp_live_SwdU7axxoxjgwX',
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Ulavapadu Mangoes',
        description: `Order - ${items.reduce((acc, item) => acc + item.quantity, 0)}kg Mangoes`,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          shipping_address: `${formData.address}, ${formData.city} - ${formData.postalCode}`,
          order_items: items.map(item => 
            `${item.product.name} - ${item.quantity}kg - ₹${item.product.price * item.quantity}`
          ).join(', '),
          delivery_fee: `₹${deliveryFee}`,
          total_quantity: `${items.reduce((acc, item) => acc + item.quantity, 0)}kg`
        },
        handler: async function(response: any) {
          try {
            const orders = JSON.parse(localStorage.getItem('orders') || '[]');
            const newOrder = {
              id: response.razorpay_payment_id,
              items,
              total: finalTotal,
              deliveryFee,
              shipping: formData,
              status: 'completed',
              date: new Date().toISOString(),
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id
            };
            localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));

            const message = `New order received!\n\nOrder ID: ${response.razorpay_order_id}\nPayment ID: ${response.razorpay_payment_id}\nAmount: ₹${finalTotal}\nDelivery Fee: ₹${deliveryFee}\n\nCustomer Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.address}, ${formData.city} - ${formData.postalCode}\n\nItems:\n${items.map(item => `${item.product.name} - ${item.quantity}kg - ₹${item.product.price * item.quantity}`).join('\n')}\n\nTotal Quantity: ${items.reduce((acc, item) => acc + item.quantity, 0)}kg`;
            window.open(`https://wa.me/918096497872?text=${encodeURIComponent(message)}`, '_blank');

            window.dispatchEvent(new CustomEvent('orderCompleted', { detail: newOrder }));

            clearCart();
            toast.success('Payment successful! Order confirmed.');
            navigate('/');
          } catch (error) {
            console.error('Order processing failed:', error);
            toast.error('Order processing failed. Please contact support.');
          }
        },
        modal: {
          ondismiss: function() {
            setLoading(false);
          }
        },
        theme: {
          color: '#16a34a'
        }
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Payment initialization failed:', error);
      toast.error('Payment initialization failed. Please try again.');
      setLoading(false);
    }
  };

  if (items.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Delivery Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                'Processing...'
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  <QrCode className="w-5 h-5" />
                  Pay ₹{finalTotal.toFixed(2)}
                </>
              )}
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between py-2">
                <span>
                  {item.product.name} x {item.quantity}kg
                </span>
                <span>₹{(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            <div className="border-t mt-4 pt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold mt-2">
                <span>Total</span>
                <span>₹{finalTotal.toFixed(2)}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                * Prices include all applicable taxes
              </p>
            </div>
          </div>

          <div className="mt-6 bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Secure Payment</h3>
            <p className="text-sm text-gray-600">
              All transactions are secure and encrypted. We accept UPI payments through QR code,
              credit cards, debit cards, and net banking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;