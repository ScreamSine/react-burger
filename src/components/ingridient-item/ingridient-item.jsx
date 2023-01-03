import styles from './ingridient-item.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons';
import { Modal } from '../modal/modal';

export const IngridientItem = ({ data, title, modal, setModal }) => {
  const pickIngridient = (ingridient) => {
    setModal({
      open: true,
      content: ingridient,
    });
  };

  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.container}>
        {data.map((el) => (
          <div
            onClick={() => pickIngridient(el)}
            key={el._id}
            className={styles.card}
          >
            <div className={`${styles.circle} text text_type_digits-default`}>
              1
            </div>
            <div className={styles.img}>
              <img src={el.image} alt="el.name" />
            </div>
            <div className={`${styles.price} text text_type_digits-default`}>
              <div>{el.price}</div>
              <CurrencyIcon />
            </div>
            <div className={`${styles.name} text text_type_main-small`}>
              {el.name}
            </div>
          </div>
        ))}
      </div>
      {modal.open ? (
        <Modal modal={modal} setModal={setModal} data={data} />
      ) : null}
    </>
  );
};
