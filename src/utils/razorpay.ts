import { loadScript } from './loadScript';

interface RazorpayOptions {
  amount: number;
  currency: string;
  order: any;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
    shipping_address: string;
  };
  theme: {
    color: string;
  };
  onSuccess: (response: any) => void;
  onError: (error: string) => void;
}

export const initializeRazorpay = async (options: RazorpayOptions) => {
  try {
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
    if (!res) {
      throw new Error('Razorpay SDK failed to load');
    }

    const rzp = new (window as any).Razorpay({
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: options.amount,
      currency: options.currency || 'INR',
      name: 'Ulavapadu Mangoes',
      description: 'Fresh Mangoes Purchase',
      prefill: options.prefill,
      notes: options.notes,
      theme: options.theme,
      handler: function(response: any) {
        try {
          const orders = JSON.parse(localStorage.getItem('orders') || '[]');
          const newOrder = {
            id: response.razorpay_payment_id,
            ...options.order,
            status: 'completed',
            date: new Date().toISOString(),
            paymentId: response.razorpay_payment_id,
            upiId: response.razorpay_payment_id
          };
          localStorage.setItem('orders', JSON.stringify([...orders, newOrder]));
          
          // Dispatch a custom event for order completion
          window.dispatchEvent(new CustomEvent('orderCompleted', { detail: newOrder }));

          if (options.onSuccess) {
            options.onSuccess(response);
          }
        } catch (error) {
          console.error('Payment verification failed:', error);
          if (options.onError) {
            options.onError('Payment verification failed');
          }
        }
      }
    });

    rzp.open();
    return rzp;
  } catch (error) {
    console.error('Razorpay initialization failed:', error);
    throw error;
  }
};