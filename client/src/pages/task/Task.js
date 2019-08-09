import React, { Component } from "react";
import "./Task.scss";
import Page from "../common/cmp/Page";
import axios from "axios";
//import CreateTask from "./cmp/createTask";

class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      title: "This is my first Task",
      asignedTo: "Ismail",
      status: "TODO",
      flag: "No Flag",
      logHours: "Log Hours",
      creationDate: new Date().getTime(),
      estimatedTime: 10,
      loggedHours: 6,
      completed: 60,
      description: "",
      sprint: {}
    };

    this.fetchUser = this.fetchUser.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.validate = this.validate.bind(this);
    // this.validateAbove = this.validateAbove.bind(this);
    // this.baseState = this.state;
  }

  fetchUser = id => {
    axios("/api/sprint/data")
      .then(res => {
        this.setState({
          asignedTo: res.data.user.name,
          creationDate: res.data.sprints[id].tasks[id].creationDate,
          estimatedTime: res.data.sprints[id].tasks[id].estimatedTime,
          loggedHours: res.data.sprints[id].tasks[id].loggedHours,
          completed: res.data.sprints[id].tasks[id].completed,
          description: res.data.sprints[id].tasks[id].description,
          sprint: res.data.sprints[id]
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    const { id } = this.state;
    this.fetchUser(id);
  }

  render() {
    return (
      <Page>
        <div
          className="section"
          style={{
            height: 250,
            width: "100%",
            paddingTop: 60
          }}
        >
          <div>
            <div class="row">
              <div class="col s2.4 left">
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
                    <i class="material-icons right">more_horiz</i>
                    {this.state.asignedTo}
                  </a>
                </h6>
              </div>
              <div class="col s2.4 left">
                <h6>
                  Status
                  <a
                    href="/task"
                    className="btn disabled"
                    style={{
                      marginLeft: 10
                    }}
                  >
                    <i class="material-icons right">more_horiz</i>
                    {this.state.status}
                  </a>
                </h6>
              </div>
              <div class="col s2.4 left">
                <h6>
                  Flag
                  <a
                    href="/task"
                    className="btn disabled"
                    style={{
                      marginLeft: 10
                    }}
                  >
                    <i class="material-icons right">more_horiz</i>
                    {this.state.flag}
                  </a>
                </h6>
              </div>
              <div class="col s2.4 right">
                <h6
                  style={{
                    marginRight: 10
                  }}
                >
                  <a href="/task" className="waves-effect waves-light btn">
                    <i className="material-icons right">add</i>Add Comment
                  </a>
                </h6>
              </div>
              <div class="col s2.4 right">
                <h6>
                  <a href="/task" className="btn disabled">
                    {this.state.logHours}
                  </a>
                </h6>
              </div>
            </div>

            <div class="row">
              <div class="col s2.4 left">
                <h6
                  style={{
                    marginLeft: 10
                  }}
                >
                  Creation Date: {this.state.creationDate}
                </h6>
              </div>
              <div class="col s2.4 left">
                <h6
                  style={{
                    marginLeft: 10
                  }}
                >
                  Estimated Hours: {this.state.estimatedTime}
                </h6>
              </div>
              <div class="col s2.4 left">
                <h6>Logged Hours: {this.state.loggedHours}</h6>
              </div>
              <div class="col s2.4 right">
                <h6
                  style={{
                    marginTop: 3
                  }}
                >
                  Sprint
                  <a
                    href="/task"
                    className="btn disabled"
                    style={{
                      marginRight: 10,
                      marginLeft: 10
                    }}
                  >
                    {this.state.sprint.name}
                  </a>
                </h6>
              </div>
              <div class="col s2.4 right">
                <h6>{parseInt(this.state.completed)} %completed</h6>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div
          className="section"
          style={{
            minHeight: 500,
            width: "100%",
            display: "block"
          }}
        >
          <h6>
            <a
              href="/task"
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
              href="/task"
              className="waves-effect waves-teal right"
              style={{ textDecoration: "underline", left: -80, rigth: -50 }}
            >
              Edit
            </a>{" "}
          </h6>
          <div className="row">
            <div className="col s6">
              <h4
                style={{
                  marginLeft: 30
                }}
              >
                Task: {this.state.title}
              </h4>
            </div>

            <div
              className="grid-example col s12 m8"
              style={{
                marginLeft: 30
              }}
            >
              <div className="divider" />
              <p>{this.state.description}</p>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default Task;
