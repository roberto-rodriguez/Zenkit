import React from "react";
import { Heading, Pane, Text } from "evergreen-ui";

class LogLoad extends React.Component {
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
          Load
        </Heading>
        <br />
        <Text size={300}>
          axios.get("/api/<b>:entity</b>/load/<b>:id</b>")
        </Text>
        <br />
        <Text size={300}>or</Text>
        <br />
        <Text size={300}>
          axios.get("/api/<b>:entity</b>/load/<b>[params]</b>")
        </Text>
      </Pane>
    );
  }
}

export default LogLoad;
