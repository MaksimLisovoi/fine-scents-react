import { Container } from 'components/Container';
import { MainSlider } from './MainSlider';
import { MainControls } from './MainControls';

export const MainBlock = () => {
  return (
    <div className="main-block">
      <Container>
        <MainControls />
      </Container>

      <MainSlider />
    </div>
  );
};
