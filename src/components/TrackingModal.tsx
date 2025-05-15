import React, { useState } from 'react';
import { X, Package, MapPin, Calendar, Truck } from 'lucide-react';
import { trackPackage, TrackingResponse } from '../services/delhivery';
import { toast } from 'react-hot-toast';

interface TrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrackingModal: React.FC<TrackingModalProps> = ({ isOpen, onClose }) => {
  const [trackingId, setTrackingId] = useState('');
  const [loading, setLoading] = useState(false);
  const [trackingData, setTrackingData] = useState<TrackingResponse | null>(null);

  if (!isOpen) return null;

  const handleTracking = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await trackPackage(trackingId);
      setTrackingData(data);
    } catch (error) {
      toast.error('Failed to fetch tracking information');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Track Your Package</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleTracking} className="mb-6">
          <div className="flex gap-2">
            <input
              type="text"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              placeholder="Enter tracking number"
              className="flex-1 border rounded-lg px-4 py-2"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? 'Tracking...' : 'Track'}
            </button>
          </div>
        </form>

        {trackingData && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  <span className="font-semibold">Expected Delivery</span>
                </div>
                <p>{new Date(trackingData.expectedDeliveryDate).toLocaleDateString()}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span className="font-semibold">Delivery Address</span>
                </div>
                <p className="truncate">{trackingData.deliveryAddress}</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Tracking History</h3>
              <div className="space-y-4">
                {trackingData.scans.map((scan, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <Truck className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">{scan.scanType}</p>
                      <p className="text-sm text-gray-600">{scan.scannedLocation}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(scan.scanDateTime).toLocaleString()}
                      </p>
                      {scan.instructions && (
                        <p className="text-sm text-gray-600 mt-1">{scan.instructions}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackingModal;