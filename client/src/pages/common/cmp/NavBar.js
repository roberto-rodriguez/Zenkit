import React, { Component } from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as authActions from "../../auth/auth.actions";

class NavBar extends Component {
  render() {
    var { appStarted, userId, name, logout } = this.props;

    return (
      <nav style={{ backgroundColor: "#0e0843" }}>
        <div className="nav-wrapper">
          <NavLink to="/" className="brand-logo">
            <i className="large material-icons">extension</i>
            Lego Tracker
          </NavLink>
          <ul
            id="nav-mobile"
            className="right hide-on-med-and-down"
            style={{ marginRight: "10%" }}
          >
            {appStarted && userId && (
              <li className="toggle-menu-wrapper">
                <h5>Menu</h5>
                <ul style={{ width: 200 }}>
                  <li>
                    <NavLink to="/task">Task</NavLink>
                  </li>
                  <li>
                    <NavLink to="/sprints">Sprints</NavLink>
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
