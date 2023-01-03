import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal.module.css';

export const Modal = ({ modal, setModal }) => {
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.modal}>
          <div className={styles.modalTitle}>
            <div className={`${styles.detail} text text_type_main-large`}>
              Детали ингридиента
            </div>
            <CloseIcon
              onClick={() =>
                setModal({
                  open: false,
                  content: null,
                })
              }
            />
          </div>
          <div className={styles.modalImg}>
            <img src={modal.content.image_large} alt={modal.content.name} />
          </div>
          <div className={`${styles.name} text text_type_main-medium`}>
            {modal.content.name}
          </div>
          <div
            className={`${styles.spec} text text_type_main-default text_color_inactive`}
          >
            <div className={styles.ccal}>
              <div>Калории, ккал</div>
              <div className="text text_type_digits-default">
                {modal.content.calories}
              </div>
            </div>
            <div className={styles.proteins}>
              <div>Белки, г</div>
              <div className="text text_type_digits-default">
                {modal.content.proteins}
              </div>
            </div>
            <div className={styles.fat}>
              <div>Жиры, г</div>
              <div className="text text_type_digits-default">
                {modal.content.fat}
              </div>
            </div>
            <div className={styles.carbohydrates}>
              <div>Углеводы, г</div>
              <div className="text text_type_digits-default">
                {modal.content.carbohydrates}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
