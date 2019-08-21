import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Button, Heading, Pane, Text } from "evergreen-ui";
import { TextField, TextAreaField } from "../../../../common/fields";
import * as logActions from "../log.actions";

const formFields = [
  { name: "name", label: "Name" },
  { name: "description", label: "Description" }
];

class LogForm extends React.Component {
  onSave = () => {
    var values = this.props.values || {};

    this.props.saveLog(values, savedObj => {
      this.props.change("id", savedObj.id);
    });
  };

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
          Save / Update
        </Heading>
        <br />
        <Text size={300}>
          axios.post("/api/<b>:entity</b>/save", data)
        </Text>
        <br />
        <form onSubmit={this.props.handleSubmit(this.onSave)}>
          <Field
            name={"name"}
            label="Name"
            component={TextField}
            hint="Enter Log Name."
            placeholder="Log name"
          />
          <Field
            name={"description"}
            label="Description"
            component={TextAreaField}
            placeholder="Log description"
          />
          <button
            type="submit"
            className="teal btn-flat white-text centered left"
          >
            Save
          </button>
        </form>
      </Pane>
    );
  }
}

function validate(values, props, b) {
  const errors = {};
  formFields.forEach(({ name, label }) => {
    if (!values[name]) {
      errors[name] = label + " is required";
    }
  });

  return errors;
}

const mapStateToProps = ({ form }, ownProps) => {
  return {
    values: form.logForm && form.logForm.values
  };
};

export default reduxForm({
  validate: validate,
  form: "logForm",
  enableReinitialize: true
})(
  connect(
    mapStateToProps,
    logActions
  )(LogForm)
);
