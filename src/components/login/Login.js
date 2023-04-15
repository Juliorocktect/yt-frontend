import React from "react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "./Login.css";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUsername] = useState("");
  const [passWord, setPassWord] = useState("");
  const navigate = useNavigate();

  function action() {
    let params = new URLSearchParams("");
    params.set("username", userName);
    params.set("password", passWord);
    let Url = "http://localhost:8080/user/login?" + params.toString();
    console.log(Url);

    var raw = "";

    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    fetch(Url, requestOptions)
      .then(function (response) {
        if (response.status === 200) {
          navigate("/");
          console.log("Succes");
          return response;
        }
        return response;
      })
      .then(function (result) {
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }

  function getUserName(val) {
    setUsername(val.target.value);
  }
  function getPassWord(val) {
    setPassWord(val.target.value);
  }
  function handle(e) {
    if (e.key === "Enter") {
      action();
    }
    return false;
  }

  return (
    <>
      <div className="main">
        <div className="background"></div>
        <div className="login-component " id="login-component">
          <h1>Login</h1>
          <div className="email-container">
            <p>Username</p>
            <form
              onSubmit={
                (action,
                (event) => {
                  event.preventDefault();
                })
              }
            >
              <input
                type="text"
                id="username-input"
                placeholder="  username"
                className="input"
                onChange={getUserName}
                onKeyDown={handle}
              />
              <FaUserAlt className="icon" />
            </form>
          </div>
          <div className="password-container">
            <p>Password</p>
            <form
              onSubmit={
                (action,
                (event) => {
                  event.preventDefault();
                })
              }
            >
              <input
                type="password"
                id="password-input"
                placeholder="  password"
                className="input"
                value={passWord}
                onChange={getPassWord}
                onKeyDown={handle}
              />
              <FaLock className="icon" />
            </form>
          </div>
          <div className="options"></div>
          <form>
            <button onClick={action} id="login">
              Login
            </button>
          </form>
          <div id="bottom">
            Don't have an account?
            <br />
            <a href="/register">Register</a>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
