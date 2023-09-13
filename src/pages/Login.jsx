import React from "react";
import google from "../Images/google.png";
import facebook from "../Images/facebook.png";
import github from "../Images/github.png";
import "../css/Login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <h1 className="signUp">SIGN UP</h1>
        <div className="sigin">
          <label htmlFor="" className="email">Email</label>
          <input type="email" name="" id=""  className="inputTag" placeholder="Enter a email"/>
          <label htmlFor="" className="password" >Password</label>
          <input type="password" name="" id="" className="inputTag" placeholder="Enter a password" />
          <button className="btn ">SIGN UP</button>
        </div>
        <div className="l">
          <div className="line"></div>
          <div className="or">OR</div>
        </div>
        <div className="account">
          <img src={google} alt="" className="icon" />
          <img src={facebook} alt="" className="icon" />
          <img src={github} alt="" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
