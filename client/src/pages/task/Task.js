import React, { Component } from "react";
import "./Task.scss";
import Page from "../common/cmp/Page";
import TaskView from "./cmp/TaskView";
import Comment from "./cmp/Comment";

//import CreateTask from "./cmp/createTask";

class Task extends Component {
  render() {
    return (
      <Page>
        <TaskView {...this.props} />
        <Comment {...this.props} />
      </Page>
    );
  }
}

export default Task;