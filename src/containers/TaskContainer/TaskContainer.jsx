import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import moment from 'moment';
import * as taskActions from '../../store/actions/taskActions';
import TaskWrapper from '../../components/Task/TaskWrapper/TaskWrapper';
import TaskList from '../../components/Task/TaskList/TaskList';
import TaskAddButton from '../../components/UI/TaskAddButton/TaskAddButton';
import Modal from '../../components/UI/Modal/Modal';
import TaskAddForm from '../../components/Task/TaskAddForm/TaskAddForm';

class TaskContainer extends Component {
  state = {
    newTaskForm: {
      name: {
        value: '',
        placeholder: 'Task name',
        error: false
      },
      tag: {
        value: '',
        placeholder: 'Tag',
        error: false
      },
      term: {
        value: moment(),
        label: 'Term',
        error: false
      }
    },
    showModal: false
  };

  componentDidMount() {
    this.props.loadTasks();
  }

  textChangeHandler = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      newTaskForm: {
        ...prevState.newTaskForm,
        [name]: {
          ...prevState.newTaskForm[name],
          value
        }
      }
    }));
  };

  dateChangeHandler = date => {
    this.setState(prevState => ({
      newTaskForm: {
        ...prevState.newTaskForm,
        term: {
          ...prevState.newTaskForm.term,
          value: date
        }
      }
    }));
  };

  validateForm = () => {
    const { newTaskForm } = this.state;
    const { name, tag, term } = newTaskForm;

    let validate = true;
    let nameError = false;
    let tagError = false;
    let termError = false;
    if (name.value.trim().length < 4) {
      nameError = 'Task name must have at least 4 characters';
      validate = false;
    }
    if (tag.value.trim().length < 2) {
      tagError = 'Tag must have at least 2 characters';
      validate = false;
    }
    if (term.value.toDate().getDate() < new Date().getDate()) {
      termError = 'The term date must be today or after today';
    }
    this.setState(prevState => ({
      newTaskForm: {
        ...prevState.newTaskForm,
        name: {
          ...prevState.newTaskForm.name,
          error: nameError
        },
        tag: {
          ...prevState.newTaskForm.tag,
          error: tagError
        },
        term: {
          ...prevState.newTaskForm.term,
          error: termError
        }
      }
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
          error: false
        },
        tag: {
          ...prevState.newTaskForm.tag,
          value: '',
          error: false
        },
        term: {
          ...prevState.newTaskForm.term,
          value: moment(),
          error: false
        }
      }
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
    const term = newTaskForm.term.value.unix();
    const task = {
      id: uuid.v4(),
      name,
      tag,
      term,
      finished: false
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
      <>
        <TaskWrapper>
          <TaskList tasks={tasks} removeTask={this.props.removeTask} />
          <TaskAddButton clicked={this.showModalHandler} />
        </TaskWrapper>
        <Modal show={showModal} canceled={this.cancelModalHandler}>
          <TaskAddForm
            task={newTaskForm}
            textChanged={this.textChangeHandler}
            dateChanged={this.dateChangeHandler}
            submitted={this.addTaskSubmitHandler}
          />
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  loadTasks: taskActions.loadTasks,
  addTask: taskActions.addTask,
  removeTask: taskActions.removeTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskContainer);
