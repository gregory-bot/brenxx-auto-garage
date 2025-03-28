import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

const BookingSection = () => {
  const navigate = useNavigate();
  
  const handleBookingSubmit = (bookingData) => {
    // You can handle the submission here or pass it up to parent
    console.log('Booking data:', bookingData);
    // Optionally navigate to booking page
    navigate('/book-appointment', { state: { prefillData: bookingData } });
  };

  return (
    <section id="booking" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Book an Appointment</h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <BookingForm onSubmit={handleBookingSubmit} isInline={true} />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;