import React from "react";
import "./Footer.css";

const Footer = (props) => (
    <footer id="main-footer" className="text-center p-4">
        <div className="container">
            <div className="row">
                <div className="col">
                    <small className="text-muted">&copy;<span id="year"> {props.year}</span> {props.orgName}</small>
                </div>
            </div>
        </div>
    </footer>
    );

export default Footer;
