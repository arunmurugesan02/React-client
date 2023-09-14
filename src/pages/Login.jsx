import React from "react";
import googleimg from "../Images/google.png";
import facebook from "../Images/facebook.png";
import github from "../Images/github.png";
import "../css/Login.css";
const Login = () => {

 const google =()=>{
  window.open('http://localhost:5000/auth/google','_self')
 }

  return (
    <div className="login">
      <div className="wrapper">
        <h1 className="signUp">SIGN UP</h1>
        <div className="sigin">
          <label htmlFor="" className="email">
            Email
          </label>
          <input
            type="email"
            name=""
            id=""
            className="inputTag"
            placeholder="Enter a email"
          />
          <label htmlFor="" className="password">
            Password
          </label>
          <input
            type="password"
            name=""
            id=""
            className="inputTag"
            placeholder="Enter a password"
          />
          <button className="btn ">SIGN UP</button>
        </div>
        <div className="l">
          <div className="line"></div>
          <div className="or">OR</div>
        </div>
        <div className="account">
          <div className="loginButton google" onClick={google}>
            <img src={googleimg} alt="" className="icon" /> Google
          </div>
          <div className="loginButton facebook" onClick={google}>
          <img src={facebook} alt="" className="icon" /> Facebook
          </div>
          <div className="loginButton github" onClick={google}>
          <img src={github} alt="" className="icon" />Github
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
