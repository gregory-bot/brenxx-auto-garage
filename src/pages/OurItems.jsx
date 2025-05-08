import React from 'react';
import ourItemsData from './ItemsData';
import ItemCard from '../components/ItemCard';

function OurItems() {
  return (
    <section className="py-20 px-4 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Our Items</h2>
      <div className="grid sm-h-24 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {ourItemsData.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default OurItems;
