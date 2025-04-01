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
      const response = await fetch('https://script.google.com/macros/s/AKfycbwyFm_WRNHAkN2A-vJGF2Ef0EopXWi1Rxt1XE47AuwQ4HZj609PAgF39Qq91tXCdQcx/exec', {
        method: 'POST',
        mode: 'no-cors', // Add this for development
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Note: With 'no-cors' mode, you won't be able to read the response
      // For production, remove 'no-cors' and ensure your server has proper CORS headers
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

      <footer className="bg-gray-800 text-white py-16" style={{ fontFamily: 'Courier New, monospace' }}>
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
          <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

          <div className="flex flex-wrap justify-between gap-8">
            {/* Contact Info */}
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Brenxx Auto Services</h3>
              <p>Your trusted partner for vehicle repair and maintenance.</p>
              <p>📞 <strong>Phone:</strong> +254799686363</p>
              <p>📧 <strong>Email:</strong> brenxxautogarage@gmail.com</p>
              <p className="mt-4 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" />
                <strong>Location:</strong>{' '}
                <a
                  href="https://maps.app.goo.gl/C2Nck5qf7G3N3dAE7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Brenxx Auto, Nairobi
                </a>
              </p>
            </div>

            {/* Google Map */}
            <div className="w-full md:w-1/3">
              <div className="rounded-xl overflow-hidden shadow-lg h-[200px]">
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
            </div>

            {/* Opening Hours */}
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">🕒 Opening Hours</h3>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center mt-10 space-x-6">
            <a href="https://www.facebook.com/share/1A4HdDfqRn/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-400 hover:text-blue-500 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/brenxx_autogarage?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-pink-500 hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@brenxxauto?_t=ZM-8uoCabEiamd&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-purple-600 hover:text-white transition">
              <FaTiktok size={24} />
            </a>
          </div>

          {/* Quick Links Section */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="flex items-center text-gray-300 hover:text-white transition px-3 py-1">
                <FaHome className="mr-2" /> Home
              </Link>
              <Link to="/services" className="flex items-center text-gray-300 hover:text-white transition px-3 py-1">
                <FaTools className="mr-2" /> Services
              </Link>
              <Link to="/gallery" className="flex items-center text-gray-300 hover:text-white transition px-3 py-1">
                <FaImages className="mr-2" /> Gallery
              </Link>
              <Link to="/aboutus" className="flex items-center text-gray-300 hover:text-white transition px-3 py-1">
                <FaInfoCircle className="mr-2" /> About Us
              </Link>
              <Link to="/contact" className="flex items-center text-gray-300 hover:text-white transition px-3 py-1">
                <FaEnvelope className="mr-2" /> Contact
              </Link>
              <Link to="/book-appointment" className="flex items-center text-gray-300 hover:text-white transition px-3 py-1">
                <FaCalendarAlt className="mr-2" /> Book Now
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              
              {/* Status Message */}
              {submitStatus && (
                <div className={`p-3 rounded-lg flex items-center ${
                  submitStatus === 'success' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-red-100 text-red-700'
                }`}>
                  {submitStatus === 'success' ? (
                    <>
                      <FaCheck className="mr-2" />
                      message sent.
                    </>
                  ) : (
                    <>
                      <FaTimes className="mr-2" />
                      Failed to send message. Please try again or contact us directly.
                    </>
                  )}
                </div>
              )}
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Copyright */}
          <div className="mt-10 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Brenxx Auto Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;