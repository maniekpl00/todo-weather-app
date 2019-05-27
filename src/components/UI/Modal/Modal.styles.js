import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  width: 100vw;
  height: 100vh;
  transform: ${props => props.show ? "translateY(0)" : "translateY(-100%)"};
  z-index: 500;
  transition: 0.4s;
`;

export const ModalWrapper = styled.div`
`