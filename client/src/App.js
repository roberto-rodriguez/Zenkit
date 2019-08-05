import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { SprintList, Task, Login, SprintBoard } from "./pages/";
import { connect } from "react-redux";
import * as authActions from "./pages/auth/auth.actions";
import "./pages/common/common.scss";
import "./pages/common/common.laptop.scss";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={SprintBoard} />
          <Route exact path="/task" component={Task} />
          <Route exact path="/task/:taskId" component={Task} />
          <Route exact path="/sprint/:sprintId" component={SprintBoard} />
          <Route exact path="/sprints" component={SprintList} />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  authActions
)(App);
