import React, { Component } from "react";
import TaskCard from "./TaskCard";
import { connect } from "react-redux";
import { taskStatusNames } from "../../../util/constants";
import { Droppable } from 'react-beautiful-dnd';

class TaskColumn extends Component {
  render() {
    let { taskStatusId, columnTasks } = this.props;


    const statusIds = Object.keys(taskStatusNames);
    const statusIndex = statusIds.findIndex(x => x === taskStatusId);
    let next = statusIds[(statusIndex + 1)]?statusIds[(statusIndex + 1)]:null;
    let previous = statusIds[(statusIndex - 1)]?statusIds[(statusIndex - 1)]:null;

    return (
      <div className="col s3 transparent">
        <Droppable droppableId={taskStatusId} >
          {provided => {
            return (
        <div className={"card task-column blue lighten-5"} {...provided.droppableProps} ref={provided.innerRef}>
          <div className="card-content">
            <span className="card-title">{taskStatusNames[taskStatusId]}</span>
            {columnTasks.map((task) => (
              <TaskCard key={task.id}
                        task={task}
                        next = {next}
                        previous = {previous}                        
              />
            ))}
            {provided.placeholder}
          </div>
        </div>
           );
          }}
      </Droppable>
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
