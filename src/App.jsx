import { AppHeader } from './components/app-header/app-header';
import { BurgerConstructor } from './components/burger-constructor/burger-constructor';
import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients';

export const App = () => {
  return (
    <>
      <AppHeader />
      <div className="main">
        <BurgerIngredients />
        <BurgerConstructor />
      </div>
    </>
  );
};
