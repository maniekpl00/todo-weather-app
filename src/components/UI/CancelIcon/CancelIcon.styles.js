import styled from 'styled-components';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export const StyledCancelIcon = styled(ArrowDownwardIcon)`
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
`;
