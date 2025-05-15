import React from 'react';

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto prose prose-green">
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using Ulavapadu Mangoes, you accept and agree to be bound by these
          Terms and Conditions. If you do not agree, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Product Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>All products are subject to availability</li>
          <li>We reserve the right to limit quantities</li>
          <li>Product images are representative and may vary slightly</li>
          <li>Prices are subject to change without notice</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Order Acceptance</h2>
        <p>We reserve the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Accept or decline any order</li>
          <li>Cancel orders due to pricing errors</li>
          <li>Limit quantities per customer</li>
          <li>Verify information before processing orders</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>All prices are in Indian Rupees (INR)</li>
          <li>Payment is required at the time of order</li>
          <li>We accept various payment methods including UPI and cards</li>
          <li>All transactions are secure and encrypted</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Shipping and Delivery</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Delivery times are estimates only</li>
          <li>We are not responsible for delays beyond our control</li>
          <li>Risk of loss transfers upon delivery</li>
          <li>Shipping charges are non-refundable</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Returns and Refunds</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Damaged products must be reported within 24 hours</li>
          <li>Photo evidence required for quality issues</li>
          <li>Refunds processed within 7-10 business days</li>
          <li>Shipping charges are non-refundable</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
        <p>
          All content on this website is protected by copyright and other intellectual
          property rights owned by Ulavapadu Mangoes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
        <p>For any questions regarding these terms, contact us at:</p>
        <ul className="list-none pl-6 mb-4">
          <li>Email: ulavapadudelights@gmail.com</li>
          <li>Phone: +91 8096497872</li>
        </ul>
      </section>

      <p className="text-sm text-gray-600 mt-8">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default TermsConditions;