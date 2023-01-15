import PropTypes from 'prop-types';
import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngridientItem } from '../ingridient-item/ingridient-item';
import styles from './burger-ingredients.module.css';
import { stateType } from '../../utils/types';

export const BurgerIngredients = ({ togglePopup, setModalContent }) => {
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
          title={'bun'}
          togglePopup={togglePopup}
          setModalContent={setModalContent}
        />
      ) : current === 'two' ? (
        <IngridientItem
          title={'sauce'}
          togglePopup={togglePopup}
          setModalContent={setModalContent}
        />
      ) : (
        <IngridientItem
          title={'main'}
          togglePopup={togglePopup}
          setModalContent={setModalContent}
        />
      )}
    </div>
  );
};

BurgerIngredients.propTypes = stateType(PropTypes);
