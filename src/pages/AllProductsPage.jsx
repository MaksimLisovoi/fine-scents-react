import { useEffect, useState } from 'react';
import { getAllProducts } from 'services/dbApi';
import { SideBar } from 'components/MainPage/MainBlock/Sidebar';

import mainImg from '../assets/images/imgs/applying-imgs/applying-hero.jpg';
import mainImgDesktop from '../assets/images/imgs/applying-imgs/applying-hero-desktop.jpg';
import { AllProductsSection } from 'components/AllProductsSection/AllProductsSection';

export default function AllProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  console.log(products);

  return (
    <>
      <SideBar
        mainImg={mainImg}
        mainImgDesktop={mainImgDesktop}
        heading="All Products"
      />
      <AllProductsSection />
    </>
  );
}
