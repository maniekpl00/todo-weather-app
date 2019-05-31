import styled from 'styled-components';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  background-color: white;
  width: 100vw;
  height: 100vh;
  transform: ${props => (props.show ? 'translateY(0)' : 'translateY(100%)')};
  z-index: 500;
  transition: 0.3s;
`;

export const CancelIcon = styled(ArrowDownwardIcon)`
  && {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 1.8rem;
    height: 1.8rem;
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 50%;

    path {
      color: ${props => props.theme.primaryColor};
    }
  }
`

export const ModalWrapper = styled.div`
  height: 100%;
`;
