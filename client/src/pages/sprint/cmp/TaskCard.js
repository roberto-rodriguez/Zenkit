import React, { Component } from "react";
import { withRouter } from "react-router";
import { flags } from "../../../util/constants";
import { Avatar, Tooltip } from "evergreen-ui";
import { connect } from "react-redux";
import * as sprintActions from "../sprint.actions";
import { Draggable } from 'react-beautiful-dnd';

class TaskCard extends Component {
  click = name => {
    this.props.history.push("/task/" + name);
  };

  moveIt(destinationStatus) {
    let { task, sprintId, moveTask } = this.props;
    moveTask(sprintId, task.id, destinationStatus);
  }
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
      onClick={() => {
          this.click(name);
      }}
      style={{ cursor: "pointer", borderTopRightRadius: 20 }}

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
              <Tooltip content={assignee}>
                <Avatar
                  isSolid
                  name={assignee}
                  size={40}
                  style={{ position: "absolute", right: "0px", top: "0px" }}
                />
              </Tooltip>
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
              {this.props.previous ? (
                <i
                  className="material-icons grey-text darken-1 cursor-pointer"
                  onClick={event => {
                    this.moveIt(this.props.previous);
                  }}
                >
                  navigate_before
                </i>
              ) : null}
              {this.props.next ? (
                <i
                  className="material-icons grey-text darken-1 cursor-pointer"
                  onClick={event => {
                    this.moveIt(this.props.next);
                  }}
                >
                  navigate_next
                </i>
              ) : null}
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
const mapStateToProps = ({ sprint }, myProps) => {
  return {
    sprintId: sprint.open ? sprint.open.id : null
  };
};

export default connect(
  mapStateToProps,
  sprintActions
)(withRouter(TaskCard));
