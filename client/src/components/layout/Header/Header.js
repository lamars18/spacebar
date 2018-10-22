import React from "react";
import "./Header.css";

const Header = (props) => (
  <header id="page-header" className="text-center mb-0 py-3 app-bg-color-primary app-color-white">
    <h3>
      <i className="fas fa-rocket app-color-1 fa-lg"></i> {props.title}
    </h3>
    { props.message ? <div className="message">{props.message}</div> : null}
  </header>
);

export default Header;

