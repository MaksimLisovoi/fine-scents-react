import MaterialImgDesk2 from '../../../assets/images/imgs/desktop/materials-desktop-2.jpg';
import MaterialImgDesk3 from '../../../assets/images/imgs/desktop/materials-desktop-3.jpg';
import MaterialImgDesk4 from '../../../assets/images/imgs/desktop/materials-desktop-4.jpg';

import MaterialImgPaper from '../../../assets/images/imgs/materials-paper.jpg';
import MaterialImgSilicone from '../../../assets/images/imgs/materials-silicone.jpg';
import MaterialImgGlass from '../../../assets/images/imgs/materials-glass.jpg';

export const SectionMaterialImgBlock = () => {
  return (
    <div className="section-material__img-block">
      <figure className="section-material__img">
        <picture>
          <source srcSet={MaterialImgDesk2} media="(min-width:800px)" />

          <img src={MaterialImgPaper} alt="" />
        </picture>

        <figcaption className="section-material__img--caption">
          PAPER
        </figcaption>
      </figure>
      <figure className="section-material__img section-material__img--second">
        <picture>
          <source srcSet={MaterialImgDesk3} media="(min-width:800px)" />

          <img src={MaterialImgSilicone} alt="" />
        </picture>

        <figcaption className="section-material__img--caption">
          SILICONE
        </figcaption>
      </figure>

      <figure className="section-material__img">
        <picture>
          <source srcSet={MaterialImgDesk4} media="(min-width:800px)" />

          <img src={MaterialImgGlass} alt="" />
        </picture>

        <figcaption className="section-material__img--caption">
          GLASS
        </figcaption>
      </figure>
    </div>
  );
};
