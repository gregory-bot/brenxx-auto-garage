import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa'; // Import social media icons

const ContactSection = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Contact Section Header */}
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Brenxx Auto Services</h3>
            <p>Your trusted partner for vehicle repair and maintenance.</p>
            <p className="mt-4">📍 Location: 2nd Avenue, Garden Estate, Nairobi</p>
            <p>📞 Phone: +254 798 363 800</p>
            <p>📧 Email: info@brenxxauto.com</p>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <div
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9199496230976!2d36.79675407487849!3d-1.2158976355530395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3d5edfa7d25b%3A0x1ac8bb30a1bd6d00!2sGerman%20Point!5e0!3m2!1sen!2ske!4v1729664230851!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">🕒 Opening Hours</h3>
            <p>Monday - Friday: 8am - 6pm</p>
            <p>Saturday: 9am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-center">Send Us a Message</h3>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-black"
          >
            <FaTiktok size={24} />
          </a>
        </div>

        {/* Footer Copyright */}
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Brenxx Auto Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;