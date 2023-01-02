import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-ingredients.module.css';
import { data } from '../../utils/data';
import { IngridientItem } from '../ingridient-item/ingridient-item';

export const BurgerIngredients = () => {
  const [current, setCurrent] = useState('one');

  const [main, setMain] = useState(data.filter((el) => el.type === 'main'));
  const [sauce, setSauce] = useState(data.filter((el) => el.type === 'sauce'));
  const [bun, setBun] = useState(data.filter((el) => el.type === 'bun'));

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
        <IngridientItem data={bun} title={'Булки'} />
      ) : current === 'two' ? (
        <IngridientItem data={sauce} title={'Соусы'} />
      ) : (
        <IngridientItem data={main} title={'Начинки'} />
      )}
    </div>
  );
};
