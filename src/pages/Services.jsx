import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OffersSection from '../components/OffersSection'; // Imported OffersSection
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

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

const brands = [
  { id: 1, name: 'Toyota', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-011-qece129h732jcdxdlsk3awootjmruym4yd7gpu1rs8.png' },
  { id: 2, name: 'Nissan', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-09-1-qece1aq0wle48vl38e7qfcju60h2s8jpzj2u1bp888.png' },
  { id: 3, name: 'Honda', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-06-1-qece17wic3a9a1p6ouzupv9gduuz558iz54dlhteqw.png' },
  { id: 4, name: 'Mazda', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-07-1-qece18ucixbjlnntjdehad0wz8qccuc9b9rv2rs0ko.png' },
  { id: 5, name: 'Subaru', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-02-1-qece1455kr53zlunatdcfw7m0bdiactlmmifodyzfs.png' },
  { id: 6, name: 'Volkswagen', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-03-1-qece152zrl6eb7ta5brz0dz2lp8vi1xbyr5x5nxl9k.png' },
  { id: 7, name: 'Mercedes', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-08-1-qece19s6prctx9mgdvt3uusdkmlpkjfznefck1qmeg.png' },
  { id: 8, name: 'BMW', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-05-1-qece16yo598yyfqjucl85dhzsgzlxg4sn0gw47usx4.png' },
  { id: 9, name: 'Audi', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-04-1-qece160tyf7omtrwzu6lkvqj7348pr12avtemxw73c.png' },
  { id: 10, name: 'Lexus', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-01-1-qece137bdx3tnzw0gaypveg5exi52npvahuy740dm0.png' },
  { id: 11, name: 'Land-Rover', logo: 'https://automotivedoctor.co.ke/wp-content/uploads/elementor/thumbs/Top-brands-by-Automotive-Doctor-Motor-Garage-010-qece1bnv3ffekhjq2wmczubarecfzxngbnqbilnu20.png' },
];

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBrands, setVisibleBrands] = useState(4);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const totalSlides = Math.ceil(brands.length / visibleBrands);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleBrands(2);
      else if (window.innerWidth < 768) setVisibleBrands(3);
      else setVisibleBrands(4);
    };

    handleResize(); // Initial
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev === 0 ? brands.length - visibleBrands : prev - visibleBrands
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) =>
      prev + visibleBrands >= brands.length ? 0 : prev + visibleBrands
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(index * visibleBrands);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const getVisibleBrands = () => {
    let endIndex = currentIndex + visibleBrands;
    if (endIndex > brands.length) {
      return [...brands.slice(currentIndex), ...brands.slice(0, endIndex % brands.length)];
    }
    return brands.slice(currentIndex, endIndex);
  };

  return (
    <section id="services-section" className="py-8 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Offers Section */}
        <OffersSection />

        <h2 className="text-3xl font-bold text-center text-black mb-2">Our Services</h2>
        <p className="mt-2 text-lg text-center text-gray-600 mb-2">
          Comprehensive motor vehicle repair and maintenance garage
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md hover:scale-105 transition-transform">
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover" />
              <div className="p-4 flex flex-col justify-between h-46">
                <div>
                  <h3 className="text-md font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 line-clamp-3">{service.description}</p>
                </div>
                <div className="mt-2 self-end">
                  <Link
                    to={`/services/${service.id}`}
                    className="text-sm px-3 py-1 bg-red-600 text-white hover:bg-blue-700 rounded-md"
                  >
                    More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top Brands Carousel */}
        <div
          className="mt-16 bg-cover bg-center bg-no-repeat py-8 px-4 sm:px-6 lg:px-8"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/2162618334/photo/parking-lot-is-full-of-cars.jpg?s=612x612&w=0&k=20&c=xxZOahuZpeZpgs3CRGNKjIINQmO_4FWXuFQdQ_9ZoHE=')",
          }}
        >
          <h3 className="text-3xl font-bold text-center text-black mb-6">Our Top Brands</h3>

          <div className="relative max-w-4xl mx-auto">
            {/* Desktop Arrows */}
            <button
              onClick={handlePrev}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-yellow-100 p-2 rounded-full z-10 shadow hover:bg-gray-100"
            >
              <FiChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={handleNext}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-yellow-100 p-2 rounded-full z-10 shadow hover:bg-gray-100"
            >
              <FiChevronRight className="w-6 h-6 text-black" />
            </button>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1 justify-center">
              {getVisibleBrands().map((brand) => (
                <div key={brand.id} className="flex flex-col items-center transition hover:scale-110">
                  <div className="w-16 h-16 sm:w-28 sm:h-28 p-2 sm:p-4 bg-white rounded-lg shadow">
                    <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="mt-2 text-sm sm:text-lg font-bold text-white">{brand.name}</p>
                </div>
              ))}
            </div>

            {/* Mobile Arrows */}
            <div className="sm:hidden flex justify-between items-center mt-4">
              <button onClick={handlePrev} className="bg-white p-3 rounded-full shadow hover:bg-gray-100">
                <FiChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button onClick={handleNext} className="bg-white p-3 rounded-full shadow hover:bg-gray-100">
                <FiChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex / visibleBrands === index ? 'bg-black w-2' : 'bg-gray-300'
                  } transition-all`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
