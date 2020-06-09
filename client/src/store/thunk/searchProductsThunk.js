import { searchProducts } from '../actions/searchProductsAction';

export const searchProductsThunk = (name) => {
  return (dispatch) => {
    dispatch(searchProducts(name));
  }
}