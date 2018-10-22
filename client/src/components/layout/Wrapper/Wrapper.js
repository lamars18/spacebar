import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className="wrapper d-flex justify-content-end p-1 mt-auto">{props.children}</div>;

export default Wrapper;
