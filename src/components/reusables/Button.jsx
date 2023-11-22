import React from "react";

const Button = (props) => {
  const { label, inverse = false, style = {}, onClick = () => {} } = props;
  let inverseStyle = inverse
    ? {
        border: "1px solid #34ABEF",
        backgroundColor: "#ffffff",
        color: "#34ABEF",
      }
    : {};

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "#34ABEF",
        color: "#ffffff",
        padding: "10px 25px",
        fontWeight: "bold",
        borderRadius: "11px",
        fontSize: "17px",
        border: "0px solid #34ABEF",
        cursor: "pointer",
        ...inverseStyle,
        ...style,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
