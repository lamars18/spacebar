import React from "react";
import "./Footer.css";

const Footer = (props) => (
    <footer id="main-footer" className="text-center py-4">
        <div className="fluid-container">
            <div className="row app-bg-color-3 mx-0 my-4 py-3">
                <div className="col">
                    <div className="text-muted">&copy;<span id="year"> {props.year}</span> {props.orgName}</div>
                </div>
            </div>
        </div>
    </footer>
    );

export default Footer;
