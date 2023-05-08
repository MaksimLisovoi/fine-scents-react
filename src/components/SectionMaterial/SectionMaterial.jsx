import { Container } from 'components/Container';
import { SectionMaterialFirstBlock } from './SectionMaterialFirstBlock';
import { SectionMaterialSecondBlock } from './SectionMaterialSecondBlock';

export const SectionMaterial = () => {
  return (
    <section className="section-material">
      <Container>
        <SectionMaterialFirstBlock />
        <SectionMaterialSecondBlock />
      </Container>
    </section>
  );
};
