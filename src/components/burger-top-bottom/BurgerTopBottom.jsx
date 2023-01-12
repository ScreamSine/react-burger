import PropTypes from 'prop-types';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import styles from './BurgerTopBottom.module.css';
import * as orderAction from '../../redux/orderReducer/action';
import * as ingridientAction from '../../redux/ingridientsReducer/action';

export const BurgerTopBottom = ({ children }) => {
  const topAndBottom = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const deleteTopBottom = () => {
    dispatch(orderAction.deleteTopBottom());
    dispatch(ingridientAction.deleteIngridient(topAndBottom.top._id));
  };

  return (
    <>
      <ConstructorElement
        type="top"
        isLocked={topAndBottom.ingridients.length ? true : false}
        text={`${topAndBottom.top.name} (верх)`}
        price={topAndBottom.top.price}
        extraClass={styles.constructorItemTop}
        thumbnail={topAndBottom.top.image}
        handleClose={deleteTopBottom}
      />
      {children}
      <ConstructorElement
        type="bottom"
        isLocked={topAndBottom.ingridients.length ? true : false}
        text={`${topAndBottom.top.name} (низ)`}
        price={topAndBottom.top.price}
        extraClass={styles.constructorItemBottom}
        thumbnail={topAndBottom.top.image}
        handleClose={deleteTopBottom}
      />
    </>
  );
};

BurgerTopBottom.defaultProps = {
  children: PropTypes.object.isRequired,
};
