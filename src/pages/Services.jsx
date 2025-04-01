import React from 'react';
import ServiceCard from '../components/ServiceCard';
import OffersSection from '../components/OffersSection';

const services = [
  {
    id: 1,
    title: 'Car Repair & Service',
    description: 'Comprehensive car repair and routine servicing for all vehicle models.',
    image: 'https://i.postimg.cc/02C2fmtz/xx.jpg', // Replace with a garage-related image
    price: false
  },
  {
    id: 2,
    title: 'Mechanical & Electrical Repairs',
    description: 'Expert mechanical and electrical fault diagnosis and repair.',
    image: 'https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace as needed
    price: false
  },
  {
    id: 3,
    title: 'Paint & Body Work',
    description: 'Professional spray painting and body restoration to factory finish.',
    image: 'https://i.postimg.cc/ryxVnW0Z/paint.jpg',
    price: false
  },
  {
    id: 4,
    title: 'Vehicle Diagnostics',
    description: 'Modern diagnostic systems to pinpoint issues quickly and accurately.',
    image: 'https://i.postimg.cc/xCLwRvxK/diagnostics.jpg',
    price: false
  },
  {
    id: 5,
    title: 'Accident Repairs',
    description: 'Full accident recovery and repairs with attention to detail.',
    image: 'https://i.postimg.cc/nzDJWs21/acc.jpg', // Replace as needed
    price: false
  },
  {
    id: 6,
    title: 'Maintenance Services',
    description: 'Oil changes, brake checks, and full vehicle maintenance.',
    image: 'https://images.pexels.com/photos/4489721/pexels-photo-4489721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Replace as needed
    price: false
  },
  {
    id: 7,
    title: 'Tire Services',
    description: 'Tire fitting, balancing, and puncture repairs for all vehicles.',
    image: 'https://i.postimg.cc/hvhDNJbr/tire.jpg', // Replace as needed
    price: false
  },
  {
    id: 8,
    title: 'Vehicle Detailing',
    description: 'Professional car detailing and valeting services.',
    image: 'https://i.postimg.cc/cCtBW41Q/lux.jpg', // Replace as needed
    price: false
  },
  {
    id: 9,
    title: 'Brake & Suspension Services',
    description: 'Top-notch brake system and suspension repair for safe driving.',
    image: 'https://media.istockphoto.com/id/2103765709/photo/a-car-is-on-a-lift-showing-its-underside-with-a-wheel-leaf-spring-and-suspension-components.jpg?s=612x612&w=0&k=20&c=iLKidByskn3d_8pl82nEKiEIjBGg2mmqD-De949MGBw=',
    price: false
  },
  {
    id: 10,
    title: 'Battery Check & Replacement',
    description: 'Testing, jump-starting, and replacement of car batteries.',
    image: 'https://images.pexels.com/photos/4374843/pexels-photo-4374843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    price: false
  },
];

function Services() {
  return (
    <section id="services-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OffersSection />
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Our Services</h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
            {services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
        
        {/* Marquee Section - Fixed */}
        <div className="mt-12 overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap">
            {/* Repeat each message multiple times for smooth looping */}
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={`welcome-${i}`}>
                <span className="text-2xl text-blue-600 mx-4">
                  Welcome to Brenxx Auto Garage ✨
                </span>
                <span className="text-2xl text-blue-600 mx-4">
                  keeping you on the road ✨
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      {/* Updated CSS for smoother animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
          padding-right: 100%; /* Creates space for smooth looping */
        }
      `}</style>
    </section>
  );
}

export default Services;