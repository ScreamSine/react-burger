import { useState } from 'react';
import { AppHeader } from '../app-header/app-header';
import { BurgerConstructor } from '../burger-constructor/burger-constructor';
import { BurgerIngredients } from '../burger-ingredients/burger-ingredients';
import { Modal } from '../modal/modal';
import styles from './app.module.css';

export const App = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  return (
    <>
      <AppHeader />
      <main>
        <BurgerIngredients
          setOpen={setOpen}
          setModalContent={setModalContent}
        />
        <BurgerConstructor
          setOpen={setOpen}
          setModalContent={setModalContent}
        />
      </main>
      {open && <Modal setOpen={setOpen}>{modalContent}</Modal>}
    </>
  );
};
