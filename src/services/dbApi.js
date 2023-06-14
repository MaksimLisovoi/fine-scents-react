import axios from 'axios';

export async function getAllProducts() {
  try {
    const allProducts = await axios.get(`/products`);

    return allProducts.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getProductById(id) {
  try {
    const product = await axios.get(`/products/${id}`);

    return product.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getAllApplyingTypes() {
  try {
    const { data } = await axios.get(`/applying`);
    console.log(data.applyingTypes);

    return data.applyingTypes;
  } catch (error) {
    console.error(error.message);
  }
}
