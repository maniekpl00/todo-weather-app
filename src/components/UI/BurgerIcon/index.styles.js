import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledBurgerIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  z-index: 600;
  cursor: pointer;
  filter: ${props => (props.open ? 'unset' : 'drop-shadow(1px 1px 1px black)')};

  path {
    fill: ${props => (props.open ? props.theme.primaryColor : 'white')};
  }

  @media (min-width: ${mediaQueries.ipadMaxWidth}) {
    width: 35px;
  }

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    left: 20px;
    right: unset;
  }

  @media (min-width: ${mediaQueries.desktopLargeMaxWidth}) {
    display: none;
  }
`;
