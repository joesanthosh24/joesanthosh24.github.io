/* eslint-disable react/prop-types */
import React from "react";
import "./custom-switch.styles.css";

const CustomSwitch = ({ toggleChecked, labelText, toggleStatus }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      toggleChecked(!toggleStatus);
    }
  };

  return (
    <div
      role="switch"
      aria-checked={toggleStatus}
      tabIndex="0"
      onClick={() => toggleChecked(!toggleStatus)}
      onKeyDown={handleKeyDown}
    >
      <span className="switch">
        <span></span>
      </span>
      <span className="on" aria-hidden="true"></span>
      <span className="off" aria-hidden="true"></span>
      <span className="label">{labelText}</span>
    </div>
  );
};

export default CustomSwitch;
