import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "evergreen-ui";
import { TextField, SelectField, TextAreaField } from "../../common/fields/";
import validateTaskFields from "./validateTaskFields";

const flags = [
  { id: 1, name: "Open Question" },
  { id: 2, name: "Answered Question" },
  { id: 3, name: "Open Notification" },
  { id: 4, name: "Seen Notification" }
]; // only for testing will remove it soon

const TaskFormSecondPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="flag" component={SelectField} label="Flag" source={flags} />
      <Field
        name="estimatedHours"
        type="text"
        component={TextField}
        label="Estimated Hours"        
      />
      <Field
        name="description"
        component={TextAreaField}
        label="Description"
        width={430}
      />
      <div>
        <Button
          type="button"
          onClick={previousPage}
          iconBefore="arrow-left"
          height={32}
          appearance="primary"
          marginRight={16}
          marginTop={16}
        >
          Previous
        </Button>
        <Button
          type="submit"
          disabled={pristine || submitting}
          height={32}
          appearance="primary"
          marginTop={16}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
export default reduxForm({
  form: "taskForm", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validateTaskFields
})(TaskFormSecondPage);
