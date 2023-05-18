import Img1 from '../../assets/images/imgs/all-products-imgs/all-product1.jpg';
import ImgDesktop1 from '../../assets/images/imgs/all-products-imgs/all-product1-desktop.jpg';

import Img2 from '../../assets/images/imgs/all-products-imgs/all-product2.jpg';
import ImgDesktop2 from '../../assets/images/imgs/all-products-imgs/all-product2-desktop.jpg';

import Img3 from '../../assets/images/imgs/all-products-imgs/all-product3.jpg';
import ImgDesktop3 from '../../assets/images/imgs/all-products-imgs/all-product3-desktop.jpg';
import { useProducts } from 'components/productsContext';
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
            {/* {isLoading &&
            Array(12)
              .fill(0)
              .map((_, index) => (
                <GalleryItemLoader
                  key={index}
                  className={'section-products__card'}
                />
              ))} */}
            {isLoading
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
