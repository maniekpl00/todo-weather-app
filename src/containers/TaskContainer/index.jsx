import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import moment from 'moment';
import { injectIntl } from 'react-intl';
import * as taskActions from '../../store/actions/taskActions';
import messages from './messages';
import TaskWrapper from '../../components/Task/TaskWrapper';
import TaskList from '../../components/Task/TaskList';
import TaskAddButton from '../../components/UI/TaskAddButton';
import Modal from '../../components/UI/Modal';
import TaskAddForm from '../../components/Task/TaskAddForm';
import CancelIcon from '../../components/UI/CancelIcon';

class TaskContainer extends Component {
  state = {
    newTaskForm: {
      name: {
        value: '',
        error: false,
      },
      tag: {
        value: '',
        error: false,
      },
      term: {
        value: moment(),
        error: false,
      },
    },
    showModal: false,
  };

  textChangeHandler = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      newTaskForm: {
        ...prevState.newTaskForm,
        [name]: {
          ...prevState.newTaskForm[name],
          value,
        },
      },
    }));
  };

  dateChangeHandler = date => {
    this.setState(prevState => ({
      newTaskForm: {
        ...prevState.newTaskForm,
        term: {
          ...prevState.newTaskForm.term,
          value: date,
        },
      },
    }));
  };

  validateForm = () => {
    const { newTaskForm } = this.state;
    const { name, tag, term } = newTaskForm;
    const currentDateMoment = moment().startOf('day');

    let validate = true;
    let nameError = false;
    let tagError = false;
    let termError = false;
    if (name.value.trim().length < 4) {
      nameError = this.props.intl.formatMessage({ ...messages.nameError });
      validate = false;
    }
    if (tag.value.trim().length < 2) {
      tagError = this.props.intl.formatMessage({ ...messages.tagError });
      validate = false;
    }
    if (term.value.startOf('day').isBefore(currentDateMoment)) {
      termError = this.props.intl.formatMessage({ ...messages.termError });
      validate = false;
    }
    this.setState(prevState => ({
      newTaskForm: {
        ...prevState.newTaskForm,
        name: {
          ...prevState.newTaskForm.name,
          error: nameError,
        },
        tag: {
          ...prevState.newTaskForm.tag,
          error: tagError,
        },
        term: {
          ...prevState.newTaskForm.term,
          error: termError,
        },
      },
    }));
    return validate;
  };

  resetFormSettings = () => {
    this.setState(prevState => ({
      newTaskForm: {
        ...prevState.newTaskForm,
        name: {
          ...prevState.newTaskForm.name,
          value: '',
          error: false,
        },
        tag: {
          ...prevState.newTaskForm.tag,
          value: '',
          error: false,
        },
        term: {
          ...prevState.newTaskForm.term,
          value: moment(),
          error: false,
        },
      },
    }));
  };

  addTaskSubmitHandler = event => {
    event.preventDefault();
    if (!this.validateForm()) {
      return;
    }
    const { newTaskForm } = this.state;
    const name = newTaskForm.name.value;
    const tag = newTaskForm.tag.value;
    const term = newTaskForm.term.value.valueOf();
    const task = {
      id: uuid.v4(),
      name,
      tag,
      term,
      finished: false,
    };
    this.props.addTask(task);
    this.resetFormSettings();
    this.cancelModalHandler();
  };

  showModalHandler = () => {
    this.setState({ showModal: true });
  };

  cancelModalHandler = () => {
    this.resetFormSettings();
    this.setState({ showModal: false });
  };

  render() {
    const { newTaskForm, showModal } = this.state;
    const { tasks } = this.props;

    return (
      <TaskWrapper>
        <TaskList tasks={tasks} removeTask={this.props.removeTask} />
        <TaskAddButton clicked={this.showModalHandler} />
        <Modal show={showModal}>
          <CancelIcon clicked={this.cancelModalHandler} />
          <TaskAddForm
            task={newTaskForm}
            textChanged={this.textChangeHandler}
            dateChanged={this.dateChangeHandler}
            submitted={this.addTaskSubmitHandler}
          />
        </Modal>
      </TaskWrapper>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
});

const mapDispatchToProps = {
  addTask: taskActions.addTask,
  removeTask: taskActions.removeTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(TaskContainer));
