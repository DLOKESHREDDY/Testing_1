import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/images/mango-logo.png" 
        alt="Mango Logo" 
        className="w-20 h-12 object-contain"
      />
      <div className="font-bold text-xl">
        <span className="text-green-600">Ulavapadu</span>
        <span className="text-yellow-500">Mangoes</span>
      </div>
    </div>
  );
};

export default Logo;