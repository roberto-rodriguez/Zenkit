import React, { Component } from "react";
import { connect } from "react-redux";
import * as taskActions from "../task.actions";
import "../Task.scss";
import { Button, Pane, Dialog } from "evergreen-ui";

class TaskView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDialog: false,
      isLoading: false
    };

    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {
    const { task, taskName, openTask, listTasks } = this.props;

    if (!task) {
      openTask(taskName);
      listTasks();
    }
  }

  componentDidUpdate() {
    if (this.state.isLoading === true) {
      window.setTimeout(() => {
        this.setState({
          showDialog: false
        });
      }, 2000);
    }
  }

  deleteTask = id => {
    window.setTimeout(() => {
      this.props.removeTask(this.props.history, id);
    }, 2000);
  };

  render() {
    console.log(this.state.showDialog, this.state.isLoading);
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
      <div className="col s12">
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
                    href="/"
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
                    href="/"
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
                    href="/"
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
                  <Button
                    onClick={"here func for add comment"}
                    iconAfter="add"
                    height={32}
                    appearance="primary"
                  >
                    Add Comment
                  </Button>
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
        <div
          className="section"
          style={{
            width: "100%"
          }}
        >
          <div className="row">
            <div className="col s12 transparent">
              <div className="card blue lighten-5">
                <Pane
                  display="flex"
                  alignItems="right"
                  justifyContent="right"
                  padding={16}
                  borderRadius={3}
                >
                  <Button
                    onClick={() => this.props.showTaskEdit(true)}
                    iconAfter="edit"
                    height={32}
                    appearance="primary"
                    marginRight={16}
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => this.setState({ showDialog: true })}
                    iconAfter="remove"
                    height={32}
                    appearance="primary"
                    marginRight={16}
                  >
                    Remove
                  </Button>
                  <Dialog
                    isShown={this.state.showDialog}
                    title="Delete confirmation"
                    onCloseComplete={() => {
                      this.setState({ showDialog: false, isLoading: false });
                    }}
                    isConfirmLoading={this.state.isLoading}
                    onConfirm={() => {
                      this.setState({ isLoading: true });
                      this.deleteTask(id);
                    }}
                    confirmLabel={
                      this.state.isLoading ? "Deleting..." : "Confirm Delete"
                    }
                  >
                    Are you sure to remove this task?
                  </Dialog>
                </Pane>
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

  const { taskOpen } = task;
  let taskData;

  if (taskName) {
    //If trying to open a Task by the name on the url '/task/taskName'
    if (taskOpen && taskOpen.name == taskName) {
      taskData = { ...taskOpen };
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
