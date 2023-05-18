import { SideBar } from 'components/MainPage/MainBlock/Sidebar';

import mainImg from '../assets/images/imgs/all-products-imgs/hero-all-products.jpg';
import mainImgDesktop from '../assets/images/imgs/all-products-imgs/hero-all-products-desktop.jpg';
import { AllProductsSection } from 'components/AllProductsSection/AllProductsSection';

export default function AllProductsPage() {
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
