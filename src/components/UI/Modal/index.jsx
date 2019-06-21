import React from 'react';
import { StyledModal, ModalWrapper } from './index.styles';

const Modal = props => (
  <StyledModal show={props.show} displayOnBiggerScreen={props.displayOnBiggerScreen}>
    <ModalWrapper>{props.children}</ModalWrapper>
  </StyledModal>
);

Modal.defaultProps = {
  displayOnBiggerScreen: false,
};

export default Modal;
