import styles from './ingridient-item.module.css';
import {
  Counter,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import * as moadlAction from '../../redux/modalReducer/action';
import * as orderAction from '../../redux/orderReducer/action';
import * as ingridientAction from '../../redux/ingridientsReducer/action';

export const IngridientItem = ({ title }) => {
  const ingridients = useSelector((state) => state.ingridients);
  const order = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const selectIngridient = (el) => {
    // console.log('STATE', order.top?._id);
    // console.log('PICK', el._id);
    if (el.type === 'bun' && !order.top) {
      dispatch(moadlAction.openModal(el, 'info'));
      dispatch(ingridientAction.pickIngridient(el._id));
      dispatch(orderAction.pickTopBottom(el));
    } else if (el.type === 'bun' && el.__v >= 1) {
      return;
    } else if (el.type === 'bun' && order.top) {
      // const choice = window.confirm('Вы хотите сменить булочку?');
      // if (choice) {
      dispatch(moadlAction.openModal(el, 'info'));
      dispatch(ingridientAction.deleteTopBottomCounter(order.top?._id));
      dispatch(orderAction.updateTopBottom(el));
      dispatch(ingridientAction.pickIngridient(el._id));
      // } else {
      //   return;
      // }
    } else if (el.type !== 'bun' && order.top) {
      dispatch(moadlAction.openModal(el, 'info'));
      dispatch(ingridientAction.pickIngridient(el._id));
      dispatch(orderAction.addItem(el, Date.now()));
    } else {
      alert('Сначала выберите булку');
    }
  };

  return (
    <>
      <div className={styles.title}>
        {title === 'bun' ? 'Булки' : title === 'sauce' ? 'Соусы' : 'Начинки'}
      </div>
      <div className={styles.container}>
        {ingridients
          .filter((el) => el.type === title)
          .map((el) => (
            <div
              onClick={() => selectIngridient(el)}
              key={el._id}
              className={styles.card}
            >
              {el.__v ? (
                <Counter count={el.__v} size="default" extraClass="m-1" />
              ) : null}
              <div className={styles.img}>
                <img src={el.image} alt="el.name" />
              </div>
              <div className={`${styles.price} text text_type_digits-default`}>
                <div>{el.price}</div>
                <CurrencyIcon />
              </div>
              <div className={`${styles.name} text text_type_main-small`}>
                {el.name}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
