import styled from 'styled-components';
import { Delete as DeleteIcon } from '@material-ui/icons';
import mediaQueries from '../../../../styles/mediaQueries';

export const StyledTaskItem = styled.li`
  max-height: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.12);
`;

export const CheckBoxWrapper = styled.div`
  margin: 0 10px;
`;

export const CheckBox = styled.input`
  display: block;
  position: relative;
  visibility: hidden;
  width: 25px;
  height: 25px;
  cursor: pointer;

  &::before {
    box-sizing: inherit;
    visibility: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.theme.primaryColor};
    border-radius: 50%;
    z-index: 2;
  }

  &:checked {
    &::before {
      content: '✓';
      background-color: ${props => props.theme.primaryColor};
    }
  }

  @media (min-width: ${mediaQueries.ipadMaxWidth}) {
    width: 35px;
    height: 35px;
  }
`;

export const DeleteButton = styled(DeleteIcon)`
  && {
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
