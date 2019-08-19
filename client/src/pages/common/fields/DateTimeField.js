import React, { Component } from "react";

class CalendarField extends Component {
  render() {
    const { input, label, includeTime } = this.props;

    var data = this.props.data || {};
    var meta = this.props.meta || {};
    var config = this.props.config || {};
    var { error, touched } = meta;
    var { defaultValue } = config;

    return (
      <div>
        <label>{label}</label>

        <div className="error-text">{touched && error}</div>
      </div>
    );
  }
}

// onChange={e => {
//   input.onChange(typeof e === "string" ? e : e[valueField]);
// }}

export default CalendarField;
