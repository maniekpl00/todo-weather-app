import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import * as taskActions from '../../store/actions/taskActions';
import TaskAddForm from '../../components/Task/TaskAddForm/TaskAddForm';

class TaskAddFormHandler extends PureComponent {
  state = {
    task: {
      name: ''
    }
  };

  inputChangehandler = event => {
    this.setState({
      task: {
        [event.target.name]: event.target.value
      }
    });
  };

  addTaskSubmitHandler = event => {
    event.preventDefault();
    const task = {
      id: uuid.v4(),
      ...this.state.task
    };
    this.props.addTask(task);
  };

  render() {
    const { task } = this.state;
    return <TaskAddForm task={task} changed={this.inputChangehandler} submitted={this.addTaskSubmitHandler} />;
  }
}

const mapDispatchToProps = {
  addTask: taskActions.addTask
};

export default connect(
  null,
  mapDispatchToProps
)(TaskAddFormHandler);
