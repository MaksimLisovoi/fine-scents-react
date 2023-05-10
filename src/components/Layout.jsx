import { Outlet } from 'react-router';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Loader } from '../components/Loader';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="page">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};
