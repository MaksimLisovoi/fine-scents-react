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

export async function getBestsellers() {
  try {
    const bestsellers = await axios.get(`${baseUrl}products?isBestseller=true`);

    return bestsellers.data;
  } catch (error) {
    console.error(error.message);
  }
}
export async function getForLivingroom() {
  try {
    const forLivingroom = await axios.get(
      `${baseUrl}products?category=LIVINGROOM`
    );

    return forLivingroom.data;
  } catch (error) {
    console.error(error.message);
  }
}
export async function getForBathroom() {
  try {
    const forBathroom = await axios.get(
      `${baseUrl}products?category=LIVINGROOM`
    );

    return forBathroom.data;
  } catch (error) {
    console.error(error.message);
  }
}
export async function getForWardrobe() {
  try {
    const forWardrobe = await axios.get(
      `${baseUrl}products?category=LIVINGROOM`
    );

    return forWardrobe.data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getAllApplyingTypes() {
  try {
    const allProducts = await axios.get(`${baseUrl}applying`);

    return allProducts.data;
  } catch (error) {
    console.error(error.message);
  }
}
