import * as type from './types';

export const getIngridients = (data) => {
  return {
    type: type.GET_INGRIDIENTS,
    payload: data,
  };
};

export const pickIngridient = (id) => {
  return {
    type: type.PICK_INGRIDIENT,
    payload: id,
  };
};

export const deleteIngridient = (id) => {
  return {
    type: type.DELETE_INGRIDIENT,
    payload: id,
  };
};

export const deleteTopBottomCounter = (id) => {
  return {
    type: type.DELETE_TOP_BOTTOM_COUNTER,
    payload: id,
  };
};
