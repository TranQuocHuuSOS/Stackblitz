import React from "react";
import "./inputNumber.css";

const InputNumber = ({ value, onChange }) => {
  return (
    <div className="input-number-container">
      <div className="input-number-row">
        <span className="input-title">Points:</span>
        <input
          type="text"
          value={value}
          onChange={onChange}
          className="input-field"
          placeholder="Enter any number here"
        />
      </div>
    </div>
  );
};

export default InputNumber;
