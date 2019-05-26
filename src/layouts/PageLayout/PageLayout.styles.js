import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color}
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
