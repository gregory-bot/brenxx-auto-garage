import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookingSection = () => {
  const navigate = useNavigate();

  const handleBookNowClick = () => {
    navigate('/book-appointment');
  };

  return (
    <section id="booking" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* "Book" heading before the image */}
        <h2 className="text-4xl text-center mb-6 text-blue-700">Book</h2>
        
        <div className="relative rounded-xl overflow-hidden h-96">
          {/* Background Image */}
          <img 
            src="https://i.postimg.cc/dDMQSBN2/hjh.jpg"
            alt="Professional Auto Service"
            className="w-full h-full object-cover"
          />
          
          {/* Overlay Content with button at middle bottom */}
          <div className="absolute inset-0 flex flex-col justify-end items-center pb-2">
            <div className="bg-black bg-opacity-60 rounded-lg p-4 text-center">
              <p className="text-xl text-white mb-4">
                Book your appointment with our expert technicians today
              </p>
              <button
                onClick={handleBookNowClick}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
              >
                Book a Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;