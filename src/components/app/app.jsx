import { useSelector } from 'react-redux';
import { AppHeader } from '../app-header/app-header';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { Modal } from '../modal/modal';
import styles from './app.module.css';

export const App = () => {
  const modal = useSelector((state) => state.modal);
  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
      {modal.open ? <Modal /> : null}
    </>
  );
};
