import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

export const ModalOverlay = ({ togglePopup }) => {
  return <div onClick={togglePopup} className={styles.overlay}></div>;
};

ModalOverlay.propTypes = {
  togglePopup: PropTypes.func.isRequired,
};
