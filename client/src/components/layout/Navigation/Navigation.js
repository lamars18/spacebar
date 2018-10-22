import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authentication'
import "./Navigation.css"

class Navigation extends Component {
    onLogoutClick(e) {
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <nav id="main-nav" className="navbar navbar-expand-sm app-bg-color-3 py-0 px-5 app-color-1">
                <div
                    onClick={this.onLogoutClick.bind(this)}
                    className="nav-link"
                >
                    <Link to="/login" className="nav-link app-color-1" id = "logout">
                        <div className="btn app-btn-primary">
                            <i className="fas fa-user-minus" /> Logout
                                </div>
                    </Link>
                </div>
            </nav>

        );

        const guestLinks = (
            <nav id="main-nav" className="navbar navbar-expand-sm app-bg-color-3 py-0 px-5 app-color-1">

                <Link to="/about" className="nav-link app-color-1" id="about">
                    <div className="btn app-btn-primary">
                        <i className="fas fa-question" /> About
                            </div>
                </Link>
                <Link to="/login" className="nav-link app-color-1">
                    <div className="btn app-btn-primary">
                        <i className="fas fa-sign-in-alt" /> Login
                                </div>
                </Link>
                <Link to="/register" className="nav-link app-color-1">
                    <div className="btn app-btn-primary">
                        <i className="fas fa-user-plus" /> Sign-up
                                </div>
                </Link>
            </nav>
        );
        return (
            <nav id="main-nav" className="navbar navbar-expand-sm app-bg-color-3 py-0 px-0 app-color-1">
                <div className="container">

                    {isAuthenticated ? authLinks : guestLinks}

                    {/* <a href="/">Home</a> */}
                </div>

            </nav>


        )
    }
}

Navigation.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navigation);