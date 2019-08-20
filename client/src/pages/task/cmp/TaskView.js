import React, { Component } from "react";
import { connect } from "react-redux";
import * as taskActions from "../task.actions";
import "../Task.scss";

class TaskView extends Component {
  componentDidMount() {
    const { task, taskName, openTask, listTasks } = this.props;

    if (!task) {
      openTask(taskName);
      listTasks();
    }
  }

  render() {
    const { sprintName } = this.props || "";
    const {
      id,
      title,
      assignee,
      status,
      flag,
      creationDate,
      estimatedHours,
      loggedHours,
      completed,
      description
    } = this.props.task || "";

    return (
      <div className="section">
        <div
          className="section"
          style={{
            height: 200,
            width: "100%"
          }}
        >
          <div>
            <div className="row">
              <div className="col s2.4 left">
                <h6
                  style={{
                    marginLeft: 10
                  }}
                >
                  Asigned
                  <a
                    href="/task"
                    className="btn disabled"
                    style={{
                      marginLeft: 10
                    }}
                  >
                    <i className="material-icons right">...</i>
                    {assignee}
                  </a>
                </h6>
              </div>
              <div className="col s2.4 left">
                <h6>
                  Status
                  <a
                    href="/task"
                    className="btn disabled"
                    style={{
                      marginLeft: 10
                    }}
                  >
                    <i className="material-icons right">...</i>
                    {status}
                  </a>
                </h6>
              </div>
              <div className="col s2.4 left">
                <h6>
                  Flag
                  <a
                    href="/task"
                    className="btn disabled"
                    style={{
                      marginLeft: 10
                    }}
                  >
                    <i className="material-icons right">...</i>
                    {flag}
                  </a>
                </h6>
              </div>
              <div className="col s2.4 right">
                <h6
                  style={{
                    marginRight: 10
                  }}
                >
                  <a href="/task" className="waves-effect waves-light btn">
                    <i className="material-icons right">+</i>Add Comment
                  </a>
                </h6>
              </div>
            </div>

            <div className="row">
              <div className="col s2.4 left">
                <h6
                  style={{
                    marginLeft: 10
                  }}
                >
                  Creation Date: {creationDate}
                </h6>
              </div>
              <div className="col s2.4 left">
                <h6
                  style={{
                    marginLeft: 10
                  }}
                >
                  Estimated Hours: {estimatedHours}
                </h6>
              </div>
              <div className="col s2.4 left">
                <h6>Logged Hours: {loggedHours}</h6>
              </div>
              <div className="col s2.4 right">
                <h6
                  style={{
                    marginTop: 3
                  }}
                >
                  Sprint
                  <a
                    href="/"
                    className="btn disabled"
                    style={{
                      marginRight: 10,
                      marginLeft: 10
                    }}
                  >
                    {sprintName}
                  </a>
                </h6>
              </div>
              <div className="col s2.4 right">
                <h6>{parseInt(completed)} %completed</h6>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div
          className="section"
          style={{
            width: "100%"
          }}
        >
          <div className="row">
            <div className="col s12 transparent">
              <div className={"card task-column blue lighten-5"}>
                <div className="card-content" />
                <h6>
                  <a
                    href="/"
                    className="waves-effect waves-teal right"
                    style={{
                      textDecoration: "underline",
                      left: -50
                    }}
                  >
                    Remove
                  </a>
                </h6>
                <h6>
                  <a
                    href="/"
                    className="waves-effect waves-teal right"
                    style={{
                      textDecoration: "underline",
                      left: -80,
                      rigth: -50
                    }}
                  >
                    Edit
                  </a>
                </h6>
                <div>
                  <div>
                    <h4
                      style={{
                        marginLeft: 30
                      }}
                    >
                      Task {id}: {title}
                    </h4>
                  </div>

                  <div
                    className="grid-example"
                    style={{
                      marginLeft: 30
                    }}
                  >
                    <div className="divider" />
                    <p style={{ marginRight: 180 }}>{description}</p>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ task, sprint }, props) {
  var taskName =
    props.match && props.match.params && props.match.params.taskName;
  const { open } = task;
  let taskData;

  if (taskName) {
    //If trying to open a Task by the name on the url '/task/taskName'
    if (open && open.name == taskName) {
      taskData = { ...open };
    }
  }

  return {
    task: taskData,
    taskName,
    sprintName: sprint.open ? sprint.open.name : ""
  };
}

export default connect(
  mapStateToProps,
  taskActions
)(TaskView);
