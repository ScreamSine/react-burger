import { useState } from 'react';
import { AppHeader } from './components/app-header/app-header';
import { BurgerConstructor } from './components/burger-constructor/burger-constructor';
import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients';
import { data } from './utils/data';

export const App = () => {
  const [main, setMain] = useState(data.filter((el) => el.type === 'main'));
  const [sauce, setSauce] = useState(data.filter((el) => el.type === 'sauce'));
  const [bun, setBun] = useState(data.filter((el) => el.type === 'bun'));

  // modal
  const [modal, setModal] = useState({
    open: false,
    content: null,
  });

  return (
    <>
      <AppHeader />
      <div className="main">
        <BurgerIngredients
          main={main}
          sauce={sauce}
          bun={bun}
          modal={modal}
          setModal={setModal}
        />
        <BurgerConstructor />
      </div>
    </>
  );
};
