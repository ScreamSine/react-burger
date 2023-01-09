export const ingredientType = (PropTypes, newI) => {
  const ingredientType = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  };
  return ingredientType;
};

export const stateType = (PropTypes) => {
  const stateType = {
    setOpen: PropTypes.func.isRequired,
    setModalContent: PropTypes.func.isRequired,
  };
  return stateType;
};
