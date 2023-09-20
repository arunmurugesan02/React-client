import React from "react";
import "../css/Home.css";
import newsLogo from "../Images/news.jpeg";
import { Link } from "react-router-dom";


const Home = ({ user }) => {
  console.log(user);
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="news">
            
            <Link to="/news/home" style={{ textDecoration: "none" }}>
              <img src={newsLogo} alt="" className="images" />
              <h1 className="title">News</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
