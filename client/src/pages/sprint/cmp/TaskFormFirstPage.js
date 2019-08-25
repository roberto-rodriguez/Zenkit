import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "evergreen-ui";
import { TextField, SelectField } from "../../common/fields/";
import validateTaskFields from "./validateTaskFields";

const statusName = [
  { id: 1, name: "TO DO" },
  { id: 2, name: "DOING" },
  { id: 3, name: "REVIEW" },
  { id: 4, name: "DONE" }
]; // only for testing will remove it soon

const TaskFormFirstPage = props => {
  const { handleSubmit } = props || ""; 
     
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="title"
        type="text"
        component={TextField}
        label="Task Title"
      />
      <Field
        name="assigneeId"
        component={SelectField}
        label="Assignee"
        source="client"
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
  enableReinitialize: true,
  keepDirtyOnReinitialize: true,
  validateTaskFields
})(TaskFormFirstPage);
