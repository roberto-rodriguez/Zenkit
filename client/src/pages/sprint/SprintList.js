/* eslint-disable no-this-before-super */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
    console.log(this.state.modal)
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
          <div className="right">
            <button className=" waves-effect waves-light btn modal-trigger ">Add Sprint</button>
          </div>
          <br />
          <br />
          {sprintList.map((s, i) => (
            <div key={i}>
              <div className="card blue-grey darken-1 ">
                <div className="card-content white-text ">
                  <div className="row">
                    <div className="col s6 blue-grey darken-1">
                      <span className="card-title">
                        <NavLink to={"/sprint/" + s.id}>{s.name}</NavLink>
                      </span>
                      <p>hours : {s.hours}</p>
                      <p>loggedHours : {s.loggedHours}</p>
                      <p>completted : {s.completted}</p>
                    </div>
                    <br />
                    <br />
                    <div className=" col s4 offset-s2 blue-grey darken-1 right">
                      <p>
                        <label>
                          <input
                            type="checkbox"
                            defaultChecked={s.active}
                            disabled="disabled"
                          />
                          <span>{!s.active ? "UNNACTIVE" : "ACTIVE"}</span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-action">
                  <a>Start Date : {s.startDate}</a>
                  <a>End Date : {s.endDate}</a>
                </div>
              </div>
            </div>
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
