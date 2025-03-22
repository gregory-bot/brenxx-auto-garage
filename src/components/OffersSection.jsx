import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

function OffersSection() {
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  const offers = [
    {
      title: 'Your One-Stop Garage – Great Deals Await',
      images: [
        'https://i.postimg.cc/rFxWMKdK/LOGO.jpg',
        'https://i.postimg.cc/jjmkwMTs/engine.jpg',
        'https://i.postimg.cc/7hZDPxyC/paint.jpg',
        'https://i.postimg.cc/ryxVnW0Z/paint.jpg',
        'https://i.postimg.cc/zXszk9g9/carousel.jpg',
      ],
    },
  ];

  const handleSeeAllClick = () => {
    setIsFading(true); // Trigger fade-out effect
    setTimeout(() => {
      navigate('/offers'); // Navigate to the offers page after the fade-out
    }, 300); // Match the duration of the CSS transition
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-4 mb-8 transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
<h2
  className="text-3xl font-bold bg-blue-200 mb-4"
  style={{
    fontFamily: 'Courier New, monospace',
    borderRadius: '12px', // Rounded corners
    padding: '1rem'        // Optional: adds spacing inside the box
  }}
>
  Keeping you on the road – special discounts available🙂
</h2>

      <div className="grid grid-cols-1 gap-4">
        {offers.map((offer, index) => (
          <div key={index} className="mb-4 relative">
            <h3 className="text-xl text-blue-600 font-semibold mb-2">{offer.title}</h3>
            <Carousel
              showThumbs={false}
              autoPlay
              interval={8000}
              infiniteLoop
              showStatus={false}
              className="h-32"
            >
              {offer.images.map((image, idx) => (
                <div key={idx} className="h-32 relative">
                  <img
                    src={image}
                    alt={`Offer ${index + 1} Image ${idx + 1}`}
                    className="h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">
                    50% OFF
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleSeeAllClick}
          className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200"
        >
          see all
        </button>
      </div>
    </div>
  );
}

export default OffersSection;