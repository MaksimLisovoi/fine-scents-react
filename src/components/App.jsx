import { GlobalStyle } from './GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { AllProductsPage } from 'pages/AllProductsPage';

const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const Applying = lazy(() => import('../pages/Applying'));
const Scents = lazy(() => import('../pages/Scents'));
const AllProducts = lazy(() => import('../pages/AllProductsPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
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
