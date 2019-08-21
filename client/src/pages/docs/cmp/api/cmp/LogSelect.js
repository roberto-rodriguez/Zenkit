import React from "react";
import * as logActions from "../log.actions";
import { connect } from "react-redux";
import { Button, Heading, Pane, Text } from "evergreen-ui";
import { SelectField } from "../../../../common/fields/";

class LogList extends React.Component {
  componentDidMount() {
    this.props.listLogs();
  }

  render() {
    return (
      <Pane
        elevation={1}
        float="left"
        width={"95%"}
        margin={24}
        padding={20}
        display="flex"
        flexDirection="column"
      >
        <Heading justifyContent="center" style={{ width: "100%" }}>
          Nomenclator
        </Heading>
        <br />
        <Text size={300}>
          axios.get("/api/<b>:entity</b>/nomenclator?params=[params]")
        </Text>
        <br />
        <SelectField name={"log"} label="Log Name" source={"log"} />
      </Pane>
    );
  }
}

const mapStateToProps = ({ log }, ownProps) => {
  return {
    logList: Object.values(log.logList || {}) || []
  };
};

export default connect(
  mapStateToProps,
  logActions
)(LogList);
