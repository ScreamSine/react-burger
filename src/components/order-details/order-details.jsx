import styles from './OrderDetails.module.css';
import accept from '../../images/accept.svg';
import { useSelector } from 'react-redux';

export const OrderDetails = () => {
  const orderInfo = useSelector((state) => state.orders.orderInfo);
  return (
    <>
      {orderInfo ? (
        <>
          <div className={styles.modalTitle}></div>
          <div className={`${styles.orderNum} text text_type_digits-large`}>
            {orderInfo}
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
        </>
      ) : (
        <div className={styles.modalTitle}>
          <div className={`${styles.orderNum} text text_type_digits-large`}>
            loading
          </div>
        </div>
      )}
    </>
  );
};
