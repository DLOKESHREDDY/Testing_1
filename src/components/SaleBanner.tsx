import React from 'react';
import { X, MapPin, Phone } from 'lucide-react';

const SaleBanner = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-green-600 text-white py-2 px-4 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-center font-medium flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Currently delivering to Hyderabad and Bangalore locations in bulk!
        </p>
        <p className="text-center font-medium flex items-center gap-2">
          <Phone className="w-4 h-4" />
          For bulk orders: 8096497872
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-green-100"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default SaleBanner;