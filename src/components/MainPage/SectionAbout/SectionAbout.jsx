import { Container } from 'components/Container';
import { SectionAboutDescription } from './SectionAboutDescription';
import { SectionAboutParagraph } from './SectionAboutParagraph';

export const SectionAbout = () => {
  return (
    <section className="section-about">
      <Container>
        <SectionAboutDescription />
        <SectionAboutParagraph />
      </Container>
    </section>
  );
};
