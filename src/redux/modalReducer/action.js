import * as type from './types';

export const openModal = (data) => {
  console.log(data);
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
