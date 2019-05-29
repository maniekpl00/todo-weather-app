import React from 'react';
import {
  StyledTaskAddForm,
  InputContainer,
  TaskInput,
  DateInput,
  ErrorMessage,
  TaskSubmitButton
} from './TaskAddForm.styles';

const TaskAddForm = ({ task, textChanged, dateChanged, submitted }) => (
  <StyledTaskAddForm onSubmit={submitted}>
    <InputContainer>
      <TaskInput
        type="text"
        name="name"
        placeholder={task.name.placeholder}
        value={task.name.value}
        onChange={textChanged}
      />
      {<ErrorMessage>{task.name.error}</ErrorMessage>}
    </InputContainer>
    <InputContainer>
      <TaskInput
        type="text"
        name="tag"
        placeholder={task.tag.placeholder}
        value={task.tag.value}
        onChange={textChanged}
      />
      {<ErrorMessage>{task.tag.error}</ErrorMessage>}
    </InputContainer>
    <InputContainer>
      <DateInput label={task.term.label} value={task.term.value} onChange={dateChanged} />
      {<ErrorMessage>{task.term.error}</ErrorMessage>}
    </InputContainer>
    <TaskSubmitButton type="submit">Submit task</TaskSubmitButton>
  </StyledTaskAddForm>
);

export default TaskAddForm;
