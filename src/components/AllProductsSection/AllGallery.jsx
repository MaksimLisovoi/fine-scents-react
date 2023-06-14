import { addProduct } from 'redux/cartSlice';
import { AllGalleryItem } from './AllGalleryItem';
import { GalleryItemLoader } from './AllGalleryItemLoader';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useCallback } from 'react';
import { useCart } from 'hooks/useCart';

export const AllGallery = ({ products }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const { addToCart } = useCart();

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
              : products.length > 0 &&
                products.map(product => (
                  <AllGalleryItem
                    key={product._id}
                    product={product}
                    AddToCart={addToCart}
                  />
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
