import { AllGalleryItem } from './AllGalleryItem';
import { GalleryItemLoader } from './AllGalleryItemLoader';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

export const AllGallery = ({ filter, products }) => {
  console.log(products);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const checkRequest = isLoading && !error;
  return (
    <div className="section-products__body">
      <div>
        <div className="section-products__block">
          <ul className="section-products__cards-list">
            {checkRequest
              ? Array(12)
                  .fill(0)
                  .map((el, index) => (
                    <GalleryItemLoader
                      key={index}
                      className={'section-products__card'}
                    />
                  ))
              : products.map(product => (
                  <AllGalleryItem key={product.id} product={product} />
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
