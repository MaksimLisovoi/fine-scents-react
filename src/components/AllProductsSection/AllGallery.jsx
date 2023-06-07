import { addProduct } from 'redux/cartSlice';
import { AllGalleryItem } from './AllGalleryItem';
import { GalleryItemLoader } from './AllGalleryItemLoader';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useCallback } from 'react';

export const AllGallery = ({ products }) => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  // const AddToCart = (name, type, price, id, urlDesktop, url) => {
  //   const product = {
  //     id,
  //     name,
  //     type,
  //     price,
  //     urlDesktop,
  //     url,
  //   };

  //   dispatch(addProduct(product));
  // };

  const AddToCart = useCallback((name, type, price, id, urlDesktop, url) => {
    const product = {
      id,
      name,
      type,
      price,
      urlDesktop,
      url,
    };

    dispatch(addProduct(product));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                    key={product.id}
                    product={product}
                    AddToCart={AddToCart}
                  />
                ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
