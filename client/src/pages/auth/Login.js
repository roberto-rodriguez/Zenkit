import React, { Component } from "react";
import "./Login.scss";
import Page from "../common/cmp/Page";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as authActions from "./auth.actions";
import NavBar from "../common/cmp/NavBar";

class Login extends Component {
  render() {
    const { login, logout, history} = this.props;

    return (
      <div className="grey lighten-5">
        <NavBar />
        <div className={"content"}>
          <div>
            <div
              className="section row"
              style={{
                minWidth: "100%",
                backgroundColor: "grey",
                height: "80vh",
                display: "flex"
              }}
            >
              <div
                className="col s6 m4 l3 centered"
                style={{
                  backgroundColor: "green",
                  height: 260
                }}
              >
                <a className="waves-effect waves-light btn" onClick={() => login(history)}>
                  <i className="material-icons right">arrow_forward</i>Login
                </a> 
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  authActions
)(withRouter(Login));
