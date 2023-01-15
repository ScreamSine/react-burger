import * as type from './types';

const initialState = {
  ingridients: [],
  top: null,
  total: 0,
  topTotal: 0,
  orderInfo: null,
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_ITEM:
      return {
        ...state,
        ingridients: [action.payload, ...state.ingridients],
        total: state.total + action.payload.price,
      };
    case type.DELETE_ITEM:
      return {
        ...state,
        ingridients: state.ingridients.filter(
          (el) => el.newId !== action.payload.id
        ),
        total: state.total - action.payload.price,
      };
    case type.PICK_TOP_BOTTOM:
      return {
        ...state,
        top: action.payload,
        topTotal: action.payload.price * 2,
      };
    case type.UPDATE_TOP_BOTTOM:
      return {
        ...state,
        top: action.payload,
        topTotal: action.payload.price * 2,
      };
    case type.CHECKOUT_ORDER:
      return {
        ...state,
        orderInfo: action.payload,
      };
    case type.DELETE_TOP_BOTTOM:
      return {
        ingridients: [],
        top: null,
        total: 0,
        topTotal: 0,
        orderInfo: null,
      };
    default:
      return state;
  }
};

export default orderReducer;
