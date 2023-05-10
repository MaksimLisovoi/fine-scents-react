import DesktopImg1 from '../../assets/images/imgs/applying-imgs/livingroom-desktop.jpg';
import Img1 from '../../assets//images/imgs/applying-imgs/livingroom.jpg';

import { ApplyingSlider } from './ApplyingSlider';
import { useEffect, useState } from 'react';
import { getForLivingroom } from 'services/dbApi';

export const SectionLivingroom = ({ applyingType }) => {
  //   const { DesktopImg1, Img1 } = livingroom.imgs;

  const [livingroomCategory, setLivingroomProducts] = useState([]);

  useEffect(() => {
    getForLivingroom().then(setLivingroomProducts);
  }, []);

  const { header, title, description, bg } = applyingType;

  const categoryName = header.toLowerCase();

  const bgColor = bg === 'white';

  console.log(categoryName);

  return (
    <section
      className={`section-applying ${bgColor ? 'section-bathroom' : ''}`}
    >
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
          <ApplyingSlider livingroomCategory={livingroomCategory} />
        </div>
        {/* <ApplyingSlider /> */}
      </div>
    </section>
  );
};
