import { SectionMaterialDescrBlock } from './SectionMaterialDescrBlock';
import { SectionMaterialImgBlock } from './SectionMaterialImgBlock';

export const SectionMaterialSecondBlock = () => {
  return (
    <div className="section-material__block">
      <div>
        <h2 className="section-material__header">MATERIALS USED</h2>
        <SectionMaterialImgBlock />
      </div>
      <SectionMaterialDescrBlock />
    </div>
  );
};
