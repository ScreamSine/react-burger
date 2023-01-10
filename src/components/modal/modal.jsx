import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import styles from './modal.module.css';

export const Modal = ({ children, togglePopup }) => {
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        togglePopup();
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [togglePopup]);

  return createPortal(
    <>
      <ModalOverlay togglePopup={togglePopup} />
      <div className={styles.modal}>
        <div className={styles.modalClose}>
          <CloseIcon onClick={togglePopup} />
        </div>
        {children}
      </div>
    </>,
    document.querySelector('#modal')
  );
};

Modal.defaultProps = {
  children: PropTypes.object.isRequired,
  togglePopup: PropTypes.func.isRequired,
};
