/* eslint-disable no-this-before-super */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./SprintBoard.scss";
import Page from "../common/cmp/Page";
import * as sprintActions from "./sprint.actions";
import { connect } from "react-redux";
import SprintBoardHeader from "./cmp/SprintBoardHeader";
import { Button, Icon , Modal} from "react-materialize";

class SprintList extends Component {

  componentDidMount() {
    var { list, listSprints } = this.props;

    if (!list) {
      listSprints();
    }
  }

  render() {
    let add = 1;
    let sprintList = this.props.sprintList || [];
    console.log(this.state.modal);
    return (
      <Page>
        <div
          className="section sprint-board header grey lighten-4"
          style={{
            minHeight: 500,
            width: "100%"
          }}
        >
          <div className="right">
            <Button waves="light" className="lighten-4">
              Add Sprint <Icon>add</Icon>
            </Button>
          </div>
          <br />
          <br />
          {sprintList.map((s, i) => (
            <SprintBoardHeader sprint={s} addbut={add} /> 
          ))}
        </div>
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
