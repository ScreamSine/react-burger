import { useEffect, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngridientItem } from '../ingridient-item/ingridient-item';
import styles from './burger-ingredients.module.css';
import { data } from '../../utils/data';
import { useDispatch } from 'react-redux';
import * as ingridientAction from '../../redux/ingridientsReducer/action';

export const BurgerIngredients = () => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState('one');

  useEffect(() => {
    dispatch(ingridientAction.getIngridients(data));
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Соберите бургер</div>
      <div className={styles.ingridient}>
        <Tab
          onClick={() => setCurrent('one')}
          value="one"
          active={current === 'one'}
        >
          Булки
        </Tab>
        <Tab
          onClick={() => setCurrent('two')}
          value="two"
          active={current === 'two'}
        >
          Соусы
        </Tab>

        <Tab
          onClick={() => setCurrent('three')}
          value="three"
          active={current === 'three'}
        >
          Начинки
        </Tab>
      </div>
      {current === 'one' ? (
        <IngridientItem title={'bun'} />
      ) : current === 'two' ? (
        <IngridientItem title={'sauce'} />
      ) : (
        <IngridientItem title={'main'} />
      )}
    </div>
  );
};
