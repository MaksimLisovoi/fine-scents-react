import { GlobalStyle } from './GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout';

import Home from 'pages/Home';
import { ProductPage } from 'pages/ProductPage';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const AboutPage = lazy(() => import('../pages/AboutPage'));
const Applying = lazy(() => import('../pages/Applying'));
const Scents = lazy(() => import('../pages/Scents'));
const AllProducts = lazy(() => import('../pages/AllProductsPage'));
// const Product = lazy(() => import('../pages/ProductPage'));

export const App = () => {
  const dispatch = useDispatch();
  // const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="applying" element={<Applying />} />
          <Route path="scents" element={<Scents />} />
          <Route path="products" element={<AllProducts />} />
          <Route path="products/:id" element={<ProductPage />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
