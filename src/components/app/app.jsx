import { useState } from 'react';
import { AppHeader } from '../app-header/app-header';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { Modal } from '../modal/modal';
import styles from './app.module.css';

export const App = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const togglePopup = () => {
    setOpen((prev) => !prev);
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
      {open && <Modal togglePopup={togglePopup}>{modalContent}</Modal>}
    </>
  );
};
