import styled from 'styled-components';

export const StyledTaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`;

export const CheckBox = styled.input`
  display: block;
  position: relative;
  visibility: hidden;
  width: 25px;
  height: 25px;

  &::before {
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
    border: 2px solid rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    z-index: 2;
  }

  &:checked {
    &::before {
      content: '✓';
      border-color: #50ac5d;
      background-color: #50ac5d;
    }
  }
`;
