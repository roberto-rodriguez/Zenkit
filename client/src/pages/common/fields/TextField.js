import React from "react";
import { TextInputField } from "evergreen-ui";
class TextField extends React.Component {
  render() {
    var { input, meta, hint, defaultValue, width, label, name } = this.props;
    meta = meta || {};
    const { error, touched } = meta;

    return (
      <TextInputField
        {...input}
        label={label}
        name={name}
        width={width || 320}
        value={defaultValue}
        hint={!(touched && error) && hint}
        validationMessage={touched && error}
      />
    );
  }
}

export default TextField;
