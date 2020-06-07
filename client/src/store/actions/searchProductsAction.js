export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS';

export const searchProducts = (name) => {
  return {
    type: SEARCH_PRODUCTS,
    productName: name
  }
}