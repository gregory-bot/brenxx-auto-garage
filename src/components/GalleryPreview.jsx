import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiX } from 'react-icons/fi';

const GalleryPreview = () => {
  const previewImages = [
    {
      id: 1,
      url: 'https://i.postimg.cc/50GbcGfx/ga.jpg',
    },
    {
      id: 2,
      url: 'https://i.postimg.cc/X76XpG0n/gal2.jpg',
    },
    {
      id: 3,
      url: 'https://i.postimg.cc/0jR5M3FV/gal3.jpg',
    },
    {
      id: 4,
      url: 'https://i.postimg.cc/YSXwYSDn/gal4.jpg',
    },
    {
      id: 5,
      url: 'https://i.postimg.cc/yxtCyCGy/cvb.jpg',
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => setSelectedImage(image);
  const closeImage = () => setSelectedImage(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <img 
            src="https://i.postimg.cc/gJCNMjt8/brenxlogo.jpg" 
            alt="BRENXX-AUTO logo" 
            className="h-8 w-auto mx-auto mb-4"
          />
          <h2 className="text-4xl font-bold text-black mb-4">Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our work and satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {previewImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openImage(image)}
            >
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/gallery" 
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            view our gallery
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center transition-opacity"
          onClick={closeImage}
        >
          <div
            className="relative w-full max-w-xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeImage}
              className="absolute top-2 right-2 text-white text-3xl hover:text-red-500"
            >
              <FiX />
            </button>
            <div className="w-full h-96 overflow-hidden rounded-lg shadow-lg">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryPreview;
