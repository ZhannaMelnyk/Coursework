import { combineReducers } from 'redux'
import { detailsReducer } from './productDetailReducer'
import { listReducer } from './productListReducer'

const rootReducer = combineReducers({
    detailsReducer,
    listReducer
})

export default rootReducer
