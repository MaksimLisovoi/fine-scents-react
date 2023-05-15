import { BestsellerSlider } from './BestsellerSlider';
import { BestsellerTextBlock } from './BestsellerTextBlock';

export const Bestseller = () => {
  const buttonsClasses = { next: '.bestseller-next', prev: '.bestseller-prev' };
  return (
    <section className="bestseller__section">
      <div className="bestseller__container container">
        <div className="bestseller__body">
          <BestsellerTextBlock />

          <BestsellerSlider buttonsClasses={buttonsClasses} />
        </div>
      </div>
    </section>
  );
};
