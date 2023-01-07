import styles from './ingridient-item.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import * as moadlAction from '../../redux/modalReducer/action';
import * as orderAction from '../../redux/orderReducer/action';
import * as ingridientAction from '../../redux/ingridientsReducer/action';

export const IngridientItem = ({ title }) => {
  const ingridients = useSelector((state) => state.ingridients);
  const dispatch = useDispatch();

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
              onClick={() => {
                dispatch(moadlAction.openModal(el, 'info'));
                dispatch(ingridientAction.pickIngridient(el._id));
                dispatch(orderAction.addItem(el, Date.now()));
              }}
              key={el._id}
              className={styles.card}
            >
              {el.__v ? (
                <div
                  className={`${styles.circle} text text_type_digits-default`}
                >
                  {el.__v}
                </div>
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
