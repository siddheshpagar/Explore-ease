import React, { useState } from "react";
import "../Css/Login.css";
import { sendLoginData } from "../services/User";
import { useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { loginOwnerData } from "../services/Owner";
import { NavigationBar } from "./NavigationBar";

export function LoginOwner() {
  const navigate = useNavigate();
  const [userlogin, setUserlogin] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setUserlogin({ ...userlogin, [e.target.name]: e.target.value });
    console.log(userlogin);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginOwnerData(userlogin);
      console.log(response)
      if (response.data.status && response.data.statusMessage === "APPROVED") {
        sessionStorage.setItem('owner-id', response.data.id);
        navigate(`/private`)
      }else{
        alert("Kindly Wait For Approval !!");
      }

      console.log(response);

    } catch (error) {
      console.log(error);
    }
  }
  return (

    <body class="loginbody">
      <NavigationBar></NavigationBar>
      <div className="login-container">
        <h1>Owner Login</h1>
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
            New here? <a href="#">Sign Up</a>
          </p>
        </center>
      </div>
    </body>

  );
}
