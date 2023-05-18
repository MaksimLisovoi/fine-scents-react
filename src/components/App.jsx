import { GlobalStyle } from './GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { Layout } from './Layout';
import { getAllProducts } from 'services/dbApi';
import { ProductsContext } from './productsContext';
import { fetchProducts } from 'redux/operations';

import Home from 'pages/Home';
import AllProductsPage from 'pages/AllProductsPage';
import { useDispatch } from 'react-redux';

const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const Applying = lazy(() => import('../pages/Applying'));
const Scents = lazy(() => import('../pages/Scents'));
const AllProducts = lazy(() => import('../pages/AllProductsPage'));

export const App = () => {
  // const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   // getAllProducts().then(setProducts);

  //   dispatch(fetchProducts());
  // }, [dispatch]);

  return (
    <>
      {/* <ProductsContext.Provider value={products}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="applying" element={<Applying />} />
          <Route path="scents" element={<Scents />} />
          <Route path="all" element={<AllProducts />} />
        </Route>
      </Routes>
      {/* </ProductsContext.Provider> */}
      <GlobalStyle />
    </>
  );
};
