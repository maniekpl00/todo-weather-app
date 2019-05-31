import React from 'react';
import { StyledModal, ModalWrapper, CancelIcon } from './Modal.styles';

const Modal = props => (
  <StyledModal show={props.show}>
    <CancelIcon onClick={props.canceled} />
    <ModalWrapper>{props.children}</ModalWrapper>
  </StyledModal>
);

export default Modal;
