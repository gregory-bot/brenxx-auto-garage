import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import the map marker icon
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaTiktok
} from 'react-icons/fa';

const ContactSection = () => {
  return (
    <>
      {/* Scroll Target Div Above Footer */}
      <div id="contact" className="scroll-mt-24"></div>

      <footer className="bg-gray-800 text-white py-16" style={{ fontFamily: 'Courier New, monospace' }}>
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>

          <div className="flex flex-wrap justify-between gap-8">
            {/* Contact Info */}
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Brenxx Auto Services</h3>
              <p>Your trusted partner for vehicle repair and maintenance.</p>
              <p>📞 <strong>Phone:</strong> +254 799686363</p>
              <p>📧 <strong>Email:</strong> brenxxautogarage@gmail.com</p>
              <p className="mt-4 flex items-center">
                <FaMapMarkerAlt className="mr-2 text-red-500" /> {/* Red map marker icon */}
                <strong>Location:</strong>{' '}
                <a
                  href="https://www.google.com/maps?q=2nd+Avenue,+Garden+Estate,+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  2nd Avenue, Garden Estate, Nairobi
                </a>
              </p>
            </div>

            {/* Google Map */}
            <div className="w-full md:w-1/3">
              <div className="rounded-xl overflow-hidden shadow-lg h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3988.9020684342845!2d36.86024187496549!3d-1.2279390987603518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTMnNDAuNiJTIDM2wrA1MSc0Ni4xIkU!5e0!3m2!1sen!2ske!4v1742709344650!5m2!1sen!2ske"
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
            <a
              href="https://www.facebook.com/share/1A4HdDfqRn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/brenxx_autogarage?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@brenxxauto?_t=ZM-8uoCabEiamd&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-gray-400 hover:text-white transition"
            >
              <FaTiktok size={24} />
            </a>
          </div>

          {/* Contact Form */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6 text-center">Send Us a Message</h3>
            <form className="max-w-lg mx-auto space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
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