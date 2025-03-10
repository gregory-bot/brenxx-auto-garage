import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClickOutside = (e) => {
    if (isOpen && !e.target.closest('.mobile-menu') && !e.target.closest('button')) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src="https://i.postimg.cc/gkCftp2m/free-photo-of-pair-of-brand-sneakers-removebg-preview.png" alt="walkwise shoe store" className="h-14 w-14 mr-2" />
            <Link to="/" className="text-xl">
              <span className="text-blue-500">WalkWise shoe store</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link" style={{ fontFamily: 'Courier New, monospace' }}>Home</Link>
            <Link to="/services" className="nav-link" style={{ fontFamily: 'Courier New, monospace' }}>Services</Link>
            <Link to="/aboutus" className="nav-link" style={{ fontFamily: 'Courier New, monospace' }}>AboutUs</Link>
            <Link to="/contact" className="nav-link" style={{ fontFamily: 'Courier New, monospace' }}>Contact</Link>
            <Link to="/offers" className="nav-link" style={{ fontFamily: 'Courier New, monospace' }}>Offers</Link> {/* Added Offers link */}
            <Link to="/cart" className="relative">
              <FiShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xl">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => handleNavigation('/cart')} 
              className="relative p-2"
            >
              <FiShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 bg-green-600 rounded-full w-10 h-10 flex items-center justify-center"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Left Side */}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-blue-400 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } z-50 mobile-menu`}
          style={{ width: '230px' }}
        >
          <div className="flex flex-col items-start p-6 space-y-6">
            <button 
              onClick={() => handleNavigation('/')} 
              className="nav-link"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/services')} 
              className="nav-link"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavigation('/aboutus')} 
              className="nav-link"
            >
              AboutUs
            </button>
            <button 
              onClick={() => handleNavigation('/contact')} 
              className="nav-link"
            >
              Contact
            </button>
            <button 
              onClick={() => handleNavigation('/offers')} 
              className="nav-link"
            >
              Offers
            </button> 
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;