import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchById } from 'redux/products/operations';

export const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchById(id)).then(setProduct);
  }, [dispatch, id]);

  console.log(product);

  return (
    <>
      <h1>This is ProductPage!</h1>
    </>
  );
};
