import * as type from './types';

const initialState = {
  open: false,
  content: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.OPEN_MODAL:
      return {
        open: true,
        content: action.payload,
      };
    case type.CLOSE_MODAL:
      return {
        open: false,
        content: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
