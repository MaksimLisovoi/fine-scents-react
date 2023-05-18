import { Filter } from './Filter';
import { AllGallery } from './AllGallery';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts } from 'redux/selectors';
import { fetchByCategory, fetchProducts } from 'redux/operations';

export const AllProductsSection = () => {
  const [filter, setFilter] = useState('all');

  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const fetchProductsByCategory = filter => {
    filter === 'all'
      ? dispatch(fetchProducts())
      : dispatch(fetchByCategory(filter));
  };

  const options = ['all', 'bathroom', 'livingroom', 'wardrobe'];

  const changeFilter = e => {
    const { name } = e.target;

    setFilter(name);

    fetchProductsByCategory(name);
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
