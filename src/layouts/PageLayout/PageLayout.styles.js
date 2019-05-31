import styled from 'styled-components';
import mediaQueries from '../../styles/mediaQueries';

export const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: ${props => props.theme.color};
`;

export const ThemeButtonContainer = styled.div`
  position: fixed;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  text-transform: uppercase;
  border: none;
`;

export const LightSwitcherButton = styled(Button)`
  background-color: #fff;
`;

export const DarkSwitcherButton = styled(Button)`
  background-color: #555;
`;

export const ChildrenContainer = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
