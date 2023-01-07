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
