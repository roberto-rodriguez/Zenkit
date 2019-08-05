import React, { Component } from "react";
import "./SprintBoard.scss";
import Page from "../common/cmp/Page";
import * as sprintActions from "./sprint.actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class SprintList extends Component {
  componentDidMount() {
    var { list, listSprints } = this.props;

    if (!list) {
      listSprints();
    }
  }

  render() {
    var sprintList = this.props.sprintList || [];

    return (
      <Page>
        <div
          className="section"
          style={{ height: 250, width: "100%", backgroundColor: "grey" }}
        />
        <br />
        <div
          className="section"
          style={{
            minHeight: 500,
            width: "100%"
          }}
        >
          {sprintList.map(s => (
            <div>
              <NavLink to={"/sprint/" + s.id}>{s.name}</NavLink>
              <br />
              <br />
            </div>
          ))}
        </div>

        <br />
      </Page>
    );
  }
}

const mapStateToProps = ({ sprint }) => ({
  sprintList: sprint.list ? Object.values(sprint.list) : null
});

export default connect(
  mapStateToProps,
  sprintActions
)(SprintList);
