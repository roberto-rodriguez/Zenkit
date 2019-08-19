import React, { Component } from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { Redirect } from "react-router";

class Page extends Component {
  render() {
    var { fullWidth, appStarted, userId } = this.props;

    if (!appStarted) {
      return <p>Loading...</p>;
    }

    if (!userId) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="page grey lighten-5">
        <NavBar />
        <div
          className={"page-body " + (fullWidth ? "" : "content")}
          style={{ paddingTop: 66 }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  appStarted: auth.appStarted,
  userId: auth.id
});

export default connect(
  mapStateToProps,
  null
)(Page);
