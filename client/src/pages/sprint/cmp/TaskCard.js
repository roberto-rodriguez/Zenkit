import React, { Component } from "react";
import { flags } from "../../../util/constants";
import Avatar from "react-avatar";
import { Draggable } from 'react-beautiful-dnd';

class TaskCard extends Component {
  render() {
    let {
      id,
      name,
      title,
      assignee,
      flag,
      estimatedHours,
      loggedHours
    } = this.props.task;

    return (
      <Draggable key={name} draggableId={name} index={id}>
    {provided => {
      return (
      <div className="task-card card" ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}>
        <div className="card-content">
          <div className="row">
            {flag && (
              <a
                className={
                  "left user-button btn-floating waves-light " +
                  flags[flag].color
                }
              >
                <i className="material-icons" style={{ fontSize: 40 }}>
                  {flags[flag].icon}
                </i>
              </a>
            )}

            <div className="left">
              <h6
                className="indigo-text darken-4"
                style={{ margin: "0px 10px" }}
              >
                {name}
              </h6>
            </div>
            <div className="right" style={{ textAlign: "center" }}>
              <Avatar
                name={assignee}
                size={40}
                style={{ position: "absolute", right: "0px", top: "0px" }}
              />
            </div>
          </div>
          <div className="row">
            <p>{title}</p>
          </div>
          <div>
            <span className={"left  grey-text darken-1"}>
              {loggedHours}/{estimatedHours}
            </span>
            <div className={"right"}>
              <i className="material-icons grey-text darken-1 cursor-pointer">
                navigate_before
              </i>
              <i className="material-icons grey-text darken-1 cursor-pointer">
                navigate_next
              </i>
            </div>
          </div>
        </div>
      </div>
      );
    }}
  </Draggable>
    );
  }
}

export default TaskCard;
