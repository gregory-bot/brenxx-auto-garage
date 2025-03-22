import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { useCart } from '../context/CartContext';

function OffersPage() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);

  const offers = [
    {
      id: 'offer1',
      title: 'Full Car Service Package',
      description: 'Comprehensive car service including oil change, brake check, and tire rotation.',
      originalPrice: 15000,
      price: 12000,
      image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg',
    },
    {
      id: 'offer2',
      title: 'Engine Tune-Up Special',
      description: 'Optimize your engine performance with our expert tune-up service.',
      originalPrice: 10000,
      price: 8000,
      image: 'https://images.pexels.com/photos/3806242/pexels-photo-3806242.jpeg',
    },
    {
      id: 'offer3',
      title: 'Brake Repair Discount',
      description: 'Get 20% off on brake pad replacement and brake system inspection.',
      originalPrice: 8000,
      price: 6400,
      image: 'https://images.pexels.com/photos/1634279/pexels-photo-1634279.jpeg',
    },
    {
      id: 'offer4',
      title: 'Winter Tire Change Package',
      description: 'Prepare for winter with our tire change and alignment service.',
      originalPrice: 12000,
      price: 9000,
      image: 'https://images.pexels.com/photos/5898414/pexels-photo-5898414.jpeg',
    },
    {
      id: 'offer5',
      title: 'AC Repair & Recharge',
      description: 'Stay cool this summer with our AC repair and recharge service.',
      originalPrice: 7000,
      price: 5500,
      image: 'https://images.pexels.com/photos/4481954/pexels-photo-4481954.jpeg',
    },
  ];

  const handleAddToCart = (item, selectedServiceType, selectedVehicleType, rating) => {
    const itemWithDetails = {
      ...item,
      serviceType: selectedServiceType,
      vehicleType: selectedVehicleType,
      rating: rating,
    };
    addToCart(itemWithDetails);
  };

  const handleBackHomeClick = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <div className={`min-h-screen bg-gray-50 pt-20 pb-10 transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleBackHomeClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
          >
            BACK HOME
          </button>
        </div>
        <h1 className="text-3xl font-bold mb-8">Special Deals</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {offers.map((offer) => {
            const [selectedServiceType, setSelectedServiceType] = useState('');
            const [selectedVehicleType, setSelectedVehicleType] = useState('');
            const [rating, setRating] = useState(0);

            const ratingChanged = (newRating) => {
              setRating(newRating);
            };

            return (
              <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
                <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <img src={offer.image} alt={offer.title} className="absolute top-0 left-0 w-full h-full object-contain" />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                    50% OFF
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1 text-black-600">{offer.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{offer.description}</p>

 {/* Service Type Selection */}
 <div className="mb-2">
                    <label htmlFor={`serviceType-${offer.id}`} className="block text-sm font-medium text-gray-700">
                      Service Type
                    </label>
                    <select
                      id={`serviceType-${offer.id}`}
                      value={selectedServiceType}
                      onChange={(e) => setSelectedServiceType(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select service type</option>
                      <option value="Basic">Basic</option>
                      <option value="Premium">Premium</option>
                      <option value="Full Package">Full Package</option>
                    </select>
                  </div>

                  {/* Vehicle Type Selection */}
                  <div className="mb-2">
                    <label htmlFor={`vehicleType-${offer.id}`} className="block text-sm font-medium text-gray-700">
                      Vehicle Type
                    </label>
                    <select
                      id={`vehicleType-${offer.id}`}
                      value={selectedVehicleType}
                      onChange={(e) => setSelectedVehicleType(e.target.value)}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option value="">Select vehicle type</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Truck">Truck</option>
                      <option value="Motorcycle">Motorcycle</option>
                    </select>
                  </div>

                  {/* Rating Section */}
                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Rate
                    </label>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      activeColor="#ff0000"
                    />
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-green-500 line-through mr-2">was KSH {offer.originalPrice}</span>
                      <span className="text-blue-600 font-bold text-lg">KSH {offer.price}</span>
                    </div>
                    <button
                      onClick={() => handleAddToCart(offer, selectedServiceType, selectedVehicleType, rating)}
                      className="bg-blue-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
                      disabled={!selectedServiceType || !selectedVehicleType}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OffersPage;