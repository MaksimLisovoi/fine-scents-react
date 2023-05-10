import { Container } from 'components/Container';
import { SectionInfoDescription } from './SectionInfoDescription';

import { SectionInfoImgBlock } from './SectionInfoImgBlock';

export const SectionInfo = () => {
  return (
    <section className="section-info">
      <Container>
        <h2 className="section-info__header">Wood sage & sea salt cologne</h2>
        <SectionInfoImgBlock />

        <SectionInfoDescription />
      </Container>
    </section>
  );
};
