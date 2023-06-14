import imgDesktop from '../../assets/images/imgs/desktop/one-product-img.jpg';

export const ImgBlock = () => {
  return (
    <div className="section-product__img-block">
      <picture>
        <img src={imgDesktop} alt="" />
      </picture>
    </div>
  );
};
