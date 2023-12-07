/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";

import "./thank-you-message.styles.css";

const Message = ({ message }) => {
  const containerRef = useRef();

  useEffect(() => {
    if (message) {
      containerRef.current.focus();
    }
  }, [message]);

  return (
    <div
      tabIndex={0}
      ref={containerRef}
      hidden={!message}
      aria-hidden={!message}
      className="thankYouMessageContainer container ph-2 pt-2 mb-5"
    >
      <p>{message}</p>
    </div>
  );
};

export default Message;
