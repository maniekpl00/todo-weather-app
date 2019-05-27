import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as taskActions from '../../../../store/actions/taskActions';
import { StyledTaskItem, CheckBox } from './TaskItem.styles';
import TaskLabel from './TaskLabel/TaskLabel';

class TaskItem extends Component {
  checkChangeHandler = event => {
    this.props.updateTask({
      ...this.props.item,
      finished: event.target.checked
    });
  };

  render() {
    const { item } = this.props;
    return (
      <StyledTaskItem>
          <CheckBox type="checkbox" checked={item.finished} onChange={this.checkChangeHandler} />
        <TaskLabel name={item.name} tag={item.tag} finished={item.finished} />
      </StyledTaskItem>
    );
  }
}

const mapDispatchToProps = {
  updateTask: taskActions.updateTask
};

export default connect(
  null,
  mapDispatchToProps
)(TaskItem);
