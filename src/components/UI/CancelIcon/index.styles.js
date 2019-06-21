import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledCancelIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  cursor: pointer;

  path {
    color: ${props => props.theme.primaryColor};
  }

  @media (min-width: ${mediaQueries.ipadMaxWidth}) {
    width: 35px;
  }
`;
