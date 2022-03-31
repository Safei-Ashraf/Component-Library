import React from "react";
import "./Center.css";

interface centerProps {
  children: JSX.Element[] | JSX.Element;
}

function Center({ children }: centerProps) {
  return <div className="center">{children}</div>;
}

export default Center;
