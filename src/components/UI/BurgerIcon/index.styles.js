import styled from 'styled-components';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledBurgerIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  z-index: 600;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.7));

  path {
    fill: ${props => props.theme.primaryColor};
  }

  @media (min-width: ${mediaQueries.desktopMaxWidth}) {
    left: 20px;
    right: unset;
    width: 30px;
  }
`;
