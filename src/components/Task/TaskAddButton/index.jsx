import React from 'react';
import { FormattedMessage } from 'react-intl';
import { StyledTaskAddButton, AddIcon, AddParagraph } from './index.styles';
import messages from './messages';

const TaskAddButton = props => (
  <StyledTaskAddButton>
    <AddIcon onClick={props.clicked} />
    <AddParagraph>
      <FormattedMessage {...messages.addText} />
    </AddParagraph>
  </StyledTaskAddButton>
);

export default TaskAddButton;
