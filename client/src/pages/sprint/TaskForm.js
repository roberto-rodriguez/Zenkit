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
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.onSubmitTask = this.onSubmitTask.bind(this);
    this.state = {
      page: 1
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  onSubmitTask = () => {
    const { values } = this.props;
    alert(JSON.stringify(values));
    console.log("se adicionaron los valores via action taskAdd");
  };

  render() {    

    const { page } = this.state;
    return (
      <div
      className="col s12"
      >
        {page === 1 && <TaskFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <TaskFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.onSubmitTask}
          />
        )}
      </div>
    );
  }
}

TaskForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = ({ form }, ownProps) => {
  return {
    values: form.taskForm && form.taskForm.values
  };
};

export default reduxForm({
  validate: validateTaskFields,
  form: "taskForm"
})(connect(mapStateToProps, taskActions)(withRouter(TaskForm)));
