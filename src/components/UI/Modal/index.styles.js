import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledModal = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: white;
  width: 100%;
  height: 100%;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(100%)')};
  z-index: 500;
  transition: ${props => (props.displayOnBiggerScreen ? 'unset' : '0.3s')};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 20%);

  @media (min-width: ${mediaQueries.desktopLargeMaxWidth}) {
    transform: ${props => (props.show || props.displayOnBiggerScreen ? 'translateY(0)' : 'translateY(100%)')};
  }
`;

export const ModalWrapper = styled.div`
  height: 100%;
`;
