import React, { Component } from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as authActions from "../../auth/auth.actions";
import { primaryColor } from "../../../util/constants";

class NavBar extends Component {
  render() {
    var { appStarted, userId, name, logout, transparent } = this.props;

    return (
      <nav
        style={{
          position: "absolute",
          zIndex: 1000,
          backgroundColor: transparent ? "transparent" : primaryColor
        }}
      >
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">
            Zenkit
          </NavLink>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down"
            style={{ marginRight: "10%" }}
          >
            <li className="toggle-menu-wrapper">
              <NavLink to="/docs">
                <h5 style={{ marginRight: 30 }}>Docs</h5>
              </NavLink>
            </li>
            {appStarted && userId && (
              <li className="toggle-menu-wrapper">
                <h5 style={{ marginRight: 30 }}>Menu</h5>
                <ul style={{ width: 200 }}>                  
                  <li>
                    <NavLink to="/sprints">Sprints</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tasks">Tasks</NavLink>
                  </li>
                </ul>
              </li>
            )}

            {userId && (
              <li className="toggle-menu-wrapper">
                <h5>{name}</h5>
                <ul style={{ width: 200 }}>
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <a onClick={logout}>Log Out</a>
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  appStarted: auth.appStarted,
  userId: auth.id,
  name: auth.name
});

export default connect(
  mapStateToProps,
  authActions
)(NavBar);
