import DesktopImg1 from '../../assets/images/imgs/our-mission-imgs/mission-interier-desktop-1.jpg';
import Img1 from '../../assets/images/imgs/our-mission-imgs/mission-interier-1.jpg';

import DesktopImg2 from '../../assets/images/imgs/our-mission-imgs/mission-interier-desktop-2.jpg';
import Img2 from '../../assets/images/imgs/our-mission-imgs/mission-interier-2.jpg';

import DesktopImg3 from '../../assets/images/imgs/our-mission-imgs/mission-interier-desktop-3.jpg';
import Img3 from '../../assets/images/imgs/our-mission-imgs/mission-interier-3.jpg';

import DesktopImg4 from '../../assets/images/imgs/our-mission-imgs/mission-interier-desktop-4.jpg';
import Img4 from '../../assets/images/imgs/our-mission-imgs/mission-interier-4.jpg';

import DesktopImg5 from '../../assets/images/imgs/our-mission-imgs/mission-interier-desktop-5.jpg';
import Img5 from '../../assets/images/imgs/our-mission-imgs/mission-interier-5.jpg';

import DesktopImg6 from '../../assets/images/imgs/our-mission-imgs/mission-interier-desktop-6.jpg';
import Img6 from '../../assets/images/imgs/our-mission-imgs/mission-interier-6.jpg';

export const SectionInterier = () => {
  return (
    <section className="section-interier">
      <div className="container">
        <div className="section-interier__group">
          <div className="section-interier__block">
            <div className="section-interier__img">
              <picture>
                <source srcSet={DesktopImg1} media="(min-width:800px)" />

                <img
                  loading="lazy"
                  className="section-interier__pic"
                  src={Img1}
                  alt=""
                />
              </picture>
            </div>
            <div>
              <h2 className="section__heading section-interier__heading margin-bottom-30">
                The language of fragrance
              </h2>
              <p className="section-paragraph section-paragraph-desktop">
                Our objective has always been to formulate skin, hair and body
                care products of the finest quality; we investigate widely to
                source plant-based and laboratory-made ingredients.
              </p>
              <div className="section-interier__img">
                <picture>
                  <source srcSet={DesktopImg2} media="(min-width:800px)" />

                  <img loading="lazy" src={Img2} alt="" />
                </picture>
              </div>
            </div>
          </div>
          <div className="section-paragraph-mobile">
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
          </div>
        </div>
        <div className="section-interier__group2">
          <div className="section-interier__block2">
            <div className="section-interier__img section-interier__desktop-block">
              <h2 className="section__heading section-interier__heading margin-bottom-30">
                The language of fragrance
              </h2>
              <picture className="img-desktop-position">
                <source srcSet={DesktopImg3} media="(min-width:800px)" />

                <img loading="lazy" src={Img3} alt="" />
              </picture>
              <p className="section-paragraph section-paragraph-desktop">
                Our objective has always been to formulate skin, hair and body
                care products of the finest quality; we investigate widely to
                source plant-based and laboratory-made ingredients.
              </p>
            </div>
            <picture>
              <source srcSet={DesktopImg4} media="(min-width:800px)" />

              <img
                loading="lazy"
                className="section-interier__img"
                src={Img4}
                alt=""
              />
            </picture>
          </div>
          <div className="section-paragraph-mobile">
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
          </div>
        </div>
        <div className="section-interier__group2">
          <div className="section-interier__block">
            <picture className="margin-rigth-24">
              <source srcSet={DesktopImg5} media="(min-width:800px)" />

              <img loading="lazy" src={Img5} alt="" />
            </picture>

            <picture>
              <source srcSet={DesktopImg6} media="(min-width:800px)" />

              <img loading="lazy" src={Img6} alt="" />
            </picture>
          </div>
          <div className="desktop-paragraph__block">
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
          </div>
        </div>
      </div>
    </section>
  );
};
