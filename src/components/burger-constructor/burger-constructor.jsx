import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item';
import { BurgerTopBottom } from '../burger-top-bottom/BurgerTopBottom';
import { OrderDetails } from '../order-details/order-details';
import styles from './burger-constructor.module.css';
import * as modalAction from '../../redux/modalReducer/action';

export const BurgerConstructor = () => {
  const order = useSelector((state) => state.orders);

  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.container}>
        <div>
          {order.top ? (
            <BurgerTopBottom>
              <div className={styles.wrapper}>
                {order.ingridients.map((el, i) => (
                  <BurgerConstructorItem key={i} el={el} />
                ))}
              </div>
            </BurgerTopBottom>
          ) : null}
          <div className={styles.result}>
            <div className={styles.totalPrice}>
              <div className="text text_type_digits-medium">
                {order.total + order.topTotal}
              </div>
              <CurrencyIcon />
            </div>
            <Button
              onClick={() => dispatch(modalAction.openModal(<OrderDetails />))}
              htmlType="button"
              type="primary"
              disabled={!order.ingridients.length ? true : false}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
