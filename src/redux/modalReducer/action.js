import * as type from './types';

export const openModal = (data, openType) => {
  return {
    type: type.OPEN_MODAL,
    payload: {
      data,
      openType,
    },
  };
};

export const closeModal = () => {
  return {
    type: type.CLOSE_MODAL,
  };
};
