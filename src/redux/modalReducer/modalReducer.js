import * as type from './types';

const initialState = {
  open: false,
  content: null,
  type: null,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.OPEN_MODAL:
      console.log(action);
      return {
        open: true,
        content: action.payload.data,
        type: action.payload.openType,
      };
    case type.CLOSE_MODAL:
      return {
        open: false,
        content: null,
        type: null,
      };
    default:
      return state;
  }
};

export default modalReducer;
