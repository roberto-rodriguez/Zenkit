import React, { Component } from "react";
import * as taskActions from "../../task/task.actions";
import { TextField, SelectField } from "../../common/fields/";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import moment from "moment";
import { Button, Dialog } from "evergreen-ui";

class SprintBoardHeader extends Component {
  render() {

    let sprint = this.props.sprint || {};
    let {
      name,
      active,
      startDate,
      endDate,
      hours,
      loggedHours,
      completed
    } = sprint;
    let start = moment(startDate).format("MMM Do");
    let end = moment(endDate).format("MMM Do");

    return (
      <div className="card">
        <div className="card-content">
          <div>
            <strong>Name:</strong> {name}
          </div>
          <div>
            <span className="sprint-detail">
              <strong>Status:</strong> {active ? "active" : "not active"}
            </span>
            <span className="sprint-detail">
              <strong>Start Date:</strong> {start}
            </span>
            <span className="sprint-detail">
              <strong>End Date:</strong> {end}
            </span>
          </div>
          <div>
            <span className="sprint-detail">
              <strong>Estimated Hours:</strong> {hours}
            </span>
            <span className="sprint-detail">
              <strong>Logged Hours:</strong> {loggedHours}
            </span>
            <span className="sprint-detail">{completed}% Completed</span>
          </div>
        </div>
        <AddTaskForm {...this.props} />
      </div>
    );
  }
}

let statusName = [
  { id: 1, name: "TO DO" },
  { id: 2, name: "DOING" },
  { id: 3, name: "REVIEW" },
  { id: 4, name: "DONE" }
];
let flags = [
  { id: 1, name: "Open Question" },
  { id: 2, name: "Answered Question" },
  { id: 3, name: "Open Notification" },
  { id: 4, name: "Seen Notification" }
];

const AddTaskForm = props => {
  const { handleSubmit, pristine, reset, submitting, values, addTask, history } = props;

  return (
    <form className="card">
      <Dialog
        className="card-action"
        header="Add New Task"
        fixedFooter
        trigger={
          <Button
            className="waves-effect waves-light btn modal-trigger card"
            style={{ marginLeft: 25 }}
          >
            Add Task
          </Button>
        }
        style={{ minWidth: "45rem" }}
      >
        <form
          onSubmit={handleSubmit(() => {
            addTask(history, values);

            alert(JSON.stringify(values));
          })}
        >
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                label={"Name"}
                name="name"
                component={TextField}
                type="text"
                placeholder="Task Name"
              />
            </div>

            <div>
              <Field
                label={"Title"}
                name="title"
                component={TextField}
                type="text"
                placeholder="Task Title"
              />
            </div>

            <div>
              <Field
                label={"Assignee to"}
                name="assignee"
                component={SelectField}
                source={"assignee"}
              />
            </div>

            <div>
              <Field
                label={"Status"}
                name="status"
                component={SelectField}
                source={statusName}
              />
            </div>

            <div>
              <Field
                label={"Flag"}
                name="flag"
                component={SelectField}
                source={flags}
              />
            </div>

            <div>
              <Field
                label={"Estimated Hours"}
                name="estimatedHours"
                component={TextField}
                type="text"
                placeholder="Hours"
              />
            </div>

            <div>
              <label>Description</label>
              <div>
                <Field name="description" component="textarea" />
              </div>
            </div>
            <div>
              <button type="submit" disabled={pristine || submitting}>
                Submit
              </button>
              <button
                type="button"
                disabled={pristine || submitting}
                onClick={reset}
              >
                Clear Values
              </button>
            </div>
          </form>
        </form>
      </Dialog>
    </form>
  );
};

function validate(values) {
  const errors = {};

  // formFields.forEach(({ name, label }) => {
  //   if (!values[name]) {
  //     errors[name] = label + " is required";
  //   }
  // });

  return errors;
}

const mapStateToProps = ({ form }, ownProps) => {
  return {
    values: form.taskForm && form.taskForm.values
  };
};

export default reduxForm({
  validate: validate,
  form: "taskForm"
})(
  connect(
    mapStateToProps,
    taskActions
  )(withRouter(SprintBoardHeader))
);
