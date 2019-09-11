import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, values } from "redux-form";
import { TextField, DateField } from "../../common/fields";
import moment from "moment";
import validateSprintFields from "./validateSprintFields";
import { Button, Pane } from "evergreen-ui";

class SprintBoardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formEdit: false
    };
    this.showEditForm = this.showEditForm.bind(this);
  }
  showEditForm = show => {
    this.setState({ formEdit: show });
    this.props.editForm(show);
  };

  render() {
    let sprint = this.props.sprint.open || {};
    const values = this.props.values || {};

    let {
      id,
      name,
      active,
      startDate,
      endDate,
      hours,
      loggedHours,
      completed
    } = sprint;
    // let start = moment(startDate).format("MMM Do");
    //let end = moment(endDate).format("MMM Do");
              
    return (
      <div className="card">
        <div
          style={{
            display: this.state.formEdit ? "none" : ""
          }}
        >
          <div className="card-content">
            <div>
              <strong>Name:</strong> {name}
            </div>
            <div>
              <span className="sprint-detail">
                <strong>Status:</strong> {active ? "active" : "not active"}
              </span>
              <span className="sprint-detail">
                <strong>Start Date:</strong> {startDate}
              </span>
              <span className="sprint-detail">
                <strong>End Date:</strong> {endDate}
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
          <div className="card-action">
            <Button
              onClick={() => this.props.showTaskForm(true)}
              iconBefore="add"
              height={32}
              appearance="primary"
            >
              Add Task
            </Button>{" "}
            <Button
              onClick={() => this.showEditForm(true)}
              iconBefore="edit"
              height={32}
              appearance="primary"
            >
              Edit Sprint
            </Button>
          </div>
        </div>
        <div
          style={{
            display: this.state.formEdit ? "" : "none"
          }}
        >
          <Pane marginLeft={450}>
            <form onSubmit={this.onSubmitAddSprint}>
              <div className="row">
                <div className="col s3">
                  <Field
                    name="name"
                    label="Name"
                    component={TextField}
                    placeholder="Placeholder text here"
                    defaultValue={values["name"]}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s3">
                  <Field
                    name="startDate"
                    label="Start Date"
                    component={DateField}
                    placeholder="Placeholder text here"
                    defaultValue={values["startDate"]}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s3">
                  <Field
                    name="endDate"
                    label="End Date"
                    component={DateField}
                    placeholder="Placeholder text here"
                    defaultValue={values["endDate"]}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s3">
                  <Field
                    name="hours"
                    label="Estimated Hours"
                    component={TextField}
                    placeholder="Placeholder text here"
                    defaultValue={values["hours"]}
                  />
                </div>
              </div>
              <div className="row">
                <Button
                  type="submit"
                  disabled={!this.props.valid}
                  iconBefore="add"
                  height={32}
                  appearance="primary"
                  marginTop={24}
                  marginLeft={10}
                >
                  Add Sprint
                </Button>
              </div>
            </form>
          </Pane>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ sprint }) => {
  return {
    sprint
  };
};

export default reduxForm({
  validate: validateSprintFields,
  form: "editSprintForm"
})(connect(mapStateToProps)(SprintBoardHeader));
