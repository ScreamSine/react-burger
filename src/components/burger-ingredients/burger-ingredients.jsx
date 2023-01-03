import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngridientItem } from '../ingridient-item/ingridient-item';
import styles from './burger-ingredients.module.css';

export const BurgerIngredients = ({ main, sauce, bun, modal, setModal }) => {
  const [current, setCurrent] = useState('one');

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
        <IngridientItem
          data={bun}
          title={'Булки'}
          modal={modal}
          setModal={setModal}
        />
      ) : current === 'two' ? (
        <IngridientItem
          data={sauce}
          title={'Соусы'}
          modal={modal}
          setModal={setModal}
        />
      ) : (
        <IngridientItem
          data={main}
          title={'Начинки'}
          modal={modal}
          setModal={setModal}
        />
      )}
    </div>
  );
};
