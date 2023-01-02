import styles from './ingridient-item.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';

export const IngridientItem = ({ data, title }) => {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        {data.map((el) => (
          <div key={el._id} className={styles.card}>
            <div className={styles.img}>
              <img src={el.image} alt="el.name" />
            </div>
            <div className={styles.price}>
              <div>{el.price}</div>
              <CurrencyIcon />
            </div>
            <div className={styles.name}>{el.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};
