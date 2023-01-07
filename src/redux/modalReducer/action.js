import * as type from './types';

export const openModal = (data) => {
  return {
    type: type.OPEN_MODAL,
    payload: data,
  };
};

export const closeModal = () => {
  return {
    type: type.CLOSE_MODAL,
  };
};
