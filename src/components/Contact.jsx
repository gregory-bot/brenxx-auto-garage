import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaArrowUp,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaHome,
  FaTools,
  FaImages,
  FaInfoCircle,
  FaEnvelope,
  FaCalendarAlt,
  FaWhatsapp
} from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const customerReviews = [
    {
      id: 1,
      name: "John Kamau",
      review: "Brenxx Auto did an amazing job on my car's body repair. The team was professional and delivered on time!",
      image: "https://i.postimg.cc/mgH72kL9/yyjj.jpg"
    },
    {
      id: 2,
      name: "Sarah Wanjiku",
      review: "Excellent service! My car looks brand new after the full detailing. Will definitely come back.",
      image: "https://i.postimg.cc/Y9w5yv9z/ilo.jpg"
    },
    {
      id: 3,
      name: "David Ochieng",
      review: "The mechanical repairs were done perfectly at a fair price. Honest and reliable mechanics.",
      image: "https://i.postimg.cc/xCLwRvxK/diagnostics.jpg"
    },
    {
      id: 4,
      name: "Grace Muthoni",
      review: "Quick response to my emergency repair needs. Highly recommend Brenxx Auto for quality service.",
      image: "https://i.postimg.cc/8cZx5wbZ/juja.jpg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4000) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 3000;
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      window.scrollTo(0, start * (1 - easeInOutQuad(progress)));
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    requestAnimationFrame(animateScroll);
  };

  const handleReviewClick = (review) => {
    setSelectedReview(review);
  };

  const handleCloseReview = () => {
    setSelectedReview(null);
  };

  return (
    <>
      <div id="contact" className="scroll-mt-24"></div>

      <footer
        className="bg-gray-800 text-white py-12"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4116291/pexels-photo-4116291.jpeg?auto=compress&cs=tinysrgb&w=1200')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <a
          href="tel:+254799686363"
          className="fixed bottom-6 left-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 flex items-center justify-center"
          aria-label="Call Us"
        >
          <FaPhone size={20} />
        </a>

        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 left-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={15} />
          </button>
        )}

        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-80 bg-red-600"></div>
              <h2 className="text-4xl font-bold text-black">Brenxx Auto</h2>
              <div className="h-px w-80 bg-red-600"></div>
            </div>
            <p className="text-black mt-2">Your trusted vehicle service partner</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Contact Information</h3>
                <p><span className="font-medium">Phone:</span> +254 799 686363 / +254 728 676013</p>
                <p><span className="font-medium">Email:</span> brenxxautogarage@gmail.com</p>
                <div className="flex items-start mt-4">
                  <FaMapMarkerAlt className="mt-1 mr-2 text-red-400" />
                  <div>
                    <p className="font-medium">Location:</p>
                    <p>2nd Avenue</p>
                    <p>Garden Estate, Nairobi</p>
                    <a
                      href="https://maps.app.goo.gl/C2Nck5qf7G3N3dAE7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline inline-block mt-2"
                    >
                      View larger map
                    </a>
                  </div>
                </div>
                <div className="mt-6 rounded-lg overflow-hidden h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9023723913806!2d36.85803936820727!3d-1.2277353960212578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1713d27fd3c9%3A0x6f7b49f497186e3f!2sBrenxx%20Auto!5e0!3m2!1sen!2ske!4v1743074969462!5m2!1sen!2ske"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Brenxx Auto Location"
                  ></iframe>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Opening Hours</h4>
                  <ul className="space-y-2">
                    <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
                    <li>Saturday: 9:00 AM - 4:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:w-1/3">
              <div className="bg-gray-700 p-6 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/" className="flex items-center text-gray-300 hover:text-white transition"><FaHome className="mr-2" /> Home</Link>
                  <Link to="/services" className="flex items-center text-gray-300 hover:text-white transition"><FaTools className="mr-2" /> Services</Link>
                  <Link to="/gallery" className="flex items-center text-gray-300 hover:text-white transition"><FaImages className="mr-2" /> Gallery</Link>
                  <Link to="/aboutus" className="flex items-center text-gray-300 hover:text-white transition"><FaInfoCircle className="mr-2" /> About Us</Link>
                  <Link to="/faq" className="flex items-center text-gray-300 hover:text-white transition"><FiHelpCircle className="mr-2" /> FAQ</Link>
                  <Link to="/contact" className="flex items-center text-gray-300 hover:text-white transition"><FaEnvelope className="mr-2" /> Contact</Link>
                  <Link to="/book-appointment" className="flex items-center text-gray-300 hover:text-white transition col-span-2"><FaCalendarAlt className="mr-2" /> Book Now</Link>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Follow Us</h4>
                  <div className="flex space-x-10">
                    <a href="https://www.facebook.com/share/1A4HdDfqRn/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300"><FaFacebook size={20} /></a>
                    <a href="https://www.instagram.com/brenxx_autogarage" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300"><FaInstagram size={20} /></a>
                    <a href="https://www.tiktok.com/@brenxxauto" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300"><FaTiktok size={20} /></a>
                  </div>

                  {/* WhatsApp Button */}
                  <div className="mt-8">
                    <a href="https://wa.me/254799686363" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition">
                      <FaWhatsapp className="mr-2" size={20} /> Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Customer Reviews */}
            <div className="lg:w-1/3">
              <div className="bg-gray-700 p-4 rounded-lg h-auto">
                <h3 className="text-lg font-bold mb-3 text-blue-600">Customer Reviews</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {customerReviews.map((review) => (
                    <motion.div
                      key={review.id}
                      className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleReviewClick(review)}
                    >
                      <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-center mt-2 text-gray-300 text-sm">Click to read reviews</p>
              </div>
            </div>
          </div>

          {/* Review Modal */}
          <AnimatePresence>
            {selectedReview && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleCloseReview}
              >
                <motion.div
                  className="bg-white rounded-lg max-w-xs w-full p-4 mx-4 relative"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center mb-2">
                    <img src={selectedReview.image} alt={selectedReview.name} className="w-10 h-10 rounded-full object-cover mr-3" />
                    <h4 className="text-md font-bold">{selectedReview.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm italic">"{selectedReview.review}"</p>
                  <button className="absolute top-1 right-1 text-gray-500 hover:text-gray-700 text-sm" onClick={handleCloseReview}>✕</button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Copyright */}
          <div className="mt-10 text-center text-blue-100 text-xl">
            <p>© {new Date().getFullYear()} Brenxx Auto Services. All rights reserved.</p>
            <p className="mt-1">Map data ©2025 | Terms</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;
