import React from "react";

const MessageSolidIcon = ({ ...props }) => {
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
      { ...props }
    >
      <path
        d="M4 24C3.24235 24.0007 2.50007 23.7863 1.85956 23.3816C1.21905 22.9769 0.706653 22.3986 0.382 21.714L13.522 13.66L16 15.172L18.477 13.659L31.617 21.712C31.2927 22.3968 30.7806 22.9754 30.1402 23.3804C29.4999 23.7855 28.7577 24.0004 28 24H4ZM20.394 12.488L32 5.394V19.6L20.394 12.488ZM0 5.394L11.606 12.486L0 19.6V5.394ZM0.1 3.11C0.301636 2.22649 0.797311 1.43763 1.50584 0.872617C2.21438 0.307608 3.09377 -6.09889e-05 4 9.06828e-09H28C28.9062 -6.09889e-05 29.7856 0.307608 30.4942 0.872617C31.2027 1.43763 31.6984 2.22649 31.9 3.11L16 12.828L0.1 3.11Z"
        fill="currentcolor"
      />
    </svg>
  );
};

export default MessageSolidIcon;
