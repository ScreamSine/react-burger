import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import styles from './modal.module.css';
import * as modalAction from '../../redux/modalReducer/action';
import accept from '../../images/accept.svg';

export const Modal = () => {
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.overlay}>
        {modal.type === 'info' ? (
          <div className={styles.modal}>
            <div className={styles.modalTitle}>
              <div className={`${styles.detail} text text_type_main-large`}>
                Детали ингридиента
              </div>
              <CloseIcon onClick={() => dispatch(modalAction.closeModal())} />
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
        ) : (
          <div className={styles.modalOrder}>
            <div className={styles.modalTitle}>
              <CloseIcon onClick={() => dispatch(modalAction.closeModal())} />
            </div>
            <div className={`${styles.orderNum} text text_type_digits-large`}>
              324456
            </div>
            <div className={`${styles.orderTitle} text text_type_main-medium`}>
              идентификатор заказа
            </div>
            <div className={styles.orderAccept}>
              <img src={accept} alt="accept" />
            </div>
            <div className={`${styles.orderStatus} text text_type_main-small`}>
              Ваш заказ начали готовить
            </div>
            <div
              className={`${styles.orderMessage} text text_type_main-default text_color_inactive`}
            >
              Дождитесь готовности на орбитальной станции
            </div>
          </div>
        )}
      </div>
    </>
  );
};
