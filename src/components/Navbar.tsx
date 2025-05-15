import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, Heart, X, MessageCircle } from 'lucide-react';
import { useCart } from '../store/cart';
import { useWishlist } from '../store/wishlist';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCart(state => state.items);
  const wishlistItems = useWishlist(state => state.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi, I'm interested in ordering mangoes!");
    window.open(`https://wa.me/918096497872?text=${message}`, '_blank');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div onClick={handleLogoClick} className="cursor-pointer">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-green-600" onClick={handleNavClick}>
              Home
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-green-600" onClick={handleNavClick}>
              Products
            </Link>
            <button
              onClick={handleWhatsAppClick}
              className="text-gray-600 hover:text-green-600 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </button>
            <Link to="/wishlist" className="relative text-gray-600 hover:text-green-600" onClick={handleNavClick}>
              <Heart className="w-6 h-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-gray-600 hover:text-green-600" onClick={handleNavClick}>
              <ShoppingCart className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4 px-4 z-50">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-green-600"
                onClick={handleNavClick}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-gray-600 hover:text-green-600"
                onClick={handleNavClick}
              >
                Products
              </Link>
              <button
                onClick={() => {
                  handleWhatsAppClick();
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-green-600 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Order via WhatsApp
              </button>
              <Link 
                to="/wishlist" 
                className="flex items-center justify-between text-gray-600 hover:text-green-600"
                onClick={handleNavClick}
              >
                <span className="flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Wishlist
                </span>
                {wishlistItems.length > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItems.length}
                  </span>
                )}
              </Link>
              <Link 
                to="/cart" 
                className="flex items-center justify-between text-gray-600 hover:text-green-600"
                onClick={handleNavClick}
              >
                <span className="flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Cart
                </span>
                {itemCount > 0 && (
                  <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;