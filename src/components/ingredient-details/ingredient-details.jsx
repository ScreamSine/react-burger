import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import styles from './ingredient-details.module.css';
import * as modalAction from '../../redux/modalReducer/action';

export const IngredientDetails = ({ el }) => {
  console.log(el);
  const dispatch = useDispatch();
  return (
    <div className={styles.modal}>
      <div className={styles.modalTitle}>
        <div className={`${styles.detail} text text_type_main-large`}>
          Детали ингридиента
        </div>
        <CloseIcon onClick={() => dispatch(modalAction.closeModal())} />
      </div>
      <div className={styles.modalImg}>
        <img src={el.image_large} alt={el.name} />
      </div>
      <div className={`${styles.name} text text_type_main-medium`}>
        {el.name}
      </div>
      <div
        className={`${styles.spec} text text_type_main-default text_color_inactive`}
      >
        <div className={styles.ccal}>
          <div>Калории, ккал</div>
          <div className="text text_type_digits-default">{el.calories}</div>
        </div>
        <div className={styles.proteins}>
          <div>Белки, г</div>
          <div className="text text_type_digits-default">{el.proteins}</div>
        </div>
        <div className={styles.fat}>
          <div>Жиры, г</div>
          <div className="text text_type_digits-default">{el.fat}</div>
        </div>
        <div className={styles.carbohydrates}>
          <div>Углеводы, г</div>
          <div className="text text_type_digits-default">
            {el.carbohydrates}
          </div>
        </div>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  el: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }),
};
