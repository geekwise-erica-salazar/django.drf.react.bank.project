import React, { Component } from "react";
import { Link } from "react-router-dom";
import  { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

class Header extends Component {
    componentDidMount() {
    };
    static propTypes = {
      auth: PropTypes.object.isRequired,
      logout: PropTypes.func.isRequired
    };

    render(){
      const { isAuthenticated, user } = this.props.auth;
      
      const authLinks = (
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <span className="navbar-text mr-3">
            <strong>{user ? `Welcome ${user.username}` : ""}</strong>
          </span>
          <li className="nav-item">
            <button
              onClick={this.props.logout}
              className="nav-link btn btn-info btn-sm text-light mr-3"
            >
              Logout
            </button>
          </li>
          {/* <li>
            <Link to="/register" className="noTextDecorations">
              <button
                className="nav-link btn btn-info btn-sm text-light"
              >
                Register a user
              </button>
            </Link>
          </li> */}
        </ul>
      );
  
      
      const guestLinks = (
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      );
    
        return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">Home</Link>
            <Link to="/branch" className="navbar-brand">Branch</Link>
            <Link to="/account" className="navbar-brand">Account</Link>
            <Link to="/customer" className="navbar-brand">Customer</Link>
            <Link to="/product" className="navbar-brand">Product</Link>
            </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
            </nav>
        
           
        );
    }
}

  const mapStateToProps = state => ({
    auth: state.auth
  })

export default connect(
  mapStateToProps,
  { logout }
)(Header);