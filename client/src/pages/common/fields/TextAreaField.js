import React from "react";
import { Textarea, Label, Pane } from "evergreen-ui";

class TextAreaField extends React.Component {
  render() {
    var { input, meta, width, label, name } = this.props;
    meta = meta || {};
    const { error, touched } = meta;

    return (
      <Pane>
        <Label marginBottom={4} display="block">
          {label}
        </Label>
        <Textarea
          {...input}
          {...this.props}
          name={name}
          width={width || 640}
          isInvalid={touched && !!error}
        />
      </Pane>
    );
  }
}

export default TextAreaField;
