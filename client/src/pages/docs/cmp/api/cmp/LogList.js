import React from "react";
import * as logActions from "../log.actions";
import { connect } from "react-redux";
import { Button, Heading, Pane, Text } from "evergreen-ui";

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
          List
        </Heading>
        <br />
        <Text size={300}>
          axios.get("/api/<b>:entity</b>/list?params=[params]")
        </Text>
        <br />
        <Heading justifyContent="center" style={{ width: "100%" }}>
          Delete
        </Heading>
        <br />
        <Text size={300}>
          axios.get("/api/<b>:entity</b>/delete/<b>:id</b>")
        </Text>
        <br />
        {this.props.logList.map((log, i) => (
          <div class="card blue-grey darken-1" key={i}>
            <div class="card-content white-text">
              <span class="card-title">{log.name}</span>
              <p>{log.description}</p>
            </div>
            <div class="card-action">
              <a
                onClick={() => this.props.deleteLog(log.id)}
                style={{ cursor: "pointer" }}
              >
                Delete
              </a>
            </div>
          </div>
        ))}
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
