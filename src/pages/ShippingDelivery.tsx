import React, { useState } from 'react';
import { Search, Truck, Package, Clock } from 'lucide-react';

const courierServices = [
  { id: 'delhivery', name: 'Delhivery', logo: '🚚' },
  { id: 'dtdc', name: 'DTDC', logo: '📦' },
  { id: 'professional', name: 'Professional Courier', logo: '🚛' }
];

const ShippingDelivery = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [selectedCourier, setSelectedCourier] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTracking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate tracking API call
    setTrackingResult({
      status: 'In Transit',
      location: 'Mumbai Sorting Center',
      lastUpdate: new Date().toLocaleString(),
      estimatedDelivery: '2 days'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Shipping & Delivery</h1>

      {/* Tracking Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Track Your Order</h2>
        <form onSubmit={handleTracking} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Courier
              </label>
              <select
                value={selectedCourier}
                onChange={(e) => setSelectedCourier(e.target.value)}
                className="w-full p-2 border rounded-md"
                required
              >
                <option value="">Select a courier service</option>
                {courierServices.map(courier => (
                  <option key={courier.id} value={courier.id}>
                    {courier.logo} {courier.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tracking Number
              </label>
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Enter tracking number"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Track Package
          </button>
        </form>

        {trackingResult && (
          <div className="mt-8 border-t pt-6">
            <h3 className="text-xl font-semibold mb-4">Tracking Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">Status</span>
                </div>
                <p>{trackingResult.status}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">Location</span>
                </div>
                <p>{trackingResult.location}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">Estimated Delivery</span>
                </div>
                <p>{trackingResult.estimatedDelivery}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Shipping Information */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Shipping Information</h2>
        
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-3">Delivery Partners</h3>
            <p className="text-gray-600 mb-4">
              We partner with India's leading courier services to ensure safe and timely delivery:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delhivery - Premium express delivery</li>
              <li>DTDC - Nationwide coverage</li>
              <li>Professional Courier - Specialized handling</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Delivery Timeline</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Metro Cities: 2-3 business days</li>
              <li>Tier 2 Cities: 3-4 business days</li>
              <li>Other Locations: 4-5 business days</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Shipping Charges</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free shipping on orders above ₹2000</li>
              <li>Standard shipping: ₹100 for orders below ₹2000</li>
              <li>Express delivery: Additional ₹200</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-3">Package Care</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Temperature-controlled packaging</li>
              <li>Shock-absorbent materials</li>
              <li>Real-time temperature monitoring</li>
              <li>Insurance coverage for all shipments</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingDelivery;