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

export const updateTopBottom = (newTopBottom) => {
  return {
    type: type.UPDATE_TOP_BOTTOM,
    payload: newTopBottom,
  };
};

export const checkoutOrder = (order) => {
  return async (dispatch) => {
    const response = await fetch(
      'https://norma.nomoreparties.space/api/orders',
      {
        method: 'POST',
        body: JSON.stringify({
          ingredients: order,
        }),
        headers: { 'Content-type': 'application/json' },
      }
    );
    const data = await response.json();
    if (data.success) {
      dispatch({ type: type.CHECKOUT_ORDER, payload: data.order.number });
    }
  };
};

export const deleteTopBottom = () => {
  return {
    type: type.DELETE_TOP_BOTTOM,
  };
};
