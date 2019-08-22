import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "evergreen-ui";
import { TextField, SelectField } from "../../common/fields/";
import validateTaskFields from "./validateTaskFields";

const assignee = [
  { id: 1, name: "Robert" },
  { id: 2, name: "Annier" },
  { id: 3, name: "Javier" },
  { id: 4, name: "Eduardo" },
  { id: 5, name: "Ismail" }
]; // only for testing will remove it soon

const statusName = [
  { id: 1, name: "TO DO" },
  { id: 2, name: "DOING" },
  { id: 3, name: "REVIEW" },
  { id: 4, name: "DONE" }
]; // only for testing will remove it soon

const TaskFormFirstPage = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        component={TextField}
        label="Task Title"
      />
      <Field
        name="assignee"
        component={SelectField}
        label="Assignee"
        source={assignee}
      />
      <Field
        name="status"
        component={SelectField}
        label="Status"
        source={statusName}
      />
      <div>
        <Button
          type="submit"
          iconAfter="arrow-right"
          height={32}
          appearance="primary"
          marginTop={16}
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "taskForm", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validateTaskFields
})(TaskFormFirstPage);
