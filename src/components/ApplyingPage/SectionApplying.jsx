import DesktopImg1 from '../../assets/images/imgs/applying-imgs/livingroom-desktop.jpg';
import Img1 from '../../assets//images/imgs/applying-imgs/livingroom.jpg';

import { ApplyingSlider } from './ApplyingSlider';

// import DesktopImg2 from '../assets/images/imgs/applying-imgs/bathroom-desktop.jpg';
// import Img2 from '../assets//images/imgs/applying-imgs/bathroom.jpg';

// import DesktopImg3 from '../assets/images/imgs/applying-imgs/wardrobe-desktop.jpg';
// import Img3 from '../assets//images/imgs/applying-imgs/wardrobe.jpg';

// const livingroom = {
//   imgs: { DesktopImg1, Img1 },
// };

// const bathroom = {
//   imgs: [DesktopImg2, Img2],
// };

// const wardrobe = {
//   imgs: [DesktopImg3, Img3],
// };

export const SectionApplying = ({ applyingType }) => {
  //   const { DesktopImg1, Img1 } = livingroom.imgs;

  const { header, title, description, category } = applyingType;

  const buttonsClasses = {
    next: '.control-prev ',
    prev: '.control-next ',
  };

  return (
    <section className="section-applying">
      <div className="container">
        <div className="section-livingroom-block">
          <div className="applying__text-block">
            <h2 className="applying__heading">{header}</h2>
            <h3 className="section-h3 section-h3-applying">{title}</h3>
            <p className="section-paragraph">{description}</p>
          </div>

          <picture>
            <source srcSet={DesktopImg1} media="(min-width:800px)" />
            <img className="applying-img" src={Img1} alt="" />
          </picture>
        </div>

        <div className="bestseller__body">
          <ApplyingSlider
            categoryName={category}
            buttonsClasses={buttonsClasses}
          />
        </div>
      </div>
    </section>
  );
};
