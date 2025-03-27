import { useEffect, useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [images] = useState([
    {
      id: 1,
      url: 'https://i.postimg.cc/RF7CphYW/xx.jpg',
      title: 'Engine Repair',
      serviceType: 'Mechanical'
    },
    {
      id: 2,
      url: 'https://i.postimg.cc/7YYPXxnL/tire.jpg',
      title: 'Wheel Alignment',
      serviceType: 'Suspension'
    },
    {
      id: 3,
      url: 'https://i.postimg.cc/k5DfytBy/wash.jpg',
      title: 'Premium Car Wash',
      serviceType: 'Detailing'
    },
    {
      id: 4,
      url: 'https://i.postimg.cc/4dgHxDkh/wheel.jpg',
      title: 'Tire Service',
      serviceType: 'Maintenance'
    },
    {
      id: 5,
      url: 'https://i.postimg.cc/zB2NchjX/lx.jpg',
      title: 'Luxury Detailing',
      serviceType: 'Detailing'
    },
    {
      id: 6,
      url: 'https://i.postimg.cc/g0w127qd/hi.jpg',
      title: 'Brake Inspection',
      serviceType: 'Safety'
    },
    {
      id: 7,
      url: 'https://i.postimg.cc/FzJKbG4Q/bbh.jpg',
      title: 'Oil Change',
      serviceType: 'Maintenance'
    },
    {
      id: 8,
      url: 'https://i.postimg.cc/SxGczQdf/tty.jpg',
      title: 'Transmission Service',
      serviceType: 'Mechanical'
    },
    {
      id: 9,
      url: 'https://i.postimg.cc/tRPk4jK2/ac.jpg',
      title: 'AC Repair',
      serviceType: 'Comfort'
    },
    {
      id: 10,
      url: 'https://i.postimg.cc/wj8L4f0M/batt.jpg',
      title: 'Battery Service',
      serviceType: 'Electrical'
    },
    {
      id: 11,
      url: 'https://i.postimg.cc/xdgs2D4t/exh.jpg',
      title: 'Exhaust Repair',
      serviceType: 'Mechanical'
    },
    {
      id: 12,
      url: 'https://i.postimg.cc/g0q0c4VM/headl.jpg',
      title: 'Headlight Restoration',
      serviceType: 'Cosmetic'
    },
    {
        id: 13,
        url: 'https://i.postimg.cc/gjS03Jj1/back.jpg',
        title: 'Backlight Restoration',
        serviceType: 'Cosmetic'
      },
    {
      id: 14,
      url: 'https://i.postimg.cc/5yTVxF69/wind.jpg',
      title: 'Windshield Repair',
      serviceType: 'Safety'
    },
    {
      id: 15,
      url: 'https://i.postimg.cc/QCMQj21J/dent.jpg',
      title: 'Dent Removal',
      serviceType: 'Cosmetic'
    },
    {
      id: 16,
      url: 'https://i.postimg.cc/kgc7SGHs/tow.jpg',
      title: 'Towing Service',
      serviceType: 'Emergency'
    },
    {
      id: 17,
      url: 'https://i.postimg.cc/7h05rDZR/nbn.jpg',
      title: 'Classic Car Restoration',
      serviceType: 'Restoration'
    },
    {
      id: 18,
      url: 'https://i.postimg.cc/gJpyTMsm/bbm.jpg',
      title: 'Performance Upgrade',
      serviceType: 'Custom'
    },
    {
      id: 19,
      url: 'https://i.postimg.cc/0QZSH9r0/up.jpg',
      title: 'Hybrid Service',
      serviceType: 'Electrical'
    },
    {
      id: 20,
      url: 'https://i.postimg.cc/5y6X7vhf/rust.jpg',
      title: 'Rust Protection',
      serviceType: 'Protection'
    },
    {
      id: 21,
      url: 'https://i.postimg.cc/BQF6jqs7/fgh.jpg',
      title: 'Fleet Maintenance',
      serviceType: 'Commercial'
    },
    {
      id: 22,
      url: 'https://i.postimg.cc/sDJ2YTQ5/ggt.jpg',
      title: 'Diagnostic Scan',
      serviceType: 'Diagnostic'
    },
    {
        id: 23,
        url: 'https://media.istockphoto.com/id/946261062/photo/bottom-view-of-wheel-and-shock-absorber-of-vehicle.jpg?s=612x612&w=0&k=20&c=w-1POmKRJGzBLYRRDmyUPUcW0-2fGRuIDuLmyHsEP8U=',
        title: 'Car Facelift',
        serviceType: 'Cosmetic Upgrade'
      },
    {
      id: 24,
      url: 'https://i.postimg.cc/SNVy2j3r/corr.jpg',
      title: 'Paint Correction',
      serviceType: 'Cosmetic'
    }
  ]);

  // Group images into pairs for horizontal display
  const imagePairs = [];
  for (let i = 0; i < images.length; i += 2) {
    imagePairs.push(images.slice(i, i + 2));
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="flex items-center text-blue-600 hover:text-blue-800 text-lg"
          >
            <FiArrowLeft className="mr-2" />Home
          </Link>
          <h2 className="text-3xl text-blue-800 font-mono">Gallery</h2>
          <div className="w-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imagePairs.map((pair, index) => (
            <div key={index} className="flex flex-row gap-4">
              {pair.map((image) => (
                <div key={image.id} className="flex-1 bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative pb-[75%]"> {/* Aspect ratio container */}
                    <img 
                      src={image.url} 
                      alt={image.title} 
                      className="absolute top-0 left-0 w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-md font-semibold text-gray-800 text-center">{image.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;