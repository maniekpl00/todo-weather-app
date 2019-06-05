import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledBurgerIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 15px;
  z-index: 600;

  path {
    color: ${props => (props.open ? props.theme.primaryColor : '#ccc')};
  }

  @media (min-width: ${mediaQueries.desktopMaxWidthLarge}) {
    left: 20px;
    right: unset;
    width: 30px;
    height: 20px;
  }
`;
