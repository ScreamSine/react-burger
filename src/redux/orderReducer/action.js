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

export const pickTopBottom = (topAndBottom) => {
  return {
    type: type.PICK_TOP_BOTTOM,
    payload: topAndBottom,
  };
};

export const deleteTopBottom = () => {
  return {
    type: type.DELETE_TOP_BOTTOM,
  };
};

export const updateTopBottom = (newTopBottom) => {
  return {
    type: type.UPDATE_TOP_BOTTOM,
    payload: newTopBottom,
  };
};
