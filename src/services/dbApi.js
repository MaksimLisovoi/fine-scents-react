import axios from 'axios';

export async function getAllProducts() {
  try {
    const allProducts = await axios.get(`/products`);

    return allProducts.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getAllApplyingTypes() {
  try {
    const allProducts = await axios.get(`/applying`);

    return allProducts.data;
  } catch (error) {
    console.error(error.message);
  }
}
