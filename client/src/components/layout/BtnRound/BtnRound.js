import React from "react";
import "./BtnRound.css";

const BtnRound = props => (

  <button
    {...props}
  >
    <i className={props.icon} aria-hidden="true" />
  </button>
);

export default BtnRound;
