import styled from 'styled-components';
import { DatePicker } from '@material-ui/pickers';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledTaskAddForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${mediaQueries.mobileMaxWidth}) {
    font-size: 1.1em;
  }
`;

export const InputContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const TaskInput = styled.input`
  padding: 5px 20px;
  font-size: 1em;
  border: none;
  border-bottom: 1px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};

  &::placeholder {
    color: inherit;
  }
`;

export const DateInput = styled(DatePicker)`
  && {
    border-bottom: 1px solid ${props => props.theme.primaryColor};

    div {
      font: inherit;
    }

    div::before {
      display: none;
    }

    div::after {
      border-bottom: none;
    }

    label,
    input {
      left: 20px;
      color: ${props => props.theme.primaryColor};
    }

    input {
      padding: 0 0 10px 20px;
    }
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  margin: 0;
  padding-top: 5px;
  font-size: 0.8em;
  flex-basis: 30px;
  color: red;
`;

export const TaskSubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  text-transform: uppercase;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  border: none;
  border-radius: 20px;
`;
