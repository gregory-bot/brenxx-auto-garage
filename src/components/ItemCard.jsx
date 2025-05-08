import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

function ItemCard({ item }) {
  const { addToCart } = useCart();
  const hasMultipleImages = Array.isArray(item.images) && item.images.length > 1;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = hasMultipleImages ? item.images : [item.image];

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-blue-100 shadow rounded p-4 flex flex-col h-full group overflow-hidden">
      <div className="relative overflow-hidden rounded">
        <img
          src={images[currentImageIndex]}
          alt={item.title}
          className="w-full h-40 sm:h-32 md:h-56 object-contain transition-all duration-500 ease-in-out transform group-hover:scale-105"
        />

        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-70 text-white text-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 focus:outline-none"
              aria-label="Previous Image"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-70 text-white text-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-opacity-90 focus:outline-none"
              aria-label="Next Image"
            >
              ›
            </button>
          </>
        )}
      </div>

      <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
      <p className="text-gray-600 mb-4">{item.description}</p>

      <div className="mt-auto flex justify-end">
        <button
          onClick={() => addToCart(item)}
          className="px-3 py-2 bg-red-600 text-white rounded hover:bg-gray-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
