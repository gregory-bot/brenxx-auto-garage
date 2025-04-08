import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaArrowUp, FaCheck, FaTimes } from 'react-icons/fa';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaHome,
  FaTools,
  FaImages,
  FaInfoCircle,
  FaEnvelope,
  FaCalendarAlt
} from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Scroll handling (keep your existing code)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 6000) {
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

  // Form handling
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyBhTW6hBSvu4BFQS7RNoHPWuGLpMoA6J7RCI4fQ3iWgycohCr54mSqpmD7NSZu95D3/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <>
      <div id="contact" className="scroll-mt-24"></div>

      <footer className="bg-gray-800 text-white py-12">
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={15} />
          </button>
        )}

        <div className="container mx-auto px-4">
          {/* Brand Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl text-blue-400 mb-2">Brenxx Auto</h2>
            <p className="text-gray-300">Your trusted vehicle service partner</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Contact Info */}
            <div className="lg:w-1/3">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Contact Information</h3>
                <div className="space-y-4">
                  <p>
                    <span className="font-medium">Phone:</span> +254 799 686363
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> brenxxautogarage@gmail.com
                  </p>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-2 text-red-400" />
                    <div>
                      <p className="font-medium">Location:</p>
                      <p>Garden Estate, Limasi Villas</p>
                      <p>Castle Gardens, Nairobi</p>
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
                </div>

                {/* Google Map */}
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

                {/* Opening Hours */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Opening Hours</h4>
                  <ul className="space-y-2">
                    <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
                    <li>Saturday: 9:00 AM - 4:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Middle Column - Quick Links */}
            <div className="lg:w-1/3">
              <div className="bg-gray-700 p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link to="/" className="flex items-center text-gray-300 hover:text-white transition">
                    <FaHome className="mr-2" /> Home
                  </Link>
                  <Link to="/services" className="flex items-center text-gray-300 hover:text-white transition">
                    <FaTools className="mr-2" /> Services
                  </Link>
                  <Link to="/gallery" className="flex items-center text-gray-300 hover:text-white transition">
                    <FaImages className="mr-2" /> Gallery
                  </Link>
                  <Link to="/aboutus" className="flex items-center text-gray-300 hover:text-white transition">
                    <FaInfoCircle className="mr-2" /> About Us
                  </Link>
                  <Link to="/faq" className="flex items-center text-gray-300 hover:text-white transition">
                    <FiHelpCircle className="mr-2" /> FAQ
                  </Link>
                  <Link to="/contact" className="flex items-center text-gray-300 hover:text-white transition">
                    <FaEnvelope className="mr-2" /> Contact
                  </Link>
                  <Link to="/book-appointment" className="flex items-center text-gray-300 hover:text-white transition col-span-2">
                    <FaCalendarAlt className="mr-2" /> Book Now
                  </Link>
                </div>

                {/* Social Media Links */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-3 text-blue-400">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/share/1A4HdDfqRn/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                      <FaFacebook size={20} />
                    </a>
                    <a href="https://www.instagram.com/brenxx_autogarage" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
                      <FaInstagram size={20} />
                    </a>
                    <a href="https://www.tiktok.com/@brenxxauto" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                      <FaTiktok size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:w-1/3">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                  
                  {submitStatus && (
                    <div className={`p-3 rounded flex items-center ${
                      submitStatus === 'success' 
                        ? 'bg-green-800 text-green-100' 
                        : 'bg-red-800 text-red-100'
                    }`}>
                      {submitStatus === 'success' ? (
                        <>
                          <FaCheck className="mr-2" />
                          Message sent successfully!
                        </>
                      ) : (
                        <>
                          <FaTimes className="mr-2" />
                          Failed to send message. Please try again.
                        </>
                      )}
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded transition ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>

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