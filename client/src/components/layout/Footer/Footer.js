import React from "react";
import "./Footer.css";

const Footer = (props) => (
    <footer id="main-footer" className="text-center py-2 app-bg-color-darkgray">
        <div className="col">
            <small className="app-color-1">
                &copy;<span id="year"> {props.year}</span> {props.orgName}
            </small>
        </div>
    </footer>
);

export default Footer;
