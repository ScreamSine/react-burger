import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/types';
import styles from './ingredient-details.module.css';

export const IngredientDetails = ({ el }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalTitle}>
        <div className={`${styles.detail} text text_type_main-large`}>
          Детали ингридиента
        </div>
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
  el: PropTypes.shape(ingredientType(PropTypes)),
};
