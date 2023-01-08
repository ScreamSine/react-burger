import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import styles from './OrderDetails.module.css';
import accept from '../../images/accept.svg';
import * as modalAction from '../../redux/modalReducer/action';

export const OrderDetails = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.modal}>
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
  );
};
