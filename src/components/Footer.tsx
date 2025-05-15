import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300">
              Ulavapadu Mangoes brings the finest Banginapalli mangoes directly from our orchards to your table. We ensure quality, freshness, and natural ripening.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-gray-300 hover:text-white">Wishlist</Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-white">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/shipping-delivery" className="text-gray-300 hover:text-white">Shipping Info</Link>
              </li>
              <li>
                <Link to="/cancellation-refund" className="text-gray-300 hover:text-white">Refund Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-gray-300">+91 8096497872</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-gray-300">ulavapadudelights@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-gray-300">Ulavapadu, Andhra Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-800">
          <div className="text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Ulavapadu Mangoes. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;