import DesktopImg1 from '../../assets/images/imgs/our-mission-imgs/section-design-img-desktop.jpg';
import Img1 from '../../assets/images/imgs/our-mission-imgs/section-design-img.jpg';

import DesktopImg2 from '../../assets/images/imgs/our-mission-imgs/section-design-img-desktop-2.jpg';
import Img2 from '../../assets/images/imgs/our-mission-imgs/section-design-img-desktop-2.jpg';

export const SectionDesign = () => {
  return (
    <section className="section-design">
      <div className="container">
        <div className="section-design__position">
          <div className="section-design__text-block">
            <h2 className="section__heading section__heading-design margin-bottom-30">
              A sincere interest in <i>intelligent</i> design
            </h2>
            <div className="section-design__block">
              <p className="section-paragraph">
                Our objective has always been to formulate skin, hair and body
                care products of the finest quality; we investigate widely to
                source plant-based and laboratory-made ingredients.
              </p>
              <p className="section-paragraph">
                Use only those with a proven record of safety and efficacy. In
                each of our unique stores, informed consultants are pleased to
                introduce.
              </p>
              <p className="section-paragraph">
                Use only those with a proven record of safety and efficacy. In
                each of our unique stores, informed consultants are pleased to
                introduce.
              </p>
            </div>
          </div>
          <div className="section-design__img-block">
            <picture>
              <source srcSet={DesktopImg1} media="(min-width:800px)" />

              <img
                className="section-design__img section-design__img--first"
                src={Img1}
                alt=""
              />
            </picture>
            <picture>
              <source srcSet={DesktopImg2} media="(min-width:800px)" />

              <img
                className="section-design__img section-design__img--second"
                src={Img2}
                alt=""
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};
