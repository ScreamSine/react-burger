import * as type from './types';

const initialState = [];

const ingridientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_INGRIDIENTS:
      return action.payload;
    case type.PICK_INGRIDIENT:
      return state.map((el) =>
        el._id === action.payload ? { ...el, __v: el.__v + 1 } : el
      );
    case type.DELETE_INGRIDIENT:
      return state.map((el) =>
        el._id === action.payload ? { ...el, __v: el.__v - 1 } : el
      );
    case type.DELETE_TOP_BOTTOM_COUNTER:
      return state.map((el) =>
        el._id === action.payload ? { ...el, __v: el.__v - 1 } : el
      );
    default:
      return state;
  }
};

export default ingridientsReducer;
