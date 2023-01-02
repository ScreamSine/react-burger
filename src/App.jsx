import React from 'react';
import { AppHeader } from './components/app-header/app-header';
import { BurgerIngredients } from './components/burger-ingredients/burger-ingredients';

export const App = () => {
  return (
    <>
      <AppHeader />
      <BurgerIngredients />
    </>
  );
};
