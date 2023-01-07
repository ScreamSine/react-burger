import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import ingridientsReducer from './ingridientsReducer/ingridientsReducer';
import modalReducer from './modalReducer/modalReducer';
import orderReducer from './orderReducer/orderReducer';

const rootReducer = combineReducers({
  ingridients: ingridientsReducer,
  orders: orderReducer,
  modal: modalReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
