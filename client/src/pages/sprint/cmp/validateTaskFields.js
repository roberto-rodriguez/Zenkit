const validateTaskFields = values => {
  const errors = {};  
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.assignee) {
    errors.assignee = "Required";
  }
  if (!values.status) {
    errors.status = "Required";
  }
  if (!values.flag) {
    errors.flag = "Required";
  }
  if (!values.estimatedHours) {
    errors.estimatedHours = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  return errors;
};

export default validateTaskFields;
