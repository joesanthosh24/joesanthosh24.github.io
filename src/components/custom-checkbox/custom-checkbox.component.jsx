/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

import "./custom-checkbox.styles.css";

const CustomCheckbox = ({ label, forAttr, handleChecked }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);

    handleChecked(forAttr);
  };

  const handleChangeWithKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleChange();
    }
  };

  return (
    <li className="d-flex items-center pb-2">
      <div
        role="checkbox"
        aria-checked={isChecked}
        className="checkbox"
        type="checkbox"
        id={forAttr}
        checked={isChecked}
        onChange={handleChange}
        onKeyDown={handleChangeWithKey}
        tabIndex={0}
      >
        {label}
      </div>
    </li>
  );
};

export default CustomCheckbox;
