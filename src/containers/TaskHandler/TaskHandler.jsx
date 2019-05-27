import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../../store/actions/taskActions';
import TasksDrawer from '../../components/TasksDrawer/TasksDrawer';

class TaskHandler extends Component {
  componentDidMount() {
    this.props.loadTasks();
  }

  render() {
    const { tasks } = this.props;
    return (
      <>
        <TasksDrawer tasks={tasks} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = {
  loadTasks: taskActions.loadTasks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskHandler);
