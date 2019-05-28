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

export const TaskInput = styled.input`
  width: 80%;
  margin-bottom: 30px;
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
    width: 80%;
    margin-bottom: 30px;
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

export const TaskSubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1.1rem;
  text-transform: uppercase;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  border: none;
  border-radius: 20px;
`;
