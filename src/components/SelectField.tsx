import React from "react";

const SelectField = () => {
  return (
    <label className="form_box">
      <select className="form_box-input" required>
        <option className="form_box-option" value="none">
          please select
        </option>
        <option className="form_box-option" value="main">
          Main
        </option>
        <option className="form_box-option" value="sub">
          Sub
        </option>
      </select>
      <span className="form_box-label">Hotel Type</span>
    </label>
  );
};

export default SelectField;
