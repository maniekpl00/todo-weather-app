import styled from 'styled-components';
import { Delete as DeleteIcon } from '@material-ui/icons';
import mediaQueries from '../../../../styles/mediaQueries';

export const StyledTaskItem = styled.li`
  max-height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background-color: ${props =>
    props.finished ? props.theme.taskFinishedBackgroundColor : props.theme.taskBackgroundColor};
  color: ${props => props.theme.taskColor};
`;

export const CheckBoxWrapper = styled.div`
  display: block;
  position: relative;
  margin: 0 15px;
  width: 25px;
  height: 25px;
  background-color: ${props => (props.finished ? props.theme.primaryColor : 'unset')};
  border: 2px solid ${props => props.theme.primaryColor};
  border-radius: 50%;

  &::after {
    box-sizing: inherit;
    visibility: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    content: '${props => (props.finished ? '✓' : '')}';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 20px;
    font-weight: bold;
    color: white;
    z-index: 2;
    pointer-events: none;
  }

  @media (min-width: ${mediaQueries.ipadMaxWidth}) {
    width: 35px;
    height: 35px;
  }
`;

export const CheckBox = styled.input`
  display: block;
  position: relative;
  margin: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const DeleteButton = styled(DeleteIcon)`
  && {
    margin: 0 15px;
    font-size: 2rem;
    cursor: pointer;

    path {
      color: ${props => props.theme.primaryColor};
    }

    @media (min-width: ${mediaQueries.desktopMaxWidth}) {
      font-size: 2.5rem;
    }
  }
`;
