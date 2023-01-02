import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

export const AppHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.info}>
          <div className="mt-4 mb-4">
            <div className={styles.constructor}>
              <BurgerIcon />
              <div>Конструткор</div>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <div className={styles.orders}>
              <ListIcon type="secondary" />
              <div>Лента заказов</div>
            </div>
          </div>
        </div>
        <div className="logo">
          <Logo />
        </div>
        <div className="mt-4 mb-4">
          <div className={styles.cabinet}>
            <ProfileIcon />
            <div>Личный кабинет</div>
          </div>
        </div>
      </div>
    </div>
  );
};
