import React from "react";
import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import "./Login.css";
import { Navigate } from "react-router-dom";

function Login() {
  const [userName, setUsername] = useState("");
  const [passWord, setPassWord] = useState("");

  function output() {
    console.log(userName);
    console.log(passWord);
    const data = {
      username: userName,
      password: passWord,
    };
    console.log(
      "http://localhost:8080/user/login?username=" +
        userName +
        "&password=" +
        passWord
    );
  }
  function getUrl() {
    return (
      "http://localhost:8080/user/login?username=" +
      userName +
      "&password=" +
      passWord
    );
  }

  function action() {
    var raw = "";

    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:8080/user/login" + getUrl, requestOptions)
      .then((response) => response)
      .then(function (result) {
        console.log(result);
        if (result === "OK") {
          Navigate("/");
        }
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="login-component" id="login-component">
      <h1>Login</h1>
      <div className="email-container">
        <p>Username</p>
        <form>
          <input
            type="text"
            id="username-input"
            placeholder="username"
            className="input"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUserAlt className="icon" />
        </form>
      </div>
      <div className="password-container">
        <p>Password</p>
        <form>
          <input
            type="password"
            id="password-input"
            placeholder="password"
            className="input"
            value={passWord}
            onChange={(e) => setPassWord(e.target.value)}
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
        <span>
          <button onClick={output}>output</button>
        </span>
      </div>
    </div>
  );
}

export default Login;
