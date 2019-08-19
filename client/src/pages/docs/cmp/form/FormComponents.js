import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Heading, Button } from "evergreen-ui";
import { TextField, SelectField } from "../../../common/fields/";
import SideSheet from "../../../common/cmp/SideSheet";
import formSideSheetData from "./formSideSheetData";

const formFields = [
  { name: "firstName", label: "First Name" },
  { name: "contractType", label: "Contract Type" },
  { name: "provinces", label: "Provinces" }
];

let contractTypes = [
  { id: 1, name: "Training" },
  { id: 2, name: "Part Time" },
  { id: 3, name: "Full Time" }
];

class FormComponents extends React.Component {
  state = {
    showField: null
  };

  onSave = () => {
    const { values } = this.props;
    !this.state.showField && alert(JSON.stringify(values));
  };

  render() {
    var { props, state, setState } = this;
    const values = props.values || {};
    var fieldData = state.showField ? formSideSheetData[state.showField] : {};

    return (
      <div>
        <b>FormComponents</b>

        <br />
        <br />
        <form onSubmit={this.props.handleSubmit(this.onSave)}>
          <div class="row">
            <div class="col">
              <Field
                name={"firstName"}
                label="First Name"
                component={TextField}
                hint="This is a TextField."
                defaultValue={values["firstName"]}
                placeholder="Placeholder text here"
              />
            </div>
            <div class="col">{this.buildDetailsButton("textField")}</div>
          </div>

          <div class="row">
            <div class="col">
              <Field
                name={"contractType"}
                label="Contract Type"
                component={SelectField}
                hint="This is a SelectField with static data"
                source={contractTypes}
                defaultValue={values["contractType"]}
              />
            </div>
            <div class="col">
              {this.buildDetailsButton("selectStaticStatic")}
            </div>
          </div>
          <div class="row">
            <div class="col">
              <Field
                name={"provinces"}
                label="Provinces"
                component={SelectField}
                hint="This is a SelectField with dynamic data"
                source={"provinces"}
                defaultValue={values["province"]}
              />
            </div>
            <div class="col">
              {this.buildDetailsButton("selectStaticDynamic")}
            </div>
          </div>
          <button
            type="submit"
            className="teal btn-flat white-text centered left"
          >
            Save
          </button>
        </form>
        <SideSheet
          title={fieldData["title"]}
          subTitle={fieldData["subTitle"]}
          isShown={!!state.showField}
          onCloseComplete={() => this.setState({ showField: null })}
        >
          <Heading>{""}</Heading>
        </SideSheet>
      </div>
    );
  }

  buildDetailsButton = fieldName => (
    <Button
      marginTop={24}
      appearance="minimal"
      iconAfter="arrow-right"
      onClick={() => this.setState({ showField: fieldName })}
    >
      See Datails
    </Button>
  );
}

function validate(values, props, b) {
  debugger;
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
    values: form.docsForm && form.docsForm.values
  };
};

export default reduxForm({
  validate: validate,
  form: "docsForm"
})(connect(mapStateToProps)(withRouter(FormComponents)));
