import { combineReducers } from 'redux';
import { detailsReducer } from './productDetailReducer';
import { listReducer } from './productListReducer';
import { searchProductsReducer } from './searchProductsReducer';

const rootReducer = combineReducers({
  detailsReducer,
  listReducer,
  searchProductsReducer
});

export default rootReducer;
