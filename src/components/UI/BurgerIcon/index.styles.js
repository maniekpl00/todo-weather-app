import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledBurgerIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 30px;
  height: 20px;
  z-index: 600;

  path {
    color: ${props => (props.open ? props.theme.primaryColor : 'white')};
  }

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    left: 20px;
    right: unset;
  }
`;
