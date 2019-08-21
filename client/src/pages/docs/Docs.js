import React from "react";
import { Pane, SidebarTab, Tablist, Paragraph } from "evergreen-ui";
import Page from "../common/cmp/Page";
import { CodingConventions, FormComponents, ApiDocs } from "./cmp";

const tabs = {
  introduction: "Introduction",
  coding: "Coding Conventions",
  form: "Form Components",
  api: "API Integration"
};

class Docs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex:
        (props.match && props.match.params && props.match.params.doc) ||
        "introduction",
      tabs
    };
  }

  render() {
    var { state } = this;
    return (
      <Page fullWidth>
        <Pane display="flex" flex={1} background="white" className="height100">
          <Tablist
            marginBottom={16}
            flexBasis={240}
            marginRight={24}
            className="blue lighten-5"
          >
            {Object.keys(state.tabs).map(tabKey => (
              <SidebarTab
                key={tabKey}
                id={tabKey}
                height={50}
                onSelect={() => this.setState({ selectedIndex: tabKey })}
                isSelected={tabKey === state.selectedIndex}
                aria-controls={`panel-${tabKey}`}
              >
                <h6 style={{ padding: 10 }}>{tabs[tabKey]} </h6>
              </SidebarTab>
            ))}
          </Tablist>
          <Pane padding={16} background="white" flex="1">
            {this.buildPane()}
          </Pane>
        </Pane>
      </Page>
    );
  }

  buildPane = () => {
    var { selectedIndex } = this.state;

    switch (selectedIndex) {
      case "coding":
        return <CodingConventions />;
      case "form":
        return <FormComponents />;
      case "api":
        return <ApiDocs />;
      default:
        return (
          <Pane
            key={selectedIndex}
            id={`panel-${selectedIndex}`}
            role="tabpanel"
            display={"block"}
          >
            <p class="flow-text">Panel {tabs[selectedIndex]}</p>
          </Pane>
        );
    }
  };
}

export default Docs;
