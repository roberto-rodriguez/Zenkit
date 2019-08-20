import React, { Component } from "react";
import "./SprintBoard.scss";
import Page from "../common/cmp/Page";
import * as sprintActions from "./sprint.actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import List from './List';
import { Pane, Button , Dialog} from "evergreen-ui";



class SprintList extends Component {
    constructor(){
      super()
      this.state = {
        isShown : false
      }
    }

  componentDidMount() {
    var { list, listSprints } = this.props;

    if (!list) {
      listSprints();
    }
  }

  SprintAdd(){
    this.setState({
      isShown :  true
    });
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

      <Pane>
      <Button
        children = "Add"
        iconBefore = "add"
        appearance = "primary"
        onClick = {() => this.SprintAdd() }
      />

      <Dialog
         isShown={this.state.isShown}
         title="Insert Sprint"
         onCloseComplete={() => this.setState({ isShown: false })}
       >
      </Dialog>
      </Pane>

        <div
          className="section"
          style={{
            minHeight: 500,
            width: "100%"
          }}
        >
          {sprintList.map((s, i) => (
            <List
              id = {s.id}
              name = {s.name}
              active = {s.active}
              startdate = {s.startDate}
              enddate = {s.endDate}
              estimatedhours = {s.hours}
              loggedhours = {s.loggedHours}
              completed = {s.completed}
              />
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
