import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const paintAndBodyServices = [
  {
    id: 'pbs1',
    title: 'Respray and Touch-Up',
    description: 'Full vehicle respray or touch-up for minor scratches and chips.',
    image: 'https://i.postimg.cc/mgXL0LTx/spray.jpg'
  },
  {
    id: 'pbs2',
    title: 'Dent and Scratch Removal',
    description: 'Eliminating minor dents and surface scratches for a flawless finish.',
    image: 'https://i.postimg.cc/tRn4xB1G/ceramic.jpeg'
  },
  {
    id: 'pbs3',
    title: 'Panel Beating',
    description: 'Restoring damaged body panels to their original shape.',
    image: 'https://i.postimg.cc/5NPKWS3j/dent.jpg'
  },
  {
    id: 'pbs4',
    title: 'Powder Coating',
    description: 'Durable and colorful powder coating for wheels and other parts.',
    image: 'https://i.postimg.cc/D0n3SH7d/powder.jpg'
  },
  {
    id: 'pbs5',
    title: 'Ceramic Coating',
    description: 'coating that provides long-lasting paint protection, enhanced gloss, and resistance to dirt and scratches..',
    image: 'https://i.postimg.cc/kXwf84Qt/cer.jpg'
  },
  {
    id: 'pbs6',
    title: 'Auto Painting & Color Matching',
    description: 'Precision painting and matching for seamless vehicle appearance.',
    image: 'https://i.postimg.cc/4yxvWjjP/nonii.jpg'
  },
  {
    id: 'pbs7',
    title: 'Buffing and Polishing',
    description: 'Restoring shine and removing oxidation from paint surfaces.',
    image: 'https://i.postimg.cc/0NjG708T/buff.jpg'
  },
  {
    id: 'pbs8',
    title: 'Paintless Dent Repair (PDR)',
    description: 'Non-invasive dent removal preserving original paint.',
    image: 'https://i.postimg.cc/GpMvHX4s/body.jpg'
  },
  {
    id: 'pbs9',
    title: 'Rust Treatment & Prevention',
    description: 'Removing rust and applying protective coatings to prevent future corrosion.',
    image: 'https://i.postimg.cc/SKQ18zRw/nbj.jpg'
  },
  {
    id: 'pbs10',
    title: 'Accident Repairs',
    description: 'Comprehensive body and structural repair after accidents.',
    image: 'https://i.postimg.cc/0NZhr1Gd/acc.jpg'
  },
  {
    id: 'pbs11',
    title: 'Car Wrapping',
    description: 'High-quality vehicle wraps for color changes, branding, and paint protection with a flawless finish..',
    image: 'https://i.postimg.cc/SR1X6bJp/dde.jpg'
  },
  {
    id: 'pbs12',
    title: 'Chassis jigging',
    description: 'Precision alignment and repair of vehicle frames and chassis.',
    image: 'https://i.postimg.cc/VLckMsf1/chassis.jpg'
  },
];



const mechanicalElectricalServices = [
  {
    id: 'mes1',
    title: 'Engine Diagnostics',
    description: 'Advanced diagnostics to detect engine faults and optimize performance.',
    image: 'https://i.postimg.cc/W3zrc0b6/jki.jpg'
  },
  {
    id: 'mes2',
    title: 'Alternator & Starter Repair',
    description: 'Repair or replacement of malfunctioning alternators and starters.',
    image: 'https://i.postimg.cc/MphP3K6G/zz.jpg'
  },
  {
    id: 'mes3',
    title: 'Battery Testing & Replacement',
    description: 'Testing battery health and replacing weak or dead batteries.',
    image: 'https://i.postimg.cc/jjHX8H38/ECU.jpg'
  },
  {
    id: 'mes4',
    title: 'Wiring & Fuse Repairs',
    description: 'Fixing short circuits, replacing fuses, and repairing damaged wiring.',
    image: 'https://i.postimg.cc/kGWThwPG/5555.jpg'
  },
  {
    id: 'mes5',
    title: 'Brake System Repair',
    description: 'Fixing brake plugs and brake shoe pedals.',
    image: 'https://i.postimg.cc/HxYHPtz3/4567.avif'
  },
  {
    id: 'mes6',
    title: 'Lighting System Repair',
    description: 'Fixing headlights, taillights, and interior electrical lighting.',
    image: 'https://i.postimg.cc/RZBq7yyn/light.jpg'
  },
  {
    id: 'mes7',
    title: 'Electric Window & Mirror Repair',
    description: 'Repairing power windows and side mirror motors.',
    image: 'https://i.postimg.cc/XNKvVQpj/window.jpg'
  }
];



const faceliftAndConversionServices = [
  {
    id: 'fcs1',
    title: 'Fabrication and Customization',
    description: 'Custom fabrication for unique vehicle modifications.',
    image: 'https://i.postimg.cc/SNNC8GNm/fabr.jpg'
  },
  {
    id: 'fcs2',
    title: 'Front & Rear Bumper Conversion',
    description: 'Install modern-style bumpers to update your car’s look.',
    image: 'https://i.postimg.cc/TY32HKZc/111.jpg'
  },
  {
    id: 'fcs3',
    title: 'Exhaust Tip upgrade',
    description: 'Upgrade to stylish exhaust tips for a sportier sound and look.',
    image: 'https://i.postimg.cc/QNRtQmM5/2121.jpg'
  },
  {
    id: 'fcs4',
    title: 'Grille Replacement',
    description: 'Install stylish grilles for a more aggressive or modern appearance.',
    image: 'https://i.postimg.cc/5yXfJqGJ/sensor.jpg'
  },
  {
    id: 'fcs5',
    title: 'Bonnet and Boot Conversions',
    description: 'Update hoods and trunk lids to sportier or newer model designs.',
    image: 'https://i.postimg.cc/wjj551SN/bbb.jpg'
  },
  {
    id: 'fcs6',
    title: 'Side Skirt Installation',
    description: 'Add aerodynamic side skirts for a sportier profile.',
    image: 'https://i.postimg.cc/zBrVjMVQ/3451.jpg'
  },
  {
    id: 'fcs7',
    title: 'Full Body Kit Installation',
    description: 'Transform the entire exterior with customized body kits.',
    image: 'https://i.postimg.cc/XJs4CDFd/44.jpg'
  },
  {
    id: 'fcs8',
    title: 'Wheel & Rim Upgrade',
    description: 'Switch to modern alloy wheels or larger rims for a bold look.',
    image: 'https://i.postimg.cc/8zpHcJZ9/432.avif'
  },
  {
    id: 'fcs9',
    title: 'Alloy Wheel and Tire Customization',
    description: 'Switch to modern alloy wheels or larger rims for a bold look.',
    image: 'https://i.postimg.cc/DZ6rWDhq/asa.jpg'
  }
];

const otherServices = [
    {
    id: 'os1',
    title: 'Vehicle Detailing',
    description: 'Full interior and exterior cleaning, polishing, and restoration.',
    image: 'https://i.postimg.cc/x8q5fcnM/inter.jpg'
  },
  {
    id: 'os2',
    title: 'Tyre Installation and tyre services',
    description: 'New tyre sales, fitting, and balancing for all vehicle types.',
    image: 'https://i.postimg.cc/x1BWWVG6/were.jpg'
  },
  {
    id: 'os3',
    title: 'Battery Check & Replacement',
    description: 'Test battery health and install reliable new batteries as needed.',
    image: 'https://i.postimg.cc/qBmDPd42/213.jpg'
  },
  {
    id: 'os4',
    title: 'Windshield Repair & Replacement',
    description: 'Fix or replace cracked and damaged windshields.',
    image: 'https://i.postimg.cc/gcRqDFrY/xyz.jpg'
  },
  {
    id: 'os5',
    title: 'Sound System and ECU (Computer) Diagnostics',
    description: 'High-performance car sound systems designed for rich, immersive audio and seamless connectivity.',
    image: 'https://i.postimg.cc/QtXw7R2m/erer.jpg'
  },
  {
    id: 'os6',
    title: 'Suspension upgrade',
    description: 'Enhanced suspension systems for improved ride comfort, handling, and vehicle stability on all terrains.',
    image: 'https://i.postimg.cc/L41pNkqM/sus.jpg'
  },
  {
    id: 'os7',
    title: 'Tinting',
    description: 'Professional window tinting for UV protection, privacy.',
    image: 'https://i.postimg.cc/3NKF4CVD/tint.jpg'
  },
  {
    id: 'os8',
    title: 'Interior and Exterior Resurfacing',
    description: 'Restoring and resurfacing vehicle interiors and exteriors for a fresh look.',
    image: 'https://i.postimg.cc/631pnB1L/int.jpg'
  },
];

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate

  // Function to get the service items based on the service ID
  const getServiceItems = (serviceId) => {
    switch (serviceId) {
      case '1': return paintAndBodyServices;
      case '2': return mechanicalElectricalServices;
      case '3': return faceliftAndConversionServices;
      case '4': return otherServices;
      default: return [];
    }
  };

  const serviceItems = getServiceItems(id);

  const handleBookService = (serviceId) => {
    navigate(`/book-appointment?service=${serviceId}`); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl mb-8">Available Services</h1>
        <img
          src="https://i.postimg.cc/gJCNMjt8/brenxlogo.jpg"
          alt="Promotional Banner"
          className="w-28 h-8 object-cover mb-8"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {serviceItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
              <div className="relative overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute top-0 left-0 w-full h-full object-contain transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                <div className="flex justify-end">
                  <button
                    onClick={() => handleBookService(item.id)} // Pass the service ID
                    className="bg-red-500 hover:bg-gray-900 text-white px-3 py-1 rounded text-sm transition-colors duration-300"
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

export default ServiceDetails;