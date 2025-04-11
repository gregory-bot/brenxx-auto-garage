import React from 'react';
import { useLocation } from 'react-router-dom';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  const location = useLocation();
  const prefillData = location.state?.prefillData || {};

  const handleSubmit = (bookingData) => {
    // Handle form submission - send to backend or prepare for WhatsApp/email
    console.log('Final booking data:', bookingData);
    
    if (bookingData.contactMethod === 'whatsapp') {
      const message = `New Booking Request:
Service: ${bookingData.service}
Date: ${bookingData.date}
Time: ${bookingData.time}
Vehicle: ${bookingData.vehicleDetails.year} ${bookingData.vehicleDetails.make} ${bookingData.vehicleDetails.model}
License: ${bookingData.vehicleDetails.licensePlate}
Notes: ${bookingData.vehicleDetails.additionalNotes}`;
      
      const whatsappUrl = `https://wa.me/254799686363?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      alert('Booking request submitted! We will contact you shortly via email.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl text-black font-bold text-center mb-8">Book Your Appointment</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookingForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;