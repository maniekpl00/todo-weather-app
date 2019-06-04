import styled from 'styled-components';

export const StyledModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(100%)')};
  z-index: 500;
  transition: 0.3s;
`;

export const ModalWrapper = styled.div`
  height: 100%;
`;
