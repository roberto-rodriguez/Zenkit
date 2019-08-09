import React from "react";

export default ({ input, label, meta }) => {
  meta = meta || {};
  const { error, touched } = meta;
  return (
    <div>
      <label>{label}</label>
      <div className="text-field">
        <input {...input} />
      </div>
      <div className="error-text">{touched && error}</div>
    </div>
  );
};
