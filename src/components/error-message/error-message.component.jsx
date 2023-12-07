/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";

import "./error-message.styles.css";

const ErrorMessage = ({ errors }) => {
  const phoneNumRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    if (errors.phone_number) {
      phoneNumRef.current.focus();
    } else if (errors.email) {
      emailRef.current.focus();
    }
  }, [errors.phone_number, errors.email]);

  return (
    <div
      hidden={!errors.email && !errors.phone_number}
      className="errorContainer container ph-2 pt-2 mb-5"
    >
      <ul className="pl-3 pt-2">
        {errors.phone_number && (
          <li>
            <a ref={phoneNumRef} href="#phone-number">
              {errors.phone_number}
            </a>
          </li>
        )}
        {errors.email && (
          <li>
            <a ref={emailRef} href="#email">
              {errors.email}
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default ErrorMessage;
