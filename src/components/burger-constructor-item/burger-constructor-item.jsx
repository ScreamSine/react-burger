import PropTypes from 'prop-types';
import {
  DragIcon,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import styles from './burger-constructor-item.module.css';
import * as orderAction from '../../redux/orderReducer/action';
import * as ingridientAction from '../../redux/ingridientsReducer/action';

export const BurgerConstructorItem = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.ItemWrapper}>
      <div className={styles.icon}>
        <DragIcon />
      </div>
      <ConstructorElement
        text={el.name}
        price={el.price}
        extraClass={styles.constructorItem}
        handleClose={() => {
          dispatch(ingridientAction.deleteIngridient(el._id));
          dispatch(orderAction.deleteItem(el.newId, el.price));
        }}
        thumbnail={el.image}
      />
    </div>
  );
};

BurgerConstructorItem.propTypes = {
  el: PropTypes.shape({
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
    newId: PropTypes.number.isRequired,
  }),
};
