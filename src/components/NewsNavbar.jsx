import React from "react";
import "../css/NewsNavbar.css";
import { Link ,NavLink} from "react-router-dom";
const NewsNavbar = () => {
  return (
    <>
      <div className="newsheader">
        <span className="newsTitle">N E W S</span>
        <ul className="listElements">
          <li>
          <NavLink to="/news/home" activeClassName="active-link"> 
            <div className="navline">Home</div>
            <div className="nav-link"></div>
            </NavLink>
          </li>
          <li>
            <Link to="/news/science">
              <div className="navline">Science</div>
              <div className="nav-link"></div>
            </Link>
          </li>

          <li>
            <Link to='/news/sports'>
            <div className="navline">Sports</div>
            <div className="nav-link"></div>
            </Link>
          </li>
          <li>
            <Link to='/news/technology'>
            <div className="navline">Technology</div>
            <div className="nav-link"></div>
            </Link>
          </li>
          <li>
            <Link to='/news/entertainment'>
            <div className="navline">Entertainment</div>
            <div className="nav-link"></div>

            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NewsNavbar;
