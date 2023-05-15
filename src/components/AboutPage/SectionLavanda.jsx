import DesktopImg1 from '../../assets/images/imgs/our-mission-imgs/lavanda-desktop.jpg';
import Img1 from '../../assets/images/imgs/our-mission-imgs/lavanda.jpg';

import DesktopImg2 from '../../assets/images/imgs/our-mission-imgs/section-lavanda-img.jpg';
import Img2 from '../../assets/images/imgs/our-mission-imgs/section-lavanda-img.jpg';

export const SectionLavanda = () => {
  return (
    <section className="section-lavanda">
      <picture>
        <source srcSet={DesktopImg1} media="(min-width:800px)" />

        <img loading="lazy" className="lavanda-img" src={Img1} alt="" />
      </picture>
      <div className="container-lavanda">
        <div className="section-lavanda__block">
          <div>
            <picture>
              <source srcSet={DesktopImg2} media="(min-width:800px)" />

              <img
                loading="lazy"
                className="lavanda-desktop-img"
                src={Img2}
                alt=""
              />
            </picture>
            <p className="section-paragraph section-lavanda-paragraph">
              Use only those with a proven record of safety and efficacy. In
              each of our unique stores, informed consultants are pleased to
              introduce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
