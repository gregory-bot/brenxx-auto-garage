import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OffersPage() {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(true);

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
      title: 'Car Facelift Package',
      description: 'Prepare for facelift with our tire change and alignment service.',
      image: 'https://media.istockphoto.com/id/946261062/photo/bottom-view-of-wheel-and-shock-absorber-of-vehicle.jpg?s=612x612&w=0&k=20&c=w-1POmKRJGzBLYRRDmyUPUcW0-2fGRuIDuLmyHsEP8U=',
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


  const handleBackHomeClick = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  const handleBookService = (offerId) => {
    navigate(`/book-appointment?offer=${offerId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFading(false);
    }, 300); // Smooth fade-in effect
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`min-h-screen bg-gray-50 pt-20 pb-10 transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden" style={{ paddingBottom: '70%' }}>
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{offer.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{offer.description}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleBookService(offer.id)}
                    className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-md text-sm transition-colors duration-300"
                  >
                    Book Service
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OffersPage;