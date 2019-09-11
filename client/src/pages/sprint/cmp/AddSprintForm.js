import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as sprintActions from "../sprint.actions";
import { reduxForm, Field } from "redux-form";
import { Pane, Button } from "evergreen-ui";
import validateSprintFields from "./validateSprintFields";
import { TextField, DateField } from "../../common/fields";

class AddSprintForm extends Component {
  constructor() {
    super();

    this.onSubmitAddSprint = this.onSubmitAddSprint.bind(this);
  }

  onSubmitAddSprint = () => {
    const { values } = this.props;
    const formValues = Object.assign(values);
    this.props.saveSprint(formValues);
  };

  render() {
    return (
      <div>
        <br />
        <Pane marginLeft={450}>
          <form onSubmit={this.onSubmitAddSprint}>
            <div className="row">
              <div className="col s3">
                <Field
                  name="name"
                  label="Name"
                  component={TextField}
                  placeholder="Placeholder text here"
                />
              </div>
            </div>
            <div className="row">
              <div className="col s3">
                <Field
                  name="startDate"
                  label="Start Date"
                  component={DateField}
                  placeholder="Placeholder text here"
                />
              </div>
            </div>
            <div className="row">
              <div className="col s3">
                <Field
                  name="endDate"
                  label="End Date"
                  component={DateField}
                  placeholder="Placeholder text here"
                />
              </div>
            </div>
            <div className="row">
              <div className="col s3">
                <Field
                  name="hours"
                  label="Estimated Hours"
                  component={TextField}
                  placeholder="Placeholder text here"
                />
              </div>
            </div>
            <div className="row">
              <Button
                type="submit"
                disabled={!this.props.valid}
                iconBefore="add"
                height={32}
                appearance="primary"
                marginTop={24}
                marginLeft={10}
              >
                Add Sprint
              </Button>
            </div>
          </form>
        </Pane>
      </div>
    );
  }
}

AddSprintForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = ({ form }) => {
  return {
    values: form.addSprintForm && form.addSprintForm.values
  };
};

export default reduxForm({
  validate: validateSprintFields,
  form: "addSprintForm",
  initialValues: { id: null, active: false }
})(
  connect(
    mapStateToProps,
    sprintActions
  )(withRouter(AddSprintForm))
);
