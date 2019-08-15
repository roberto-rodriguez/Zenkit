import React, { Component } from "react";
import DateTimePicker from "react-widgets/lib/DateTimePicker";

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
        <DateTimePicker
          {...input}
          data={data}
          onBlur={() => input.onBlur()}
          time={includeTime || false}
        />
        <div className="error-text">{touched && error}</div>
      </div>
    );
  }
}

// onChange={e => {
//   input.onChange(typeof e === "string" ? e : e[valueField]);
// }}

export default CalendarField;
