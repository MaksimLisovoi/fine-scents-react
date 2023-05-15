import infoImgDesktop3 from '../../../assets/images/imgs/desktop/info-desktop-3.jpg';

export const SectionInfoDesktopImg = () => {
  return (
    <div className="section-info__img-desktop">
      <picture>
        <source srcSet={infoImgDesktop3} media="(min-width:800px)" />

        <img loading="lazy" src={infoImgDesktop3} alt="" />
      </picture>
    </div>
  );
};
