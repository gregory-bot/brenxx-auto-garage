import React from 'react';
import { useCart } from '../context/CartContext';

function ItemCard({ item }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow rounded p-4 flex flex-col h-full group overflow-hidden">
      <div className="overflow-hidden rounded">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
      <p className="text-gray-600 mb-4">{item.description}</p>

      <div className="mt-auto flex justify-end">
        <button
          onClick={() => addToCart(item)}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-gray-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
