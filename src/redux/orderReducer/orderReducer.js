import * as type from './types';

const initialState = {
  ingridients: [],
  total: 0,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_ITEM:
      return {
        ingridients: [...state.ingridients, action.payload],
        total: state.total + action.payload.price,
      };
    case type.DELETE_ITEM:
      return {
        ingridients: state.ingridients.filter(
          (el) => el.newId !== action.payload.id
        ),
        total: state.total - action.payload.price,
      };
    default:
      return state;
  }
};

export default orderReducer;
