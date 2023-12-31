import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
  const logoutChange = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="logo">
          <div className="arun">Social</div>
          <div className="app">Networks</div>
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img 
            src={user.photos[0].value}
            alt=""
             className="avatar" />
          </li>
          <li className="listItem">{user.displayName} </li>
          <li className="listItem  btnn logout" onClick={logoutChange}>
            Logout
          </li>
        </ul>
      ) : (
        <Link to="/login" className="btnn loginn">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
