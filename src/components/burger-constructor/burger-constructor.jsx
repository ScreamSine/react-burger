import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item';
import * as modalAction from '../../redux/modalReducer/action';
import styles from './burger-constructor.module.css';

export const BurgerConstructor = () => {
  const order = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.container}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          extraClass={styles.constructorItemTop}
          // thumbnail={img}
        />
        <div className={styles.wrapper}>
          {order.ingridients.map((el, i) => (
            <BurgerConstructorItem key={i} el={el} />
          ))}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          extraClass={styles.constructorItemBottom}
          // thumbnail={img}
        />
        <div className={styles.result}>
          <div className={styles.totalPrice}>
            <div className="text text_type_digits-medium">{order.total}</div>
            <CurrencyIcon />
          </div>
          <Button
            onClick={() => dispatch(modalAction.openModal(order))}
            htmlType="button"
            type="primary"
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </>
  );
};
