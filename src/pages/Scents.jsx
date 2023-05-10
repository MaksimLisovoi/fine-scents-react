import { SideBar } from 'components/MainPage/MainBlock/Sidebar';

import mainImg from '../assets/images/imgs/applying-imgs/applying-hero.jpg';
import mainImgDesktop from '../assets/images/imgs/applying-imgs/applying-hero-desktop.jpg';

export default function AboutPage() {
  return (
    <>
      {/* <h1>Hello!</h1> */}
      <SideBar
        mainImg={mainImg}
        mainImgDesktop={mainImgDesktop}
        heading="Scents"
      />
    </>
  );
}
