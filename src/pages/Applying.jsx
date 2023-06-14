import { SideBar } from 'components/MainPage/MainBlock/Sidebar';

import mainImg from '../assets/images/imgs/applying-imgs/applying-hero.jpg';
import mainImgDesktop from '../assets/images/imgs/applying-imgs/applying-hero-desktop.jpg';

import { useEffect, useState } from 'react';
import { getAllApplyingTypes } from 'services/dbApi';
import { SectionApplying } from 'components/ApplyingPage/SectionApplying';

export default function Applying() {
  const [applyingTypes, setApplyingTypes] = useState([]);

  useEffect(() => {
    getAllApplyingTypes().then(setApplyingTypes);
  }, []);

  return (
    <>
      {/* <h1>Hello!</h1> */}
      <SideBar
        mainImg={mainImg}
        mainImgDesktop={mainImgDesktop}
        heading="Applying"
      />

      {applyingTypes &&
        applyingTypes.map(applyingType => (
          <SectionApplying key={applyingType._id} applyingType={applyingType} />
        ))}
    </>
  );
}
