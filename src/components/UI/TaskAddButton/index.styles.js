import styled from 'styled-components';

export const StyledTaskAddButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.2);
`;

export const AddButton = styled.button`
  display: flex;
  width: 30px;
  line-height: 30px;
  font-size: 32px;
  background-color: ${props => props.theme.primaryColor};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export const AddParagraph = styled.p`
  margin-left: 10px;
`;
