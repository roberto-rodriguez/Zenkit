/* eslint-disable eqeqeq */
import React, { Component } from "react";
import TaskCard from "./TaskCard";
import { connect } from "react-redux";
import { taskStatusNames } from "../../../util/constants";

class TaskColumn extends Component {
  render() {
    let { taskStatusId, columnTasks } = this.props;

    return (
      <div className="col s3 transparent">
        <div className={"card task-column blue lighten-5"}>
          <div className="card-content">
            <span className="card-title">{taskStatusNames[taskStatusId]}</span>
            {columnTasks.map((task, i) => (
              <TaskCard key={i} task={task} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ sprint }, myProps) => {
  return {
    columnTasks:
      sprint.open && sprint.open.tasks
        ? Object.values(sprint.open.tasks).filter(
            task => task.status == myProps.taskStatusId
          )
        : []
  };
};

export default connect(mapStateToProps)(TaskColumn);
