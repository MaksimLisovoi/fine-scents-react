import { GallerySlider } from './GallerySlider';
import { GallerySliderCtrls } from './GallerySliderCtrls';

export const Gallery = () => {
  return (
    <section className="section-gallery">
      <div className="container slider-controls__position">
        <h2 className="section-gallery__header">GALLERY</h2>
        <div className="section-gallery__gallery">
          <h3 className="section-gallery__slideshow-header top">
            Love Letters
          </h3>
          <h3 className="section-gallery__slideshow-header bottom">
            From Britain
          </h3>

          <GallerySlider />
        </div>
        <div className="swiper-pagination section-gallery__pagination"></div>
        <div className="gallery-scrollbar section-gallery__scrollbar"></div>
        <GallerySliderCtrls />
      </div>
    </section>
  );
};
