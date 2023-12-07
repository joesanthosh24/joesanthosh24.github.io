/* eslint-disable react/prop-types */
import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ btnText, handleClick, extraAttributes }) => {
  return (
    <button className="btn" {...extraAttributes} onClick={handleClick}>
      {btnText}
    </button>
  );
};

export default CustomButton;
