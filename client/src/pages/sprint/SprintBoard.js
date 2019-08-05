import React, { Component } from "react";
import "./SprintBoard.scss";
import Page from "../common/cmp/Page";
import * as sprintActions from "./sprint.actions";
import { connect } from "react-redux";

class SprintBoard extends Component {
  
  componentDidMount() {
    var { sprint, sprintId, openSprint } = this.props;

    if (!sprint) {
      openSprint(sprintId);
    }
  }

  render() {
    var sprint = this.props.sprint || {};
    var { name } = sprint;

    return (
      <Page fullWidth>
        <div
          className="section"
          style={{ height: 250, width: "100%", backgroundColor: "grey" }}
        >
          {name}
        </div>
        <br />
        <div
          className="section row"
          style={{
            minHeight: 500,
            width: "100%"
          }}
        >
          <div
            className="col s3"
            style={{ backgroundColor: "green", minHeight: 500 }}
          />
          <div
            className="col s3"
            style={{ backgroundColor: "brown", minHeight: 500 }}
          />
          <div
            className="col s3"
            style={{ backgroundColor: "grey", minHeight: 500 }}
          />
          <div
            className="col s3"
            style={{ backgroundColor: "blue", minHeight: 500 }}
          />
        </div>

        <br />
      </Page>
    );
  }
}

function mapStateToProps({ sprint }, props) {
  var sprintId =
    props.match && props.match.params && props.match.params.sprintId;
  const { open } = sprint;

  var sprintData;

  if (sprintId) {
    //If trying to open an Sprint by the id on the url '/sprint/:sprintId'
    if (open && open.id == sprintId) {
      sprintData = { ...open };
    }
  } else {
    // Id trying to open the active sprint by the url '/'
    if (open && open.active) {
      sprintData = { ...open };
    }
  }

  return { sprint: sprintData, sprintId };
}

export default connect(
  mapStateToProps,
  sprintActions
)(SprintBoard);
