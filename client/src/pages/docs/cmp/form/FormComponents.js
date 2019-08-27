import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Button } from "evergreen-ui";
import {
  TextField,
  SelectField,
  TextAreaField,
  DateField
} from "../../../common/fields/";
import SideSheet from "../../../common/cmp/SideSheet";
import formSideSheetData from "./formSideSheetData";

const formFields = [
  { name: "firstName", label: "First Name" },
  { name: "contractType", label: "Contract Type" },
  // { name: "provinces", label: "Provinces" },
  { name: "description", label: "Description" },
  { name: "creationDate", label: "Creation Date" }
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
 

  onSave = (values) => { 
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
          <div className="row">
            <div className="col">
              <Field
                name={"firstName"}
                label="First Name"
                component={TextField}
                hint="This is a TextField."
                defaultValue={values["firstName"]}
                placeholder="Placeholder text here"
              />
            </div>
            <div className="col">{this.buildDetailsButton("textField")}</div>
          </div>

          <div className="row">
            <div className="col">
              <Field
                name={"contractType"}
                label="Contract Type"
                component={SelectField}
                hint="This is a SelectField with static data"
                source={contractTypes}
                defaultValue={values["contractType"]}
              />
            </div>
            <div className="col">
              {this.buildDetailsButton("selectStaticStatic")}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Field
                name={"provinces"}
                label="Provinces"
                component={SelectField}
                hint="This is a SelectField with dynamic data"
                source={"provinces"}
                defaultValue={values["province"]}
              />
            </div>
            <div className="col">
              {this.buildDetailsButton("selectStaticDynamic")}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Field
                name={"creationDate"}
                label="Creation Date"
                component={DateField}
                placeholder="Placeholder text here"
              />
            </div>
            <div className="col">{this.buildDetailsButton("dateField")}</div>
          </div>
          <div className="row">
            <div className="col">
              <Field
                name={"description"}
                label="Description"
                component={TextAreaField}
                defaultValue={values["description"]}
                placeholder="Placeholder text here"
              />
            </div>
            <div className="col">
              {this.buildDetailsButton("textAreaField")}
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
          <div className="section">
            <a
              href={fieldData["url"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              {fieldData["url"]}
            </a>
          </div>
          <div className="section">
            <h5>Props</h5>
            <ul>
              {(fieldData["props"] || []).map((prop, i) => (
                <li key={i}>
                  <span>
                    <b>{prop["name"] + ": "}</b>
                    {prop["description"]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
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
