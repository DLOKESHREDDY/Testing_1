import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RAZORPAY_KEY = 'rzp_live_FTXmt9EmjJpyPs';
const RAZORPAY_SECRET = 'Y16wxWo50Duj20slpgYX6hIi';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Max-Age': '86400',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    });
  }

  try {
    const { amount, currency = 'INR', receipt } = await req.json();

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