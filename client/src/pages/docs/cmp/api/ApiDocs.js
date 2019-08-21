import React from "react";
import { Heading, Pane, Text, Button } from "evergreen-ui";
import LogForm from "./cmp/LogForm";
import LogSelect from "./cmp/LogSelect";
import LogList from "./cmp/LogList";
import LogLoad from "./cmp/LogLoad";
import { connect } from "react-redux";
import * as logActions from "./log.actions";

class ApiDocs extends React.Component {
  render() {
    return (
      <div>
        <LogForm />
        <br />
        <LogSelect />
        <br />
        <LogLoad />
        <br />
        <LogList />
      </div>
    );
  }
}

export default connect(
  null,
  logActions
)(ApiDocs);
