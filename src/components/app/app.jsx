import { useEffect, useState } from 'react';
import { AppHeader } from '../app-header/app-header';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { Modal } from '../modal/modal';
import * as action from '../../redux/ingridientsReducer/action';
import { useDispatch } from 'react-redux';
import styles from './app.module.css';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action.getIngridients());
  }, [dispatch]);

  const [open, setOpen] = useState({
    show: false,
    title: null,
  });
  const [modalContent, setModalContent] = useState(null);

  const togglePopup = (modalTitle) => {
    setOpen((prev) => {
      return {
        title: modalTitle,
        show: !prev.show,
      };
    });
  };

  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients
          togglePopup={togglePopup}
          setModalContent={setModalContent}
        />
        <BurgerConstructor
          togglePopup={togglePopup}
          setModalContent={setModalContent}
        />
      </main>
      {open.show && (
        <Modal togglePopup={togglePopup} open={open}>
          {modalContent}
        </Modal>
      )}
    </>
  );
};
