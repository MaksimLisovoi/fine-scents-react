import MaterialImgDesk1 from '../../../assets/images/imgs/desktop/materials-desktop-1.jpg';
import MaterialImgWalls from '../../../assets/images/imgs/materials-walls.jpg';

export const SectionMaterialFirstBlock = () => {
  return (
    <>
      <div className="section-material__first-img">
        <picture>
          <source srcSet={MaterialImgDesk1} media="(min-width:800px)" />

          <img src={MaterialImgWalls} alt="" />
        </picture>
      </div>
      <p className="section-material__description">
        A meticulous passion. We Used Unique & Elegant Packing Materials. We
        believe that well considered design improves lives. We source materials
        from the most reputable suppliers across the globe and marry
        contemporary technology.
      </p>
    </>
  );
};
