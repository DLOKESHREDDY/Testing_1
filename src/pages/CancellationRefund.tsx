import React from 'react';
import { Camera, Mail, AlertCircle, CheckCircle } from 'lucide-react';

const CancellationRefund = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Cancellation & Refund Policy</h1>

      {/* Quick Actions */}
      <div className="bg-green-50 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Report an Issue</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="mailto:ulavapadumangoes@gmail.com"
            className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
          >
            <Mail className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold">Email Us</h3>
              <p className="text-sm text-gray-600">ulavapadumangoes@gmail.com</p>
            </div>
          </a>
          <a
            href="https://wa.me/918096497872"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
          >
            <Camera className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-semibold">Send Photos</h3>
              <p className="text-sm text-gray-600">Via WhatsApp</p>
            </div>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Cancellation Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p>Orders can be cancelled before they are shipped. Once shipped, cancellations are not accepted.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p>Cancellation requests must be made within 2 hours of placing the order.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p>Full refund will be processed for cancelled orders within 5-7 business days.</p>
            </div>
          </div>
        </section>

        {/* Refund Policy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Refund Policy</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Quality Issues</p>
                <p className="text-gray-600">If you receive damaged or defective products:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Take clear photos of the damaged items</li>
                  <li>Email the photos to ulavapadumangoes@gmail.com</li>
                  <li>Include your order number and contact details</li>
                  <li>Report within 24 hours of delivery</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Refund Process</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Refunds are processed within 48 hours of approval</li>
                  <li>Money will be returned to the original payment method</li>
                  <li>Bank processing time: 5-7 business days</li>
                  <li>Shipping charges are non-refundable</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Non-refundable Cases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Non-refundable Cases</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Orders reported after 24 hours of delivery</li>
            <li>Products damaged due to customer handling</li>
            <li>Incorrect delivery address provided by customer</li>
            <li>Natural ripening variations in mangoes</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
          <p className="text-gray-700 mb-4">
            Our customer service team is available from 9:00 AM to 6:00 PM (IST) to assist you with any queries.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-green-600" />
                <span>ulavapadumangoes@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Camera className="w-5 h-5 text-green-600" />
                <span>WhatsApp: +91 8096497872</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CancellationRefund;