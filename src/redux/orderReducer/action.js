import * as type from './types';

export const addItem = (item, newId) => {
  return {
    type: type.ADD_ITEM,
    payload: { ...item, newId },
  };
};

export const deleteItem = (id, price) => {
  return {
    type: type.DELETE_ITEM,
    payload: {
      id,
      price,
    },
  };
};
