import { MainBlock } from 'components/MainPage/MainBlock/MainBlock';
import { Header } from 'components/Header/Header';
import { Bestseller } from 'components/Bestseller/Bestseller';

import { Footer } from 'components/Footer/Footer';
import { Gallery } from 'components/MainPage/Gallery/Gallery';
import { SectionAbout } from 'components/MainPage/SectionAbout/SectionAbout';
import { SectionInfo } from 'components/MainPage/SectionInfo/SectionInfo';
import { SectionMaterial } from 'components/MainPage/SectionMaterial/SectionMaterial';

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
