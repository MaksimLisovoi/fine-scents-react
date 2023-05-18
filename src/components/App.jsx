import { GlobalStyle } from './GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';

import Home from 'pages/Home';

const AboutPage = lazy(() => import('../pages/AboutPage'));
const Applying = lazy(() => import('../pages/Applying'));
const Scents = lazy(() => import('../pages/Scents'));
const AllProducts = lazy(() => import('../pages/AllProductsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="applying" element={<Applying />} />
          <Route path="scents" element={<Scents />} />
          <Route path="all" element={<AllProducts />} />
        </Route>
      </Routes>

      <GlobalStyle />
    </>
  );
};
