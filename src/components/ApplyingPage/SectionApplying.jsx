import { ApplyingSlider } from './ApplyingSlider';

export const SectionApplying = ({ applyingType }) => {
  //   const { DesktopImg1, Img1 } = livingroom.imgs;

  // console.log(applyingType);

  const { header, title, description, category, img, imgDesktop } =
    applyingType;

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
            <source srcSet={imgDesktop} media="(min-width:800px)" />
            <img className="applying-img" src={imgDesktop} alt="" />
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
