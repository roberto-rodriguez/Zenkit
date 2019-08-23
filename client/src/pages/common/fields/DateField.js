import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

class DateField extends Component {
  render() {
    const { input, label, defaultValue } = this.props;

    var meta = this.props.meta || {};
    var { error, touched } = meta;

    return (
      <div className="📦mb_24px 📦w_320px 📦box-szg_border-box">
        <label className="📦color_425A70 📦fnt-fam_b77syt 📦fnt-sze_14px 📦f-wght_500 📦ln-ht_20px 📦ltr-spc_-0-05px 📦dspl_block 📦mb_4px 📦box-szg_border-box">
          {label}
        </label>
        <DatePicker
          {...input}
          dateForm="MM/DD/YYYY"
          selected={input.value && input.value}
          onChange={time => {
            input.value = time ? time : null;
          }}
          onBlur={() => input.onBlur(input.value)}
        />
        <div className="error-text">{touched && error}</div>
      </div>
    );
  }
}
export default DateField;
