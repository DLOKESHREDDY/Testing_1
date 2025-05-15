import React from 'react';
import { Truck, Shield, Award, Leaf } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Farm Fresh',
    description: 'Directly from our orchards to your doorstep within 24 hours'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Fully insured shipping with temperature-controlled packaging'
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Hand-picked and naturally ripened mangoes'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Express delivery across India with real-time tracking'
  }
];

const FeatureSection = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;