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
      image: 'https://i.postimg.cc/jSD8CRvF/full.jpg',
    },
    {
      id: 'offer2',
      title: 'Engine Tune-Up Special',
      description: 'Optimize your engine performance with our expert tune-up service.',
      image: 'https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'offer3',
      title: 'Brake Repair Discount',
      description: 'Get 20% off on brake pad replacement and brake system inspection.',
      image: 'https://images.pexels.com/photos/4294075/pexels-photo-4294075.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'offer4',
      title: 'Winter Tire Change Package',
      description: 'Prepare for winter with our tire change and alignment service.',
      image: 'https://images.pexels.com/photos/3551614/pexels-photo-3551614.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'offer5',
      title: 'AC Repair & Recharge',
      description: 'Stay cool this summer with our AC repair and recharge service.',
      image: 'https://media.istockphoto.com/id/1406024793/photo/working-of-servicing-car-air-conditioner-in-vehicle-auto-service-or-repair-workshop.jpg?b=1&s=612x612&w=0&k=20&c=DeExuWewF_upvaHP4zHjL16wEUDDAelQcuQI2wcLTHM=',
    },
    {
      id: 'offer6',
      title: '24/7 Towing Service',
      description: 'Emergency towing available anytime, anywhere within the city limits.',
      image: 'https://i.postimg.cc/mgVbZNXw/towing.jpg',
    },
    {
      id: 'offer7',
      title: 'Battery Replacement Offer',
      description: 'High-quality battery replacement with free installation and disposal.',
      image: 'https://media.istockphoto.com/id/859211670/photo/car-engine.jpg?s=612x612&w=0&k=20&c=bzGLxXhiy2JXXGFNzYDE257AJiGlRI_u67Y9J-w5oaA=',
    },
    {
      id: 'offer8',
      title: 'Wheel Alignment Checkup',
      description: 'Precision wheel alignment for better handling and tire life.',
      image: 'https://i.postimg.cc/6QcXYZ1y/wheel.jpg',
    },
    {
      id: 'offer9',
      title: 'Complete Car Detailing',
      description: 'Interior and exterior detailing to make your car look brand new.',
      image: 'https://i.postimg.cc/yNvMFHkR/deta.jpg',
    },
    {
      id: 'offer10',
      title: 'Suspension & Shock Repair',
      description: 'Ensure a smooth ride with our suspension and shock absorber service.',
      image: 'https://i.postimg.cc/CLS965k8/shock.jpg',
    },
    {
      id: 'offer11',
      title: 'Headlight Restoration Service',
      description: 'Restore dull or foggy headlights for improved night visibility and safety.',
      image: 'https://images.pexels.com/photos/25580655/pexels-photo-25580655/free-photo-of-close-up-of-black-bmw-e30.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 'offer12',
      title: 'Oil & Filter Change Combo',
      description: 'Premium engine oil and filter change at a discounted combo rate.',
      image: 'https://media.istockphoto.com/id/948532736/photo/car-oil-filters-and-motor-oil-plastic-can-3d-illustration-3d-render-isolated-on-white.jpg?s=612x612&w=0&k=20&c=fC3vyOqlAO0TWoNsJoRW3gOvZ0ODM2aO6DuCyzyz4Lg=',
    },
    {
      id: 'offer13',
      title: 'Radiator Flush & Coolant Refill',
      description: 'Prevent overheating with a full radiator flush and coolant top-up.',
      image: 'https://media.istockphoto.com/id/465756690/photo/auto-mechanic-tests-car-antifreeze-liquid.jpg?s=612x612&w=0&k=20&c=FhAhAswKq6Kdu8vd41bOm7fMszx6tu4JtRaj98w3bnM=',
    },
    {
      id: 'offer14',
      title: 'Exhaust System Inspection',
      description: 'Check for leaks, rust, and performance issues in your exhaust system.',
      image: 'https://media.istockphoto.com/id/2197738784/photo/car-exhaust-pipe-in-garage.jpg?s=612x612&w=0&k=20&c=i-hjL6-Mq23w5-Ky9PR6gcRMATBWXJTbMR_gsVbVNH8=',
    },
    {
      id: 'offer15',
      title: 'Windshield Crack Repair',
      description: 'Fix minor windshield cracks before they spread. Quick and affordable.',
      image: 'https://media.istockphoto.com/id/1333581015/photo/broken-windshield-of-a-car.jpg?s=612x612&w=0&k=20&c=E9YzN-Q99C1-PGVU7Q2SVP5tlg6l0lo5JRo_ucoATbs=',
    },
    {
      id: 'offer16',
      title: 'Transmission Fluid Change',
      description: 'Extend transmission life with a professional fluid replacement service.',
      image: 'https://media.istockphoto.com/id/1928800061/photo/refueling-and-pouring-oil-quality-into-the-engine-motor-car-transmission-and-maintenance-gear.jpg?s=612x612&w=0&k=20&c=uJXmXcz7Yn97i-RHaFlD7wpmtARVi285oCaxbiLUB6A=',
    },
    {
      id: 'offer17',
      title: 'Clutch Inspection & Adjustment',
      description: 'Smooth gear shifts start with a healthy clutch — get it inspected today.',
      image: 'https://media.istockphoto.com/id/628470574/photo/change-and-repair-clutch-drive-axle-working-underneath-a-lifted.jpg?s=612x612&w=0&k=20&c=omz7ZKS8cNTIBVXl9vTW-r_2vmo1ie3rdP-q1-VG2pU=',
    },
    {
      id: 'offer18',
      title: 'Pre-Purchase Car Inspection',
      description: 'Buying a used car? Let our experts evaluate its condition before you commit.',
      image: 'https://i.postimg.cc/TPVrSdry/inspect.jpg',
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

                  <div className="flex justify-end">
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