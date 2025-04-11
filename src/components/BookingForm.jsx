import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const services = [
  'Oil Change',
  'Tire Rotation',
  'Brake Inspection',
  'Engine Tune-up',
  'Transmission Service',
  'Battery Replacement'
];

const BookingForm = ({ onSubmit, isInline = false }) => {
  const [selectedService, setSelectedService] = useState('');
  const [customService, setCustomService] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState({
    make: '',
    model: '',
    year: '',
    licensePlate: '',
    additionalNotes: ''
  });
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookingData = {
      service: selectedService || customService,
      date: date.toISOString().split('T')[0],
      time,
      vehicleDetails,
      phoneNumber
    };
    
    // Format the WhatsApp message
    const message = `hello Brenxx Auto, I would like to book an appointment for the following service:
    
Service: ${bookingData.service}
Date: ${bookingData.date}
Time: ${bookingData.time}

Vehicle Details:
Make: ${vehicleDetails.make}
Model: ${vehicleDetails.model}
Year: ${vehicleDetails.year}
License Plate: ${vehicleDetails.licensePlate}
Notes: ${vehicleDetails.additionalNotes}

Contact Number: ${phoneNumber}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Replace with your business WhatsApp number (remove any +, -, or spaces)
    const whatsappNumber = '+254799686363';
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/254799686363?text=${encodedMessage}`, '_blank');
    
    // Optional: call the onSubmit prop if needed
    if (onSubmit) {
      onSubmit(bookingData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-blue-700">Select Service</label>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
          required
        >
          <option value="">-- Select a service --</option>
          {services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
        <p className="mt-1 text-sm text-blue-700">Or specify your own:</p>
        <input
          type="text"
          value={customService}
          onChange={(e) => setCustomService(e.target.value)}
          placeholder="Custom service request"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-blue-700">Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            minDate={new Date()}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-blue-700">Time</label>
          <select
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
            required
          >
            <option value="">-- Select time --</option>
            <option value="08:00 AM">08:00 AM</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="01:00 PM">01:00 PM</option>
            <option value="02:00 PM">02:00 PM</option>
            <option value="03:00 PM">03:00 PM</option>
            <option value="04:00 PM">04:00 PM</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-700">Vehicle Details</label>
        <div className="mt-1 space-y-2">
          <input
            type="text"
            placeholder="Make (e.g., Subaru)"
            value={vehicleDetails.make}
            onChange={(e) => setVehicleDetails({...vehicleDetails, make: e.target.value})}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <input
            type="text"
            placeholder="Model (e.g., Forester Sti)"
            value={vehicleDetails.model}
            onChange={(e) => setVehicleDetails({...vehicleDetails, model: e.target.value})}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <input
            type="text"
            placeholder="Year"
            value={vehicleDetails.year}
            onChange={(e) => setVehicleDetails({...vehicleDetails, year: e.target.value})}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <input
            type="text"
            placeholder="License Plate"
            value={vehicleDetails.licensePlate}
            onChange={(e) => setVehicleDetails({...vehicleDetails, licensePlate: e.target.value})}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <textarea
            placeholder="Additional notes about your vehicle"
            value={vehicleDetails.additionalNotes}
            onChange={(e) => setVehicleDetails({...vehicleDetails, additionalNotes: e.target.value})}
            rows={3}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-blue-700">Your WhatsApp Number</label>
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="+254799686363"
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
        <p className="mt-1 text-xs text-gray-500">We'll contact you on WhatsApp to confirm your booking</p>
      </div>

      <div className="flex justify-end space-x-3">
        {!isInline && (
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Book via WhatsApp
        </button>
      </div>
    </form>
  );
};

export default BookingForm;