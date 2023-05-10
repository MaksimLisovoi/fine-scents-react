import { BestsellerSlider } from './BestsellerSlider';
import { BestsellerTextBlock } from './BestsellerTextBlock';

export const Bestseller = () => {
  return (
    <section className="bestseller__section">
      <div className="bestseller__container container">
        <div className="bestseller__body">
          <BestsellerTextBlock />

          <BestsellerSlider />
        </div>
      </div>
    </section>
  );
};
