import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import * as taskActions from '../../store/actions/taskActions';
import TaskWrapper from '../../components/Task/TaskWrapper/TaskWrapper';
import TaskList from '../../components/Task/TaskList/TaskList';
import TaskAddButton from '../../components/UI/TaskAddButton/TaskAddButton';
import Modal from '../../components/UI/Modal/Modal';
import TaskAddForm from '../../components/Task/TaskAddForm/TaskAddForm';

class TaskContainer extends Component {
  state = {
    taskForm: {
      name: '',
      tag: ''
    },
    showModal: false
  };

  componentDidMount() {
    this.props.loadTasks();
  }

  inputChangehandler = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      taskForm: {
        ...prevState.taskForm,
        [name]: value
      }
    }));
  };

  addTaskSubmitHandler = event => {
    event.preventDefault();
    const task = {
      id: uuid.v4(),
      ...this.state.taskForm,
      finished: false
    };
    this.props.addTask(task);
  };

  toggleModalHandler = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { taskForm, showModal } = this.state;
    const { tasks } = this.props;
    return (
      <TaskWrapper>
        <Modal show={showModal}>
          <TaskAddForm task={taskForm} changed={this.inputChangehandler} submitted={this.addTaskSubmitHandler} />
        </Modal>
        <TaskList tasks={tasks} />
        <TaskAddButton clicked={this.toggleModalHandler} />
      </TaskWrapper>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  loadTasks: taskActions.loadTasks,
  addTask: taskActions.addTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskContainer);
