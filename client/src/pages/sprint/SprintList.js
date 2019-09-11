import React, { Component } from "react";
import "./SprintBoard.scss";
import Page from "../common/cmp/Page";
import * as sprintActions from "./sprint.actions";
import { connect } from "react-redux";
//import { NavLink } from "react-router-dom";
//import List from "./cmp/List";
import { Pane, Button } from "evergreen-ui";
import { reduxForm, Field } from "redux-form";
import AddSprintForm from "./cmp/AddSprintForm";
import SelectField from "../common/fields/SelectField";

class SprintList extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
      selectvalue: 0
    };
    this.SprintAdd = this.SprintAdd.bind(this);
  }

  componentDidMount() {
    var { sprintList, listSprints } = this.props;

    if (!sprintList) {
      listSprints();
    }
  }

  SprintAdd = show => {
    this.setState({
      isShown: show
    });
  };

  openSp = () => {
    this.props.history.push("/sprint/" + this.props.values.sprint);
  };

  render() {
    return (
      <div>
        <Page></Page>
        <br></br>
        <div
          className="row"
          style={{ display: this.state.isShown ? "none" : "" }}
        >
          <form onSubmit={this.openSp}>
            <div className="col ">
              <Pane marginLeft={100}>
                <Field
                  name={"sprint"}
                  component={SelectField}
                  label="Sprint"
                  source="sprint"
                />
              </Pane>
              <Button
                type="submit"
                iconBefore="edit"
                height={32}
                appearance="primary"
                marginTop={24}
                marginLeft={200}
              >
                Open Sprint
              </Button>
            </div>
          </form>
          <div className="col ">
            <Button
              type="submit"
              iconBefore="add"
              height={32}
              appearance="primary"
              marginTop={24}
              marginLeft={500}
              onClick={() => this.SprintAdd(true)}
            >
              Add Sprint
            </Button>
          </div>
        </div>
        {this.state.isShown ? <AddSprintForm /> : ""}
      </div>
    );
  }
}

function mapStateToProps({ sprint, form }, props) {
  const { open, list } = sprint;

  return {
    sprintList: list ? Object.values(list) : null,
    values: form.sprintForm && form.sprintForm.values
  };
}

export default reduxForm({
  form: "sprintForm",
  // enableReinitialize: true,
  //keepDirtyOnReinitialize: true,
  initialValues: { sprint: 1 }
})(
  connect(
    mapStateToProps,
    sprintActions
  )(SprintList)
);
