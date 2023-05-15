import { Filter } from './Filter';
import { AllGallery } from './AllGallery';
import { useState } from 'react';
import { useProducts } from 'components/productsContext';

export const AllProductsSection = () => {
  const [filter, setFilter] = useState('all');

  const products = useProducts();

  const options = ['all', 'bathroom', 'livingroom', 'wardrobe'];

  const changeFilter = e => {
    const { name } = e.target;

    setFilter(name);
  };

  console.log(filter);
  return (
    <section className="section-products">
      <div className="container">
        <Filter options={options} changeFilter={changeFilter} filter={filter} />
        <AllGallery filter={filter} products={products} />
      </div>
    </section>
  );
};
