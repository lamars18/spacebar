import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import "./Navigation.css"

const Navigation = props => {
    const { branding, showLoginInfo } = props;

    return (
        <nav id="main-nav" className="navbar navbar-expand-sm app-bg-color-black app-color-white px-5" >
            {/* <div className="container"> */}
                <a id="brand" href="/" className="navbar-brand m-0 px-4 py-2 app-color-white">
                    <i className="fas fa-rocket fa-lg mr-2 app-color-white"></i>
                    {branding}
                </a>
                <div className="ml-auto">
                    <ul className="navbar-nav mr-auto">

                        <li className="nav-item">
                            <Link to="/" className="nav-link app-color-white">
                                <i className="fas fa-home" /> Home
                            </Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link to="/about" className="nav-link app-color-white">
                                <i className="fas fa-question" /> About
                            </Link>
                        </li>

                        {/* vertical separator */}
                        <div className="vl ml-2 mr-2 app-color-white"></div>

                {showLoginInfo ? (
                    <React.Fragment>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link app-color-white">
                                {/* <div className="btn app-btn-primary"> */}
                                    <i className="fas fa-user-plus" /> Sign-up
                                {/* </div> */}
                            </Link>
                        </li>
                        <li className="nav-item ml-2">
                            <Link to="/login" className="nav-link app-color-white">
                                {/* <div className="btn app-btn-primary"> */}
                                    <i className="fas fa-sign-in-alt" /> Login
                                {/* </div> */}
                            </Link>
                        </li>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <li className="nav-item ml-2">
                            <Link to="/logout" className="nav-link app-color-white">
                                {/* <div className="btn app-btn-primary"> */}
                                    <i className="fas fa-sign-out-alt" /> Logout
                                {/* </div> */}
                            </Link>
                        </li>
                    </React.Fragment>                        
                )}
                    </ul>
                </div>
            {/* </div> */}
        </nav>
    );
};

Navigation.defaultProps = {
    branding: 'My App',
    showLoginInfo: true
};

Navigation.propTypes = {
    branding: PropTypes.string.isRequired,
    showLoginInfo: PropTypes.bool.isRequired
};

export default Navigation;