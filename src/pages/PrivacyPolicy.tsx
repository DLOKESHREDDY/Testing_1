import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto prose prose-green">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <p>When you visit Ulavapadu Mangoes, we collect:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Personal information (name, email, phone number, shipping address)</li>
          <li>Payment information (processed securely through our payment partners)</li>
          <li>Order history and preferences</li>
          <li>Device information and browsing data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Process and fulfill your orders</li>
          <li>Send order updates and shipping notifications</li>
          <li>Improve our products and services</li>
          <li>Communicate about promotions and updates</li>
          <li>Prevent fraud and enhance security</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
        <p>We share your information with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Shipping partners to deliver your orders</li>
          <li>Payment processors to handle transactions</li>
          <li>Service providers who assist our operations</li>
        </ul>
        <p>We never sell your personal information to third parties.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p>We implement industry-standard security measures to protect your data:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>SSL encryption for all transactions</li>
          <li>Secure payment processing</li>
          <li>Regular security audits</li>
          <li>Limited access to personal information</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>For privacy-related concerns, contact us at:</p>
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

export default PrivacyPolicy;