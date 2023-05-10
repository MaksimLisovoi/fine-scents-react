import DesktopImg1 from '../../assets/images/imgs/our-mission-imgs/architecture-1-desktop.jpg';
import Img1 from '../../assets/images/imgs/our-mission-imgs/architecture-1.jpg';

import DesktopImgDual from '../../assets/images/imgs/our-mission-imgs/architecture-2dual-desktop.jpg';
import ImgDual from '../../assets/images/imgs/our-mission-imgs/architecture-2dual.jpg';

import DesktopImgDual2 from '../../assets/images/imgs/our-mission-imgs/architecture-2dual-2-desktop.jpg';
import ImgDual2 from '../../assets/images/imgs/our-mission-imgs/architecture-2dual-2.jpg';

import DesktopImg3 from '../../assets/images/imgs/our-mission-imgs/architecture-3-desktop.jpg';
import Img3 from '../../assets/images/imgs/our-mission-imgs/architecture-3.jpg';

import DesktopImgDual3 from '../../assets/images/imgs/our-mission-imgs/architecture-4dual-desktop.jpg';
import ImgDual3 from '../../assets/images/imgs/our-mission-imgs/architecture-4dual.jpg';

import DesktopImgDual4 from '../../assets/images/imgs/our-mission-imgs/architecture-4dual-2-desktop.jpg';
import ImgDual4 from '../../assets/images/imgs/our-mission-imgs/architecture-4dual-2.jpg';

import DesktopImg5 from '../../assets/images/imgs/our-mission-imgs/architecture-5-desktop.jpg';
import Img5 from '../../assets/images/imgs/our-mission-imgs/architecture-5.jpg';

export const SectionArchitect = () => {
  return (
    <section className="section-architect">
      <div className="container">
        <div className="section-architect__block1">
          <h2 className="section__heading section-architect__heading">
            Our inspiration. ‘Architecture has recorded the great ideas of the
            human race.’
          </h2>
          <picture>
            <source srcSet={DesktopImg1} media="(min-width:800px)" />

            <img className="section-architect__img" src={Img1} alt="" />
          </picture>
          <div className="section-architect__content-block">
            <h3 className="section__heading section-architect__heading-2">
              The language of fragrance
            </h3>
            <p className="section-paragraph section-paragraph-architect">
              There is wisdom to following the steps of this dance—to learning
              the rhythms of natural processes. Noting how they occur, and
              allowing them their pace, without rush or force.
            </p>
          </div>
        </div>

        <div className="section-architect__img-block">
          <figure className="section-architect__img-absolute">
            <picture>
              <source srcSet={DesktopImgDual} media="(min-width:800px)" />

              <img src={ImgDual} alt="" />
            </picture>
            <figcaption className="section-architect__caption">
              The Old Garden
            </figcaption>
          </figure>
          <figure className="section-architect__img-rel">
            <picture>
              <source srcSet={DesktopImgDual2} media="(min-width:800px)" />

              <img src={ImgDual2} alt="" />
            </picture>
            <figcaption className="section-architect__caption">
              The Old Garden
            </figcaption>
          </figure>
        </div>

        <div>
          <h3 className="section__heading section-architect__heading-margin">
            The creation of our original fragrances was the first time that we
            had developed products whose entire raison d’être was olfactory
            pleasure.
          </h3>
          <figure className="section-architect__img2">
            <picture>
              <source srcSet={DesktopImg3} media="(min-width:800px)" />

              <img src={Img3} alt="" />
            </picture>
            <figcaption className="section-architect__caption caption-hidden-desktop">
              The Old Garden
            </figcaption>
          </figure>
        </div>

        <div className="section-architect__position-imgs">
          <figure className="section-architect__img2-rel">
            <picture>
              <source srcSet={DesktopImgDual3} media="(min-width:800px)" />

              <img src={ImgDual3} alt="" />
            </picture>
            <figcaption className="section-architect__caption caption-hidden-mobile">
              The Old Garden
            </figcaption>
          </figure>
          <figure className="section-architect__img2-abs">
            <picture>
              <source srcSet={DesktopImgDual4} media="(min-width:800px)" />

              <img src={ImgDual4} alt="" />
            </picture>
          </figure>
        </div>

        <div>
          <figure>
            <picture>
              <source srcSet={DesktopImg5} media="(min-width:800px)" />

              <img src={Img5} alt="" />
            </picture>

            <figcaption className="section-architect__caption">
              The Old Garden
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};
