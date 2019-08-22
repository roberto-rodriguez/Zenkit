import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { Button } from "evergreen-ui";

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
        <div className="card-action">
          <Button
            onClick={() => this.props.showTaskForm(true)}
            iconAfter="add"
            height={32}
            appearance="primary"
          >
            Add Task
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(null)(SprintBoardHeader);
