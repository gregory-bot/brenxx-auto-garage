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
  const [contactMethod, setContactMethod] = useState('email');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookingData = {
      service: selectedService || customService,
      date: date.toISOString().split('T')[0],
      time,
      vehicleDetails,
      contactMethod,
      contactInfo
    };
    
    onSubmit(bookingData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Select Service</label>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md border"
        >
          <option value="">-- Select a service --</option>
          {services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>
        <p className="mt-1 text-sm text-gray-500">Or specify your own:</p>
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
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            minDate={new Date()}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time</label>
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
        <label className="block text-sm font-medium text-gray-700">Vehicle Details</label>
        <div className="mt-1 space-y-2">
          <input
            type="text"
            placeholder="Make (e.g., Toyota)"
            value={vehicleDetails.make}
            onChange={(e) => setVehicleDetails({...vehicleDetails, make: e.target.value})}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            placeholder="Model (e.g., Camry)"
            value={vehicleDetails.model}
            onChange={(e) => setVehicleDetails({...vehicleDetails, model: e.target.value})}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            placeholder="Year"
            value={vehicleDetails.year}
            onChange={(e) => setVehicleDetails({...vehicleDetails, year: e.target.value})}
            className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
        <label className="block text-sm font-medium text-gray-700">Contact Method</label>
        <div className="mt-1 flex items-center space-x-4">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600"
              checked={contactMethod === 'email'}
              onChange={() => setContactMethod('email')}
            />
            <span className="ml-2 text-gray-700">Email</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-indigo-600"
              checked={contactMethod === 'whatsapp'}
              onChange={() => setContactMethod('whatsapp')}
            />
            <span className="ml-2 text-gray-700">WhatsApp</span>
          </label>
        </div>
        <input
          type={contactMethod === 'email' ? 'email' : 'tel'}
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
          placeholder={contactMethod === 'email' ? 'your@email.com' : '+1234567890'}
          className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <div className="flex justify-end space-x-3">
        {!isInline && (
          <button
            type="button"
            className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Book Appointment
        </button>
      </div>
    </form>
  );
};

export default BookingForm;