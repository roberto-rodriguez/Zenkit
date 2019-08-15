import React, { Component } from "react";
import "./Profile.scss";
import Page from "../common/cmp/Page";
import { TextField, SelectField } from "../common/fields/";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import * as profileActions from "./profile.actions";

let contract = [
  { id: 1, name: "Training" },
  { id: 2, name: "Part Time" },
  { id: 3, name: "Full Time" }
];

class Profile extends Component {
  state = {};

  onSave = () => {
    const { saveProfile, values } = this.props;

    //saveProfile(values, () => this.setState({ invalidCredentials: false }));

    alert(JSON.stringify(values));
  };
  render() {
    return (
      <Page>
        <div
          className="section"
          style={{ height: 250, width: "100%", backgroundColor: "grey" }}
        />
        <br />
        <form onSubmit={this.props.handleSubmit(this.onSave)}>
          <div
            className="section row"
            style={{
              minHeight: 100,
              width: "100%",
              backgroundColor: "white"
            }}
          >
            <div className="col l3">
              <Field label={"Name"} component={TextField} name={"name"} />
            </div>
            <div className="col l3">
              <Field
                name={"province"}
                label={"Province"}
                component={SelectField}
                source={"provinces"}
              />
            </div>
            <div className="col l3">
              <Field
                name={"contract"}
                label={"Contract"}
                component={SelectField}
                source={contract}
              />
            </div>
            <div className="col l3">
              {/**  <DateTimeField
                name={"bornDate"}
                label={"Born Date"}
                component={DateTimeField}
              /> */}
            </div>
          </div>
          <br />
          <button
            type="submit"
            className="teal btn-flat white-text centered right"
          >
            Save
          </button>
        </form>
      </Page>
    );
  }
}

function validate(values) {
  const errors = {};

  // formFields.forEach(({ name, label }) => {
  //   if (!values[name]) {
  //     errors[name] = label + " is required";
  //   }
  // });

  return errors;
}

const mapStateToProps = ({ form }, ownProps) => {
  return {
    values: form.profileForm && form.profileForm.values
  };
};

export default reduxForm({
  validate: validate,
  form: "profileForm"
})(
  connect(
    mapStateToProps,
    profileActions
  )(withRouter(Profile))
);
