import React, { Component } from "react";
import Combobox from "react-widgets/lib/Combobox";
import { connect } from "react-redux";
import * as uiActions from "../../../actions/ui.actions";

{
  /*
  Source can be either an array with the data,
   or the name of the resource in the server

  <Field
name={"province"}
label={"Province"}
component={SelectField}
source={"provinces"}
/> */
}

class SelectField extends Component {
  componentDidMount() {
    var { source, data, fetchUIProp } = this.props;

    if (!data) {
      fetchUIProp(source);
    }
  }

  render() {
    const { input, label } = this.props;

    var data = this.props.data || {};
    var meta = this.props.meta || {};
    var config = this.props.config || {};
    var { error, touched } = meta;
    var { defaultValue } = config;
    var valueField = config.valueField || "id";
    var textField = config.textField || "name";

    return (
      <div>
        <label>{label}</label>
        <Combobox
          {...input}
          data={data}
          onChange={e => { 
            input.onChange(typeof e === "string" ? e : e[valueField]);
          }}
          valueField={valueField}
          textField={textField}
          onBlur={() => input.onBlur()}
          busy={false}
        />
        <div className="error-text">{touched && error}</div>
      </div>
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
