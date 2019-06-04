import React from 'react';
import { StyledModal, ModalWrapper } from './index.styles';

const Modal = props => (
  <StyledModal show={props.show}>
    <ModalWrapper>{props.children}</ModalWrapper>
  </StyledModal>
);

export default Modal;
