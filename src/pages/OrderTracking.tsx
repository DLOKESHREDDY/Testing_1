import React, { useState } from 'react';
import { Search, Package, MapPin, Calendar, Truck } from 'lucide-react';

interface TrackingUpdate {
  status: string;
  location: string;
  timestamp: string;
  description: string;
}

const OrderTracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState<{
    status: string;
    updates: TrackingUpdate[];
    estimatedDelivery: string;
  } | null>(null);

  const handleTracking = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    setTrackingData({
      status: 'In Transit',
      estimatedDelivery: '2024-03-10',
      updates: [
        {
          status: 'Out for Delivery',
          location: 'Local Delivery Center',
          timestamp: '2024-03-08 09:00 AM',
          description: 'Package is out for delivery'
        },
        {
          status: 'Arrived at Delivery Center',
          location: 'Mumbai Hub',
          timestamp: '2024-03-07 11:30 PM',
          description: 'Package arrived at local delivery center'
        },
        {
          status: 'In Transit',
          location: 'Delhi Sorting Facility',
          timestamp: '2024-03-06 03:15 PM',
          description: 'Package is in transit to the next facility'
        },
        {
          status: 'Picked Up',
          location: 'Ullavapadu',
          timestamp: '2024-03-05 10:00 AM',
          description: 'Package picked up by courier partner'
        }
      ]
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>

      {/* Search Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form onSubmit={handleTracking} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Enter your tracking number"
            className="flex-1 p-2 border rounded-md"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Track
          </button>
        </form>
      </div>

      {/* Tracking Results */}
      {trackingData && (
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Status Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Status</span>
              </div>
              <p>{trackingData.status}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Estimated Delivery</span>
              </div>
              <p>{new Date(trackingData.estimatedDelivery).toLocaleDateString()}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-green-600" />
                <span className="font-semibold">Current Location</span>
              </div>
              <p>{trackingData.updates[0].location}</p>
            </div>
          </div>

          {/* Tracking Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-green-200" />
            {trackingData.updates.map((update, index) => (
              <div key={index} className="relative pl-12 pb-8 last:pb-0">
                <div className="absolute left-2 top-2 w-4 h-4 bg-green-600 rounded-full border-4 border-green-100" />
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Truck className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">{update.status}</span>
                  </div>
                  <p className="text-gray-600 mb-1">{update.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{update.location}</span>
                    <span>{update.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;