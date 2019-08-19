import React from "react";
import { connect } from "react-redux";
import * as Evergreen from "evergreen-ui";
import * as uiActions from "../../../actions/ui.actions";

class SelectField extends React.Component {
  componentDidMount() {
    var { source, data, fetchUIProp } = this.props;

    if (!data) {
      fetchUIProp(source);
    }
  }

  render() {
    var {
      input,
      meta,
      hint,
      width,
      data,
      valueField,
      textField,
      defaultValue
    } = this.props;
    meta = meta || {};
    const { error, touched } = meta;

    return (
      <Evergreen.SelectField
        {...input}
        {...this.props}
        width={width || 320}
        value={defaultValue}
        hint={!(touched && error) && hint}
        validationMessage={touched && error}
      >
        <option />
        {(data || []).map((item, i) => (
          <option value={item[valueField || "id"]}>
            {item[textField || "name"]}
          </option>
        ))}
      </Evergreen.SelectField>
    );
  }
}

const mapStateToProps = ({ ui }, ownProps) => {
  var { source } = ownProps;

  var data = source;
  //If is String then is server side prop
  if (typeof source === "string") {
    data = ui[source];
  }

  return { data };
};

export default connect(
  mapStateToProps,
  uiActions
)(SelectField);
