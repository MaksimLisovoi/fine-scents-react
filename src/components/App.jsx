import { GlobalStyle } from './GlobalStyle';

import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';

const HomePage = lazy(() => import('../pages/Home'));
const AboutPage = lazy(() => import('../pages/AboutPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
