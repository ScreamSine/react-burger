import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalOverlay } from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import styles from './modal.module.css';

export const Modal = ({ children, setOpen }) => {
  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [setOpen]);

  return createPortal(
    <>
      <ModalOverlay setOpen={setOpen} />
      <div className={styles.modal}>
        <div className={styles.modalClose}>
          <CloseIcon onClick={() => setOpen((prev) => !prev)} />
        </div>
        {children}
      </div>
    </>,
    document.querySelector('#modal')
  );
};

Modal.defaultProps = {
  children: PropTypes.object.isRequired,
  setOpen: PropTypes.func.isRequired,
};
