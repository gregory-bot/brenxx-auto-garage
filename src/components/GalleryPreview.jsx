import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const GalleryPreview = () => {
  const previewImages = [
    {
      id: 1,
      url: 'https://i.postimg.cc/bwkYCyLm/hjh.jpg',
      alt: 'our services'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Added logo image above the heading */}
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {previewImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={image.url} 
                alt={image.alt} 
                className="w-full h-70 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/gallery" 
            className="inline-flex items-center px-2 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            view our gallery
            <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>

    </section>
  );
};

export default GalleryPreview;