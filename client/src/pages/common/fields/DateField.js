import React, { Component } from "react";
// import DayPickerInput from "react-day-picker/DayPickerInput";
// <DayPickerInput {...input}/>
class DateField extends Component {
  render() {
    const { input, label, includeTime } = this.props;

    var meta = this.props.meta || {};
    var { error, touched } = meta;

    return (
      <div className="📦mb_24px 📦w_320px 📦box-szg_border-box">
        <label className="📦color_425A70 📦fnt-fam_b77syt 📦fnt-sze_14px 📦f-wght_500 📦ln-ht_20px 📦ltr-spc_-0-05px 📦dspl_block 📦mb_4px 📦box-szg_border-box">
          {label}
        </label>
       
        <div className="error-text">{touched && error}</div>
      </div>
    );
  }
}

export default DateField;
