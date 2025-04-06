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
    },
    {
      id: 25,
      url: 'https://i.postimg.cc/0NPQLFrp/int.jpg',
      title: 'Interior Deep Cleaning',
      serviceType: 'Detailing'
    },
    {
      id: 26,
      url: 'https://i.postimg.cc/VNKY2Nx8/alloy.jpg',
      title: 'Alloy Wheel Repair',
      serviceType: 'Cosmetic'
    },
    {
      id: 27,
      url: 'https://i.postimg.cc/28x8nT0y/ECU.jpg',
      title: 'ECU Tuning',
      serviceType: 'Performance'
    },
    {
      id: 28,
      url: 'https://i.postimg.cc/qMvWZLkz/engine44.jpg',
      title: 'Engine Diagnostics',
      serviceType: 'Diagnostic'
    },
    {
      id: 29,
      url: 'https://i.postimg.cc/WbdXkfN6/tinting.jpg',
      title: 'Glass Tinting',
      serviceType: 'Protection'
    },
    {
      id: 30,
      url: 'https://i.postimg.cc/tCGzmdFF/tow4.jpg',
      title: 'Roadside Assistance',
      serviceType: 'Emergency'
    },
    {
      id: 31,
      url: 'https://i.postimg.cc/TwXwXP0N/ceramic.jpg',
      title: 'Ceramic Coating',
      serviceType: 'Detailing',
      premium: true
    },
    {
      id: 32,
      url: 'https://i.postimg.cc/DyYww65X/paint.jpg',
      title: 'Paint Protection Film',
      serviceType: 'Protection',
      premium: true
    },
    {
      id: 33,
      url: 'https://i.postimg.cc/W3pBrL1b/roof.jpg',
      title: 'Convertible Top Repair',
      serviceType: 'Restoration'
    },
    {
      id: 34,
      url: 'https://i.postimg.cc/FKpqhWVt/wheelall.jpg',
      title: 'Laser Wheel Alignment',
      serviceType: 'Suspension'
    },
    {
      id: 35,
      url: 'https://i.postimg.cc/c4qN9zDT/bbh.jpg',
      title: 'AdBlue System Service',
      serviceType: 'Mechanical'
    },
    {
      id: 36,
      url: 'https://i.postimg.cc/QCQYnftn/zz.jpg',
      title: 'Start-Stop System Repair',
      serviceType: 'Electrical'
    },
    {
      id: 37,
      url: 'https://i.postimg.cc/rsMNzMVQ/nnv.jpg',
      title: 'EV Battery Check',
      serviceType: 'Electrical',
      premium: true
    },
    {
      id: 38,
      url: 'https://i.postimg.cc/D0SyrbwZ/tyu.jpg',
      title: 'Advanced ECU Remapping',
      serviceType: 'Performance',
      premium: true
    },
    {
      id: 39,
      url: 'https://i.postimg.cc/y8H3HvNy/loli.jpg',
      title: 'Leather Restoration',
      serviceType: 'Restoration'
    },
    {
      id: 40,
      url: 'https://media.istockphoto.com/id/2176130640/photo/close-up-view-of-car-undercarriage-in-a-repair-workshop.jpg?s=612x612&w=0&k=20&c=fWgc5wrPTx57ASr5QWXddhIejlrcg_VJBL-m6ii7bTg=',
      title: 'Undercarriage Cleaning',
      serviceType: 'Detailing'
    }    
  ]);

  // Group images into pairs for horizontal display
  const imagePairs = [];
  for (let i = 0; i < images.length; i += 2) {
    imagePairs.push(images.slice(i, i + 2));
  }

  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 bg-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
        <Link 
      to="/" 
      className="flex items-center border border-blue-300 hover:border-blue-600 text-blue-600 hover:text-blue-800 px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <FiArrowLeft className="mr-2" />
      Home
    </Link>
          <h2 className="text-3xl text-blue-800">gallery</h2>
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