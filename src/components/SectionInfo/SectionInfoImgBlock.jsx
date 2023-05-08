import { SectionInfoDesktopImg } from './SectionInfoDesktopImg';
import { SectionInfoMobImg } from './SectionInfoMobImg';

export const SectionInfoImgBlock = () => {
  return (
    <div className="section-info__img-box">
      <SectionInfoMobImg />
      <SectionInfoDesktopImg />
    </div>
  );
};
