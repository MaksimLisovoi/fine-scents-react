import { MainBlock } from 'components/MainBlock/MainBlock';
import { Header } from 'components/Header/Header';
import { Bestseller } from 'components/Bestseller.jsx/Bestseller';
import { SectionAbout } from 'components/SectionAbout/SectionAbout';
import { SectionInfo } from 'components/SectionInfo/SectionInfo';
import { SectionMaterial } from 'components/SectionMaterial/SectionMaterial';
import { Footer } from 'components/Footer/Footer';
import { Gallery } from 'components/Gallery/Gallery';

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
