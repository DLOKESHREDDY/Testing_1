import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

interface PaymentFormProps {
  amount: number;
  onSuccess: () => void;
  onError: (error: string) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ amount, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)!,
      });

      if (error) {
        onError(error.message);
      } else {
        // Here you would typically send the paymentMethod.id to your server
        // to complete the payment
        console.log('Payment Method:', paymentMethod);
        onSuccess();
      }
    } catch (err) {
      onError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border rounded-md">
        <CardElement options={CARD_ELEMENT_OPTIONS} />
      </div>
      <button
        type="submit"
        disabled={!stripe || loading}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
      >
        {loading ? 'Processing...' : `Pay ₹${amount.toFixed(2)}`}
      </button>
    </form>
  );
};

export default PaymentForm;