import axios from 'axios';
let baseUrl = ` http://localhost:3000/`;

export async function getAllProducts() {
  try {
    const allProducts = await axios.get(`${baseUrl}products`);

    return allProducts.data;
  } catch (error) {
    console.error(error.message);
  }
}
