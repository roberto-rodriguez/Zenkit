import React, {Component} from "react";
import "./SprintBoard.scss";
import Page from "../common/cmp/Page";
import * as sprintActions from "./sprint.actions";
import {connect} from "react-redux";
import TaskColumn from "./taskColumn";
import moment from "moment";

class SprintBoard extends Component {

  componentDidMount() {
    let {sprint, sprintId, openSprint} = this.props;

    if (!sprint) {
      openSprint(sprintId);
    }
  }

  render() {
    let sprint = this.props.sprint || {};
    let {name, active, startDate, endDate, hours, loggedHours, completed, tasks} = sprint;
    let start = moment(startDate).format("MMM Do");
    let end = moment(endDate).format("MMM Do");

    return (
      <Page fullWidth>
        <div
          className="section sprint-board header grey lighten-4"
          style={{height: 250, width: "100%"}}
        >
          <div className="card">
            <div className="card-content">
              <div>
                <strong>Name:</strong> {name}
              </div>
              <div>
                <span className="sprint-detail"><strong>Status:</strong> {active ? "active" : "not active"}</span>
                <span className="sprint-detail"><strong>Start Date:</strong> {start}</span>
                <span className="sprint-detail"><strong>End Date:</strong> {end}</span>
              </div>
              <div>
                <span className="sprint-detail"><strong>Estimated Hours:</strong> {hours}</span>
                <span className="sprint-detail"><strong>Logged Hours:</strong> {loggedHours}</span>
                <span className="sprint-detail">{completed}% Completed</span>
              </div>
            </div>
            <div className="card-action">
              <a href="#">Add Task</a>
            </div>
          </div>
        </div>
        <div
          className="section row sprint-board kanban"
          style={{
            minHeight: 500,
            width: "100%"
          }}
        >
          <div
            className="col s3"
          >
            <TaskColumn title="TO DO" tasks={tasks} status="todo" className="green darken-4"/>
          </div>
          <div
            className="col s3"
          >
            <TaskColumn title="DOING" tasks={tasks} status="doing" className="red darken-2"/>
          </div>
          <div
            className="col s3"
          >
            <TaskColumn title="REVIEW" tasks={tasks} status="review" className="grey darken-2"/>
          </div>
          <div
            className="col s3"
          >
            <TaskColumn title="DONE" tasks={tasks} status="done" className="blue darken-4"/>
          </div>
        </div>
      </Page>
    );
  }
}

function mapStateToProps({sprint}, props) {
  let sprintId =
    props.match && props.match.params && props.match.params.sprintId;
  const {open} = sprint;

  let sprintData;

  if (sprintId) {
    //If trying to open an Sprint by the id on the url '/sprint/:sprintId'
    if (open && open.id == sprintId) {
      sprintData = {...open};
    }
  } else {
    // Id trying to open the active sprint by the url '/'
    if (open && open.active) {
      sprintData = {...open};
    }
  }

  return {sprint: sprintData, sprintId};
}

export default connect(
  mapStateToProps,
  sprintActions
)(SprintBoard);
