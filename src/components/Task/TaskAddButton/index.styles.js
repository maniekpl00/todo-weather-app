import styled from 'styled-components';
import Add from '@material-ui/icons/Add';
import mediaQueries from '../../../styles/mediaQueries';

export const StyledTaskAddButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.12);
`;

export const AddIcon = styled(Add)`
  && {
    display: flex;
    width: 30px;
    height: 30px;
    font-size: 15px;
    background-color: ${props => props.theme.primaryColor};
    color: white;
    border-radius: 50%;
    cursor: pointer;

    @media (min-width: ${mediaQueries.desktopMaxWidth}) {
      width: 35px;
      height: 35px;
    }
  }
`;

export const AddParagraph = styled.p`
  color: ${props => props.theme.primaryColor};
  margin-left: 10px;
`;
