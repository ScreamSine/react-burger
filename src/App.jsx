import { useSelector } from 'react-redux';
import { AppHeader } from './components/app-header/app-header';
import { BurgerConstructor } from './components/burger-constructor/burger-constructor';
import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients';
import { Modal } from './components/modal/modal';

export const App = () => {
  const modal = useSelector((state) => state.modal);
  return (
    <>
      <AppHeader />
      <div className="main">
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
      {modal.open ? <Modal /> : null}
    </>
  );
};
