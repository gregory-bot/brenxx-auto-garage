import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Paint and Body works',
    description: 'Professional body repairs and refinishing for all types of vehicles.',
    image: 'https://i.postimg.cc/nhHBHy31/qw.jpg',
  },
  {
    id: 2,
    title: 'Mechanical & Electrical Repairs',
    description: 'Expert mechanical and electrical fault diagnosis and repair.',
    image: 'https://i.postimg.cc/RFKtZg99/deder.jpg',
  },
  {
    id: 3,
    title: 'Facelift and conversions',
    description: 'Upgrade your vehicle’s look with expert facelifts and model conversions for a modern, refreshed style.',
    image: 'https://i.postimg.cc/jqhW3wS8/wr.jpg',
  },
  {
    id: 4,
    title: 'Other Services',
    description: 'Modern diagnostic systems to pinpoint issues quickly and accurately.',
    image: 'https://i.postimg.cc/3R2zKQcB/bay.jpg',
  },
];

function Services() {
  return (
    <section id="services-section" className="py-8 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Offers Section */}
        <h2 className="text-4xl font-bold text-center text-black mb-2">Our Services</h2>
        <p className="mt-2 text-lg text-center text-gray-600 mb-2">
          Comprehensive motor vehicle repair and maintenance garage
        </p>

        {/* Service Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image Container with Hover Effect */}
              <div className="relative group">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Service Title and Description */}
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-lg text-gray-600">{service.description}</p>
                <div className="mt-4 self-end">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-lg px-4 py-2 bg-red-600 text-white hover:bg-gray-700 rounded-md"
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;