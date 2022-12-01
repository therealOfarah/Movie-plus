import React from "react";
import logo1 from "../../images/logo1.jpg";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
type Props={
  handleLogout:()=>void;
  user:any;
}
function NavBarTop(props:Props) {
  const profile = props.user
  const logout= props.handleLogout
  return (
    <nav className="navbar navbar-expand-lg " >
      <div className="container-fluid">
      <Link className="navbar-brand"  to='/'>
          <img
            src={logo1}
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Movie+
      </Link>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {
      profile === (undefined || null) ?
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/show">Shows</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
            </li>
          </ul>
          :
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">Movies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/show">Shows</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/account">Account</Link>
            </li>
            <li className="nav-item">
              <button className="nav-button" onClick={logout}>logout</button>
            </li>
          </ul>
}
        </div>
      </div>
    </nav>
  );
}

export default NavBarTop;
