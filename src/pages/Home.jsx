import { MainBlock } from 'components/MainPage/MainBlock/MainBlock';

import { Bestseller } from 'components/Bestseller/Bestseller';

import { Gallery } from 'components/MainPage/Gallery/Gallery';
import { SectionAbout } from 'components/MainPage/SectionAbout/SectionAbout';
import { SectionInfo } from 'components/MainPage/SectionInfo/SectionInfo';
import { SectionMaterial } from 'components/MainPage/SectionMaterial/SectionMaterial';
import { useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  return (
    <>
      <MainBlock />
      <Bestseller />
      <SectionAbout />
      <Gallery />
      <SectionInfo />
      <SectionMaterial />
    </>
  );
}
