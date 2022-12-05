import { productList } from "./data.js";

const getProductsOfNormalQuality = (pProducts) => {
  return pProducts.filter((product) => product.quality == "Normal");
};

const getProductImageWithPngExtension = (pProducts) => {
  return pProducts.filter((product) => product.productImage.endsWith(".png"));
};

const getCalorieOfTheMostExpensiveProduct = (pProducts) => {
  const sortedProducts = pProducts.sort((product1, product2) => product2.price - product1.price);
  return sortedProducts[0].totalCalories;
};

const sortByExpirationDate = (pProducts) => {
  return pProducts.sort((product1, product2) => product1.expireDate - product2.expireDate)
};

export {
  getProductsOfNormalQuality,
  getProductImageWithPngExtension,
  getCalorieOfTheMostExpensiveProduct,
  sortByExpirationDate,
};