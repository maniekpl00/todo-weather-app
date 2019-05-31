import styled from 'styled-components';
import { DatePicker } from '@material-ui/pickers';

export const StyledTaskAddForm = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* height: 50px; */
  /* justify-self: flex-end; */
`;

export const InputContainer = styled.div`
  width: 80%;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
`;

export const TaskInput = styled.input`
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-bottom: 2px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};

  &::placeholder {
    color: inherit;
  }
`;

export const DateInput = styled(DatePicker)`
  && {
    border-bottom: 2px solid ${props => props.theme.primaryColor};

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
      font-size: 1.2rem;
      padding: 0 0 10px 20px;
    }
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  margin: 0;
  padding-top: 5px;
  font-size: 0.8rem;
  flex-basis: 30px;
  color: red;
`;

export const TaskSubmitButton = styled.button`
  margin-top: 30px;
  padding: 10px 20px;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  border: none;
  border-radius: 20px;
`;
