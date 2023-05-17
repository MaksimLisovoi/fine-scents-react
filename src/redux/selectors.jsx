export const getCartProducts = state => state.cart.items;

// export const getCartSum = state => {
//   const products = getCartProducts(state);

//   const values = Object.values(products);

//   const result = values.reduce((acc, el) => {
//     return (acc += el.price);
//   }, 0);

//   return result;
// };

export const getAddedToCart = state => {
  const cartProducts = getCartProducts(state);

  return Object.keys(cartProducts).map(key => {
    const addedItem = cartProducts[key][0];
    const addedItemAmount = cartProducts[key].length;

    return {
      addedItem,
      addedItemAmount,
    };
  });

  //   return {
  //     addedProducts: addedToCart.addedProducts,
  //     addedProductsAmount:addedToCart.addedProductsAmount,
  //   };
};

export const getCartCount = state => {
  const products = getCartProducts(state);

  const values = Object.values(products);

  const resultArr = values.reduce((acc, el) => {
    return acc.concat(el);
  }, []);

  const sum = resultArr.reduce((acc, el) => {
    return (acc += el.price);
  }, 0);

  return {
    count: resultArr.length,
    sum: sum,
  };
};

// export const getCartCount = state => state.cart.totalCount;

export const selectProducts = state => state.products.items;

export const selectIsLoading = state => state.products.isLoading;

export const selectError = state => state.products.error;
