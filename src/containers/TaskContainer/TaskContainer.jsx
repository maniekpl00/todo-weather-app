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
      name: '',
      tag: '',
      term: moment()
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
        [name]: value
      }
    }));
  };

  dateChangeHandler = term => {
    this.setState(prevState => ({
      newTaskForm: {
        ...prevState.newTaskForm,
        term
      }
    }));
  };

  addTaskSubmitHandler = event => {
    event.preventDefault();
    const task = {
      ...this.state.newTaskForm,
      id: uuid.v4(),
      finished: false,
      term: this.state.newTaskForm.term.unix()
    };
    console.log(task);
    this.props.addTask(task);
  };

  toggleModalHandler = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { newTaskForm, showModal } = this.state;
    const { tasks } = this.props;
    return (
      <>
        <TaskWrapper>
          <TaskList tasks={tasks} removeTask={this.props.removeTask} />
          <TaskAddButton clicked={this.toggleModalHandler} />
        </TaskWrapper>
        <Modal show={showModal}>
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
