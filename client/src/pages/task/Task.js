import React, { Component } from "react";
import "./Task.scss";
import Page from "../common/cmp/Page";

export default class Task extends Component {
  render() {
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
            width: "100%",
            backgroundColor: "grey"
          }}
        />
      </Page>
    );
  }
}
