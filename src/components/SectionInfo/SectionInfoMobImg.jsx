import infoImg1 from '../../assets/images/imgs/section-info-img.jpg';
import infoImgDesktop1 from '../../assets/images/imgs/desktop/info-desktop-1.jpg';

import infoImg2 from '../../assets/images/imgs/section-info-img2.jpg';
import infoImgDesktop2 from '../../assets/images/imgs/desktop/info-desktop-2.jpg';

export const SectionInfoMobImg = () => {
  return (
    <div className="section-info-merge-block">
      <div className="section-info-img-block">
        <picture>
          <source srcSet={infoImgDesktop1} media="(min-width:800px)" />

          <img className="section-info__img" src={infoImg1} alt="" />
        </picture>

        <picture>
          <source srcSet={infoImgDesktop2} media="(min-width:800px)" />

          <img src={infoImg2} alt="" />
        </picture>
      </div>
    </div>
  );
};
