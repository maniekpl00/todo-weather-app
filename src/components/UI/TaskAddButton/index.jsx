import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StyledTaskAddButton, AddButton, AddParagraph } from './index.styles';
import messages from './messages';

const TaskAddButton = props => (
  <StyledTaskAddButton>
    <AddButton onClick={props.clicked}>+</AddButton>
    <AddParagraph>
      <FormattedMessage {...messages.addText} />
    </AddParagraph>
  </StyledTaskAddButton>
);

export default TaskAddButton;
