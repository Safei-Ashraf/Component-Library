import React from "react";
import "./Input.css";

interface InputProps {
  size: string;
  placeHolder: string;
}

function Input({ size = "medium", placeHolder, ...rest }: InputProps) {
  return (
    <>
      <input
        type="text"
        className={`input ${size} `}
        placeholder={placeHolder}
      />
    </>
  );
}

export default Input;
