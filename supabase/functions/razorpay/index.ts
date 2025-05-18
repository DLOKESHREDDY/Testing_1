import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RAZORPAY_KEY = 'rzp_live_SwdU7axxoxjgwX';
const RAZORPAY_SECRET = 'xcVfMMzYhsR1Fs2dV8u62axs';
const WHATSAPP_NUMBER = '918096497872';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400',
};

const sendWhatsAppNotification = async (orderDetails: any) => {
  const items = orderDetails.items.map((item: any) => 
    `${item.product.name} - ${item.quantity}kg - ₹${item.product.price * item.quantity}`
  ).join('\n');

  const message = `New Order Received!\n\nOrder ID: ${orderDetails.orderId}\nCustomer: ${orderDetails.shipping.name}\nPhone: ${orderDetails.shipping.phone}\nEmail: ${orderDetails.shipping.email}\nAddress: ${orderDetails.shipping.address}, ${orderDetails.shipping.city} - ${orderDetails.shipping.postalCode}\n\nItems:\n${items}\n\nTotal Amount: ₹${orderDetails.amount/100}\nPayment ID: ${orderDetails.paymentId}`;

  try {
    const response = await fetch(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`);
    return response.ok;
  } catch (error) {
    console.error('WhatsApp notification error:', error);
    return false;
  }
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    });
  }

  try {
    const { amount, currency = 'INR', receipt, shipping, items } = await req.json();

    // Create Razorpay order
    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${btoa(`${RAZORPAY_KEY}:${RAZORPAY_SECRET}`)}`,
      },
      body: JSON.stringify({
        amount,
        currency,
        receipt,
        payment_capture: 1,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Razorpay API error:', data);
      return new Response(
        JSON.stringify({ error: data.error?.description || 'Failed to create order' }),
        { 
          status: response.status,
          headers: { 
            'Content-Type': 'application/json',
            ...corsHeaders,
          }
        }
      );
    }

    // Store order details for verification
    const orderDetails = {
      orderId: data.id,
      amount,
      shipping,
      items,
      timestamp: new Date().toISOString()
    };

    // Send WhatsApp notification
    await sendWhatsAppNotification(orderDetails);

    return new Response(
      JSON.stringify(data),
      { 
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders,
        } 
      }
    );
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 400,
        headers: { 
          'Content-Type': 'application/json',
          ...corsHeaders,
        }
      }
    );
  }
});