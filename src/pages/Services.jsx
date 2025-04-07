import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Make sure react-router-dom is installed
import OffersSection from '../components/OffersSection';
// Removed unused import: ServiceCard

const services = [
  {
    id: 1,
    title: 'Car Repair & Service',
    description: 'Comprehensive car repair and routine servicing for all vehicle models.',
    image: 'https://i.postimg.cc/02C2fmtz/xx.jpg',
  },
  {
    id: 2,
    title: 'Mechanical & Electrical Repairs',
    description: 'Expert mechanical and electrical fault diagnosis and repair.',
    image: 'https://images.pexels.com/photos/159293/car-engine-motor-clean-customized-159293.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Paint & Body Work',
    description: 'Professional spray painting and body restoration to factory finish.',
    image: 'https://i.postimg.cc/ryxVnW0Z/paint.jpg',
  },
  {
    id: 4,
    title: 'Vehicle Diagnostics',
    description: 'Modern diagnostic systems to pinpoint issues quickly and accurately.',
    image: 'https://i.postimg.cc/xCLwRvxK/diagnostics.jpg',
  },
  {
    id: 5,
    title: 'Accident Repairs',
    description: 'Full accident recovery and repairs with attention to detail.',
    image: 'https://i.postimg.cc/nzDJWs21/acc.jpg',
  },
  {
    id: 6,
    title: 'Maintenance Services',
    description: 'Oil changes, brake checks, and full vehicle maintenance.',
    image: 'https://i.postimg.cc/2y0Pd9L4/fgh.jpg',
  },
  {
    id: 7,
    title: 'Tire Services',
    description: 'Tire fitting, balancing, and puncture repairs for all vehicles.',
    image: 'https://i.postimg.cc/hvhDNJbr/tire.jpg',
  },
  {
    id: 8,
    title: 'Vehicle Detailing',
    description: 'Professional car detailing and valeting services.',
    image: 'https://i.postimg.cc/cCtBW41Q/lux.jpg',
  },
  {
    id: 9,
    title: 'Brake & Suspension Services',
    description: 'Top-notch brake system and suspension repair for safe driving.',
    image: 'https://media.istockphoto.com/id/2103765709/photo/a-car-is-on-a-lift-showing-its-underside-with-a-wheel-leaf-spring-and-suspension-components.jpg?s=612x612&w=0&k=20&c=iLKidByskn3d_8pl82nEKiEIjBGg2mmqD-De949MGBw=',
  },
  {
    id: 10,
    title: 'Battery Check & Replacement',
    description: 'Testing, jump-starting, and replacement of car batteries.',
    image: 'https://images.pexels.com/photos/4374843/pexels-photo-4374843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

function Services() {
  return (
    <section id="services-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <OffersSection />
        <h2 className="text-3xl text-center text-black mb-6">Our Services</h2>
        <p className="mt-2 text-lg text-center text-gray-600 mb-8">
          Comprehensive motor vehicle repair and maintenance garage
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {services.map((service) => (
  <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-32 object-cover"
  />
  <div className="p-4 flex flex-col justify-between h-48"> {/* Increased height */}
    <div>
      <h3 className="text-md font-semibold text-gray-900">
        {service.title}
      </h3>
      <p className="mt-1 text-sm text-gray-600 line-clamp-3">
        {service.description}
      </p>
    </div>
    <div className="mt-2 self-end"> {/* Added margin-top and self-align */}
      <Link
        to={`/services/${service.id}`}
        className="inline-block text-sm px-3 py-1 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors"
      >
        More
      </Link>
    </div>
  </div>
</div>

))}

        </div>

        {/* Marquee Section */}
        <div className="mt-12 overflow-hidden relative">
          <div className="animate-marquee whitespace-nowrap">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={`welcome-${i}`}>
                <span className="text-2xl text-black mx-4">
                  Welcome to Brenxx Auto Garage ✨
                </span>
                <span className="text-2xl text-black mx-4">
                  Keeping you on the road ✨
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
          padding-right: 100%;
        }
      `}</style>
    </section>
  );
}

export default Services;
