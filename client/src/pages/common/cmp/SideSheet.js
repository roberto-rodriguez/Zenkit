import React from "react";
import * as Evergreen from "evergreen-ui";

class SideSheet extends React.Component {
  state = {
    showSideSheet: true
  };

  onSave = () => {
    const { values } = this.props;
    alert(JSON.stringify(values));
  };

  render() {
    var { title, subTitle, children, isShown, onCloseComplete } = this.props;

    return (
      <Evergreen.SideSheet
        isShown={isShown}
        onCloseComplete={onCloseComplete}
        containerProps={{
          display: "flex",
          flex: "1",
          flexDirection: "column",
          paddingTop: 66
        }}
      >
        <Evergreen.Pane
          zIndex={10000}
          flexShrink={0}
          elevation={0}
          backgroundColor="white"
        >
          <Evergreen.Pane padding={16}>
            <Evergreen.Heading size={600}>{title}</Evergreen.Heading>
            <Evergreen.Paragraph size={400} style={{ marginTop: 5 }}>
              {subTitle}
            </Evergreen.Paragraph>
          </Evergreen.Pane>
        </Evergreen.Pane>
        <Evergreen.Pane
          flex="1"
          overflowY="scroll"
          background="tint1"
          padding={16}
        >
          {children}
        </Evergreen.Pane>
      </Evergreen.SideSheet>
    );
  }
}

export default SideSheet;
