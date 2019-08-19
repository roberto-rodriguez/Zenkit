import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { SprintList, Task, Login, SprintBoard, Profile, Docs } from "./pages/";
import { connect } from "react-redux";
import * as authActions from "./pages/auth/auth.actions";
import "./pages/common/common.scss";
import "./pages/common/common.laptop.scss";
import "./pages/common/overrides.scss";
import "./styles/materialize/materialize.scss";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={SprintBoard} />
        <Route exact path="/task" component={Task} />
        <Route exact path="/task/:taskId" component={Task} />
        <Route exact path="/sprint/:sprintId" component={SprintBoard} />
        <Route exact path="/sprints" component={SprintList} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/docs/:doc" component={Docs} />
        <Route exact path="/docs" component={Docs} />
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  authActions
)(App);
