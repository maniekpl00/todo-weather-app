import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import * as taskActions from '../../../../store/actions/taskActions';
import { StyledTaskItem, CheckBox, DeleteButton } from './index.styles';
import TaskLabel from './TaskLabel';

class TaskItem extends Component {
  checkChangeHandler = event => {
    this.props.updateTask({
      ...this.props.item,
      finished: event.target.checked,
    });
  };

  removeTaskClickHandler = () => {
    this.props.removeClicked(this.props.item.id);
  };

  parseTerm = term => {
    return moment(term)
      .calendar()
      .split(' ');
  };

  parseTermAndAlertIfToday = term => {
    const DD_MM = 'DD.MM';
    const termMoment = moment(term);
    const currentDate = moment().format(DD_MM);
    const nextDate = moment()
      .add(1, 'days')
      .format(DD_MM);

    let parsedTerm = termMoment.format(DD_MM);
    let termAlerted = false;

    if (parsedTerm === currentDate) {
      termAlerted = true;
      [parsedTerm] = this.parseTerm(term);
    } else if (parsedTerm === nextDate) {
      [parsedTerm] = this.parseTerm(term);
    }

    return {
      parsedTerm,
      termAlerted,
    };
  };

  render() {
    const { item } = this.props;
    const { name, tag, finished, term } = item;
    const { parsedTerm, termAlerted } = this.parseTermAndAlertIfToday(term);

    return (
      <StyledTaskItem>
        <CheckBox type="checkbox" checked={finished} onChange={this.checkChangeHandler} />
        <TaskLabel name={name} tag={tag} finished={finished} term={parsedTerm} termAlerted={termAlerted} />
        <DeleteButton onClick={this.removeTaskClickHandler} />
      </StyledTaskItem>
    );
  }
}

const mapDispatchToProps = {
  updateTask: taskActions.updateTask,
};

export default connect(
  null,
  mapDispatchToProps
)(TaskItem);
