/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from "react";

import "./custom-modal.styles.css";

import CustomButton from "../custom-button/custom-button.component";

const CustomLightboxModal = ({
  labelledBy,
  headingText,
  children,
  closeModal,
  describedBy,
  isOpen,
}) => {
  const firstFocusableElementRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
        firstFocusableElementRef.current.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      firstFocusableElementRef.current.focus();

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen]);

  return (
    <>
      <div className="overlay"></div>
      <div
        role="dialog"
        id="empower-dialog"
        aria-labelledby={labelledBy}
        aria-modal="true"
        className="dialog"
        aria-describedby={describedBy}
      >
        <h2 id={labelledBy} className="dialog_label">
          {headingText}
        </h2>
        <div className="dialogContent" id={describedBy}>
          {children}
        </div>
        <div className="closeBtnContainer">
          <CustomButton
            btnText="Close"
            extraAttributes={{
              title: "Close Modal Buton",
              ref: firstFocusableElementRef,
            }}
            handleClick={closeModal}
          />
        </div>
      </div>
    </>
  );
};

export default CustomLightboxModal;
