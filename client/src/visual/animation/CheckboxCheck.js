import React from "react";

function CheckboxCheck(props) {
  return (
    <svg
      className={`checkbox ${props.delay}`}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
    >
      <g transform="translate(22 30)">
        <path
          data-name="layer2"
          fill="none"
          stroke="#2cdb2f"
          style={{
            strokeLinejoin: "round",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            strokeWidth: "4",
          }}
          d="M15.74 30l12 14 34-42"
        ></path>
        <path
          data-name="layer1"
          d="M53.443 32A26.002 26.002 0 1 1 27.75 10a25.914 25.914 0 0 1 10 1.993"
          fill="none"
          stroke="#2cdb2f"
          strokeWidth="2"
          style={{
            strokeLinejoin: "round",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            strokeWidth: "4",
          }}
        ></path>
      </g>
    </svg>
  );
}

export default CheckboxCheck;
