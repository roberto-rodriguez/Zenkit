import React, { Component } from "react";
import TaskCard from "./TaskCard";
import { connect } from "react-redux";
import { taskStatusNames } from "../../../util/constants";
import { Droppable } from 'react-beautiful-dnd';

class TaskColumn extends Component {
  render() {
    let { taskStatusId, columnTasks } = this.props;
    
    return (
      <div className="col s3 transparent">
        <Droppable droppableId={taskStatusId} >
          {provided => {
            return (
              <div className={"card task-column blue lighten-5"} {...provided.droppableProps} ref={provided.innerRef}>
                <div className="card-content">
                  <span className="card-title">{taskStatusNames[taskStatusId]}</span>
                  {columnTasks.map((task, i) => (
                    <TaskCard key={i} task={task} />
                  ))}
                  {provided.placeholder}
                </div>
              </div>
              );
            }}
        </Droppable>
      </div>
    )
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
