import PropTypes from 'prop-types';
import styles from './modal-overlay.module.css';

export const ModalOverlay = ({ setOpen }) => {
  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      className={styles.overlay}
    ></div>
  );
};

ModalOverlay.propTypes = {
  setOpen: PropTypes.func.isRequired,
};
