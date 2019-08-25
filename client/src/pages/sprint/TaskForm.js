import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { reduxForm } from "redux-form";
import { validateTaskFields } from "./cmp/";
import * as taskActions from "../task/task.actions";
import TaskFormFirstPage from "./cmp/TaskFormFirstPage";
import TaskFormSecondPage from "./cmp/TaskFormSecondPage";

class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      editing: false,
      showDialog: false,
      isLoading: false
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.onSubmitTaskValues = this.onSubmitTaskValues.bind(this);
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  onSubmitTaskValues = () => {
    const { values, sprintId } = this.props;

    alert(JSON.stringify(values));
    const formValues = Object.assign(values, sprintId);
    this.props.saveTask(this.props.history, formValues);
  };

  componentWillReceiveProps({ edit }) {
    if (edit !== this.setState.editing) this.setState({ editing: edit });
  }

  componentDidMount() {
    this.setState({ editing: false });
  }

  render() {
    const { page, editing } = this.state;
    const {
      id,
      title,
      assigneeId,
      status,
      flag,
      estimatedHours,
      sprint,
      description
    } = { ...this.props.taskOpen };

    return (
      <div className="col s10 offset-s1" style={{ minWidth: 460 }}>
        <div className="card">
          <div className="card-content">
            {page === 1 && (
              <TaskFormFirstPage
                onSubmit={this.nextPage}
                initialValues={{
                  id: editing ? id : null,
                  title: editing ? title : "Task Title",
                  assigneeId: editing ? assigneeId : 1,
                  status: editing ? status : 1,
                  flag: editing ? flag : 1,
                  estimatedHours: editing ? estimatedHours : 0,
                  sprint: editing ? sprint : 1,
                  description: editing ? description : "Task Description"
                }}
              />
            )}
            {page === 2 && (
              <TaskFormSecondPage
                previousPage={this.previousPage}
                onSubmit={this.onSubmitTaskValues}
                initialValues={{
                  id: editing ? id : null,
                  title: editing ? title : "Task Title",
                  assigneeId: editing ? assigneeId : 1,
                  status: editing ? status : 1,
                  flag: editing ? flag : 1,
                  estimatedHours: editing ? estimatedHours : 0,
                  sprint: editing ? sprint : 1,
                  description: editing ? description : "Task Description"
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = ({ task, sprint, form }) => {
  const { open } = sprint;
  const { taskOpen } = task;

  return {
    sprintId: { sprint: open && open.id }, //temporal hackfix: if we open a task by url and itsn't from
    //the open sprint and if we edit it, it will pass to belong to the already open sprint (wrong!!!)
    taskOpen: taskOpen,
    values: form.taskForm && form.taskForm.values
  };
};

export default reduxForm({
  validate: validateTaskFields,
  form: "taskForm",
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(
  connect(
    mapStateToProps,
    taskActions
  )(withRouter(TaskForm))
);
