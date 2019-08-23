import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "evergreen-ui";
import { TextField, SelectField } from "../../common/fields/";
import PropTypes from "prop-types";

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

const TaskFilterForm = props => {
    const { handleSubmit } = props;
  
    return (
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <Field
          name="title"
          type="text"
          component={TextField}
          label="Task"
        />
        {/* TODO: Select sprints from state */}
        <Field
          name="sprint"
          component={SelectField}
          label="Sprint"
          source={[{id:1, name: 'Sprint'}]}
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
          <Button
            type="submit"
            iconBefore="filter"
            height={32}
            appearance="primary"
            marginTop={24}
            marginLeft={24}
          >
            Filter
          </Button>
        </form>
    );
  };
  
  TaskFilterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  export default reduxForm({
    form: "taskFilterForm", 
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate: null
  })(TaskFilterForm);