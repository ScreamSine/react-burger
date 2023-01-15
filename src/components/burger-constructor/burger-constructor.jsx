import PropTypes from 'prop-types';
import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { BurgerConstructorItem } from '../burger-constructor-item/burger-constructor-item';
import { BurgerTopBottom } from '../burger-top-bottom/BurgerTopBottom';
import { OrderDetails } from '../order-details/order-details';
import { stateType } from '../../utils/types';
import styles from './burger-constructor.module.css';
import * as orderAction from '../../redux/orderReducer/action';

export const BurgerConstructor = ({ togglePopup, setModalContent }) => {
  const order = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const checkout = async () => {
    const orderId = order.ingridients.map((el) => el._id);
    dispatch(orderAction.checkoutOrder([order.top._id, ...orderId]));
    togglePopup('order');
    setModalContent(<OrderDetails />);
  };

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
              onClick={checkout}
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

BurgerConstructor.propTypes = stateType(PropTypes);
