import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngridientItem } from '../ingridient-item/ingridient-item';
import styles from './burger-ingredients.module.css';
import { data } from '../../utils/data';
import { useDispatch } from 'react-redux';
import * as ingridientAction from '../../redux/ingridientsReducer/action';
import { stateType } from '../../utils/types';

export const BurgerIngredients = ({ setOpen, setModalContent }) => {
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
        <IngridientItem
          title={'bun'}
          setOpen={setOpen}
          setModalContent={setModalContent}
        />
      ) : current === 'two' ? (
        <IngridientItem
          title={'sauce'}
          setOpen={setOpen}
          setModalContent={setModalContent}
        />
      ) : (
        <IngridientItem
          title={'main'}
          setOpen={setOpen}
          setModalContent={setModalContent}
        />
      )}
    </div>
  );
};

BurgerIngredients.propTypes = stateType(PropTypes);
