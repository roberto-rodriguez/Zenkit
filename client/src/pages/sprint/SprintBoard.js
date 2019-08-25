import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "../common/cmp/Page";
import TaskForm from "./TaskForm";
import * as sprintActions from "./sprint.actions";
import { SprintBoardHeader, TaskColumn } from "./cmp/";
import { taskStatusNames } from "../../util/constants";
import "./SprintBoard.scss";
import { DragDropContext } from "react-beautiful-dnd";

class SprintBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false
    };

    this.showTaskForm = this.showTaskForm.bind(this);
  }

  componentDidMount() {
    let { sprint, sprintId, openSprint } = this.props;

    if (!sprint) {
      openSprint(sprintId);
    }
    this.showTaskForm(false);
  }

  showTaskForm = show => {
    this.setState({ showForm: show });
  };

  render() {
    return (
      <Page fullWidth>
        <div
          className="section header row"
          style={{
            height: 350,
            width: "60%",
            position: "center",
            display: this.state.showForm ? "" : "none"
          }}
        >
          <TaskForm {...this.props} />
        </div>
        <div style={{ display: this.state.showForm ? "none" : "" }}>
          <div
            className="section sprint-board header grey lighten-4"
            style={{
              height: 250,
              width: "100%"
            }}
          >
            <SprintBoardHeader
              sprint={this.props.sprint}
              showTaskForm={this.showTaskForm}
            />
          </div>
          <DragDropContext onDragEnd={this.props.onDragEnd}>
            <div
              className="section row sprint-board kanban"
              style={{
                minHeight: 500,
                width: "100%"
              }}
            >
              {Object.keys(taskStatusNames).map(taskStatusId => (
                <TaskColumn
                  taskStatusId={taskStatusId}
                  key={taskStatusId}
                  history={this.props.history}
                />
              ))}
            </div>
          </DragDropContext>
        </div>
      </Page>
    );
  }
}

function mapStateToProps({ sprint }, props) {
  let sprintId =
    props.match && props.match.params && props.match.params.sprintId;
  const { open } = sprint;

  let sprintData;

  if (sprintId) {
    //If trying to open an Sprint by the id on the url '/sprint/:sprintId'
    if (open && open.id == sprintId) {
      sprintData = { ...open };
    }
  } else {
    // Id trying to open the active sprint by the url '/'
    if (open && open.active) {
      sprintData = { ...open };
    }
  }

  return { sprint: sprintData, sprintId };
}

export default connect(
  mapStateToProps,
  sprintActions
)(SprintBoard);
