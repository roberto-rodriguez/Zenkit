const validateSprintFields = values => {
  const errors = {};
  if (!values.name) {
    errors.namesprint = "Required";
  }
  if (!values.startDate) {
    errors.datestart3 = "Required";
  }
  if (!values.endDate) {
    errors.endDate = "Required";
  } else if (values.endDate < values.startDate) {
    errors.endDate = "End Date After Date Star";
  }
  if (!values.hours) {
    errors.hours = "Required";
  } else if (isNaN(Number(values.hours))) {
    errors.hours = "Must be a number";
  }
 
  return errors;
};
export default validateSprintFields;
