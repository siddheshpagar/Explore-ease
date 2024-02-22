import React, { useState } from "react";
import "../Css/Login.css";
import { sendLoginData } from "../services/User";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavigationBar } from "./NavigationBar";
// import { NavigationBar } from "./NavigationBar";

export function LoginUser() {
  const navigate = useNavigate();
  const [userlogin, setUserlogin] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setUserlogin({ ...userlogin, [e.target.name]: e.target.value });
    console.log(userlogin);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await sendLoginData(userlogin);

      if (response.data.status) {
        sessionStorage.setItem('id', response.data.id);
        navigate(`/privateuser`)

      }else{
        alert("Invalid Credentials !!");
      }

      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }
  return (

    <body class="loginbody">
      {/* <NavigationBar></NavigationBar> */}
      <NavigationBar></NavigationBar>
      <div className="login-container">
        <h1>User Login</h1>
        <br />
       
        <form onSubmit={handleSubmit}>
          <label >Email ID</label>
          <input type="text" name="email" onChange={handleChange} required />

          <label >Password</label>
          <input type="password" name="password" onChange={handleChange} required />

          <center>
            <button className="nxtbtn" type="submit">
              Next
            </button>
          </center>
        </form>
        <div className="or-separator">
          <br />
          <hr />
          <center>OR</center>
          <br />
        </div>
        <div className="login-options">
          <a href="#" className="login-google">
            <p>Login with Google</p>
            <img
              src="https://img.icons8.com/?size=48&id=17949&format=png"
              alt="lol"
            />
          </a>
        </div>
      </div>
      <div className="Foot">
        <center>
          <p>
            New here? <a href="registrationuser">Sign Up</a>
          </p>
        </center>
      </div>
    </body>

  );
}
