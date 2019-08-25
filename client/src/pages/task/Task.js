import React, { Component } from "react";
import "./Task.scss";
import Page from "../common/cmp/Page";
import TaskView from "./cmp/TaskView";
import Comment from "./cmp/Comment";
import TaskForm from "../sprint/TaskForm";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false
    };

    this.showTaskEdit = this.showTaskEdit.bind(this);
  }

  componentDidMount() {
    this.showTaskEdit(false);
  }

  showTaskEdit = show => {
    this.setState({ edit: show });
  };

  render() {
    return (
      <Page>
        <div
          className="section header row"
          style={{
            display: this.state.edit ? "none" : ""
          }}
        >
          <TaskView {...this.props} showTaskEdit={this.showTaskEdit} />
        </div>
        <div
          className="section header row"
          style={{
            height: 350,
            width: "60%",
            position: "center",
            display: this.state.edit ? "" : "none"
          }}
        >
          <TaskForm {...this.props} edit={this.state.edit} />
        </div>
        <div className="section row">
          <Comment {...this.props} />
        </div>
      </Page>
    );
  }
}

export default Task;
