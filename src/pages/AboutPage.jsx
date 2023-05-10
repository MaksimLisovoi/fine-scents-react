import { SideBar } from 'components/MainPage/MainBlock/Sidebar';

import mainImg from '../assets/images/imgs/our-mission-header.jpg';
import mainImgDesktop from '../assets/images/imgs/our-mission-imgs/our-mission-desktop-header.jpg';
import { SectionDesign } from 'components/AboutPage/SectionDesign';
import { SectionPhilosophy } from 'components/AboutPage/SectionPhilosophy';
import { SectionLavanda } from 'components/AboutPage/SectionLavanda';
import { SectionInterier } from 'components/AboutPage/SectionInterier';
import { SectionArchitect } from 'components/AboutPage/SectionArchitect';

export default function AboutPage() {
  return (
    <>
      {/* <h1>Hello!</h1> */}
      <SideBar
        mainImg={mainImg}
        mainImgDesktop={mainImgDesktop}
        heading="Our Philosophy"
      />
      <SectionDesign />
      <SectionPhilosophy />
      <SectionLavanda />
      <SectionInterier />
      <SectionArchitect />
    </>
  );
}
