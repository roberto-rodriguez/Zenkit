/* eslint-disable no-this-before-super */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./SprintBoard.scss";
import Page from "../common/cmp/Page";
import * as sprintActions from "./sprint.actions";
import { connect } from "react-redux";
import SprintBoardHeader from "./cmp/SprintBoardHeader";
import { Button, Icon, Modal } from "react-materialize";
import AddAction from "./AddAction";

class SprintList extends Component {
  componentDidMount() {
    var { list, listSprints } = this.props;

    if (!list) {
      listSprints();
    }
  }

  render() {
    let button = 1;
    let sprintList = this.props.sprintList || [];
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
            <Button
              waves="light"
              href="#modal1"
              className="lighten-4 modal-trigger"
            >
              Add Sprint <Icon className="center">add</Icon>
            </Button>

            <Modal header="Add Sprint" id="modal1" actions>

              <AddAction />
              <div className="modal-footer">
              <Button className="modal-close" waves="light">
                  INSERT<Icon>child_care</Icon>
                </Button>{' '}
                <Button className="modal-close" waves="light">
                  Close<Icon>directions_bike</Icon>
                </Button>
              </div>
            </Modal>
          </div>
          <br />
          <br />
          {sprintList.map((s, i) => (
            <SprintBoardHeader sprint={s} disablebutton={button} />
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
