import React from 'react';
import { injectIntl } from 'react-intl';
import {
	StyledTaskAddForm,
	InputContainer,
	TaskInput,
	DateInput,
	ErrorMessage,
	TaskSubmitButton,
} from './index.styles';
import messages from './messages';

const TaskAddForm = ({ task, textChanged, dateChanged, submitted, intl }) => {
  const { formatMessage } = intl;
  console.log("render")
	return (
		<StyledTaskAddForm onSubmit={submitted}>
			<InputContainer>
				<TaskInput
					type="text"
					name="name"
					placeholder={formatMessage({ ...messages.placeholderName })}
					value={task.name.value}
					onChange={textChanged}
				/>
				{<ErrorMessage>{task.name.error}</ErrorMessage>}
			</InputContainer>
			<InputContainer>
				<TaskInput
					type="text"
					name="tag"
					placeholder={formatMessage({ ...messages.placeholderTag })}
					value={task.tag.value}
					onChange={textChanged}
				/>
				{<ErrorMessage>{task.tag.error}</ErrorMessage>}
			</InputContainer>
			<InputContainer>
				<DateInput
					label={formatMessage({ ...messages.placeholderTerm })}
					value={task.term.value}
					onChange={dateChanged}
				/>
				{<ErrorMessage>{task.term.error}</ErrorMessage>}
			</InputContainer>
			<TaskSubmitButton type="submit">{formatMessage({ ...messages.submitTitle })}</TaskSubmitButton>
		</StyledTaskAddForm>
	);
};

export default injectIntl(TaskAddForm);
