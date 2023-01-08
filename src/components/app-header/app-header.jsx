import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

export const AppHeader = () => {
  return (
    <header>
      <nav>
        <ul className={styles.info}>
          <li className="mt-4 mb-4">
            <a href="#">
              <BurgerIcon />
              <span>Конструткор</span>
            </a>
          </li>
          <li className="mt-4 mb-4">
            <a href="#">
              <ListIcon type="secondary" />
              <span>Лента заказов</span>
            </a>
          </li>
        </ul>
        <ul>
          <Logo />
        </ul>
        <ul>
          <li className={styles.cabinet}>
            <a href="#">
              <ProfileIcon />
              <span>Личный кабинет</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
