import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FiMenu,
  FiX,
  FiTag,
  FiHome,
  FiInfo,
  FiMail,
  FiImage,
  FiTool,
  FiShoppingCart,
  FiHelpCircle,
  FiCalendar,
  FiChevronDown,
} from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const services = [
  { id: 1, name: 'Car Repair & Service' },
  { id: 2, name: 'Mechanical & Electrical Repairs' },
  { id: 3, name: 'Paint & Body Work' },
  { id: 4, name: 'Vehicle Diagnostics' },
  { id: 5, name: 'Accident Repairs' },
  { id: 6, name: 'Maintenance Services' },
  { id: 7, name: 'Tire Services' },
  { id: 8, name: 'Vehicle Detailing' },
  { id: 9, name: 'Brake & Suspension Services' },
  { id: 10, name: 'Battery Check & Replacement' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showDropdown, setShowDropdown] = useState(false); // For desktop dropdown
  const [showMobileDropdown, setShowMobileDropdown] = useState(false); // For mobile dropdown
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const mobileMenuRef = useRef(null); // Reference for the mobile menu
  let dropdownTimeout; // Timeout for dropdown delay

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false); // Close the mobile menu if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false); // Close the mobile menu
    setShowDropdown(false);
    setShowMobileDropdown(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout); // Clear any existing timeout
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // Delay closing by 300ms
  };

  return (
    <nav className="bg-black fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://i.postimg.cc/gJCNMjt8/brenxlogo.jpg"
              alt="brenxx-auto-services"
              className="h-12 w-26 mr-2"
            />
            <Link to="/" className="text-2xl">
              <span className="text-white font-bold">BRENXX AUTO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex text-white font-bold items-center space-x-8">
            <Link to="/" className="nav-link text-white hover:text-blue-600 transition-colors duration-200">
              HOME
            </Link>
            <Link to="/aboutus" className="nav-link hover:text-blue-600 transition-colors duration-200">
              ABOUT US
            </Link>
            <div
              className="relative nav-link cursor-pointer flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              SERVICES <FiChevronDown className="ml-1" />
              {showDropdown && (
                <div className="absolute top-full left-0 bg-blue-100 shadow-lg rounded-lg mt-2 w-64 z-50">
                  <ul className="text-black">
                    {services.map((service) => (
                      <li
                        key={service.id}
                        onClick={() => handleNavigation(`/services/${service.id}`)}
                        className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
                      >
                        {service.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link to="/offers" className="nav-link hover:text-blue-600 transition-colors duration-200">
              OFFERS
            </Link>
            <Link to="/gallery" className="nav-link hover:text-blue-600 transition-colors duration-200">
              GALLERY
            </Link>
            <Link to="/contact" className="nav-link hover:text-blue-600 transition-colors duration-200">
              CONTACT
            </Link>
            <Link to="/faq" className="nav-link hover:text-blue-600 transition-colors duration-200">
              FAQ
            </Link>
            <Link to="/book-appointment" className="nav-link hover:text-blue-600 transition-colors duration-200">
              BOOK NOW
            </Link>
            <Link to="/cart" className="relative">
              <FiShoppingCart className="h-6 w-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && (
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 left-0 h-full w-64 bg-blue-200 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } z-50`}
        >
          <div className="flex flex-col items-start p-6 space-y-4">
            <button
              onClick={() => handleNavigation('/')}
              className="flex items-center nav-link bg-white text-black px-3 py-2 rounded-md hover:bg-yellow-100 transition-colors w-full"
            >
              <FiHome className="mr-2" /> Home
            </button>
            <div className="w-full">
              <button
                className="flex items-center nav-link bg-white text-black px-3 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
                onClick={() => setShowMobileDropdown(!showMobileDropdown)}
              >
                <FiTool className="mr-2" /> Services <FiChevronDown className="ml-1" />
              </button>
              {showMobileDropdown && (
                <ul className="bg-white shadow-lg rounded-lg mt-2 w-full text-black">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      onClick={() => handleNavigation(`/services/${service.id}`)}
                      className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
                    >
                      {service.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              onClick={() => handleNavigation('/gallery')}
              className="flex items-center nav-link bg-white text-black px-3 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
            >
              <FiImage className="mr-2" /> Gallery
            </button>
            <button
              onClick={() => handleNavigation('/aboutus')}
              className="flex items-center nav-link bg-white text-black px-3 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
            >
              <FiInfo className="mr-2" /> About Us
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="flex items-center nav-link bg-white text-black px-3 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
            >
              <FiMail className="mr-2" /> Contact
            </button>
            <button
              onClick={() => handleNavigation('/offers')}
              className="flex items-center nav-link bg-white text-black px-3 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
            >
              <FiTag className="mr-2" /> Offers
            </button>
            <button
              onClick={() => handleNavigation('/faq')}
              className="flex items-center nav-link bg-white text-black px-3 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
            >
              <FiHelpCircle className="mr-2" /> FAQ
            </button>
            <button
              onClick={() => handleNavigation('/book-appointment')}
              className="flex items-center nav-link bg-white text-black px-3 py-2 rounded-md hover:bg-blue-700 transition-colors w-full"
            >
              <FiCalendar className="mr-2" /> Book Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;