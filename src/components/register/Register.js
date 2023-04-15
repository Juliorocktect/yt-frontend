import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  var strengthbar = document.getElementById("strengthbar");
  var display = document.getElementById("display");
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUsername] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordTwo, setPassWordTwo] = useState("");

  function checkpassword(password) {
    var strength = 0;
    if (password.match(/[a-z]+/)) {
      strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
      strength += 1;
    }
    if (password.match(/[0-9]+/)) {
      strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
      strength += 1;
    }

    if (password.length < 6) {
      display.innerHTML = "minimum number of characters is 6";
    }

    if (password.length > 12) {
      display.innerHTML = "maximum number of characters is 12";
    }

    switch (strength) {
      case 0:
        strengthbar.value = 0;
        break;

      case 1:
        strengthbar.value = 25;
        break;

      case 2:
        strengthbar.value = 50;
        break;

      case 3:
        strengthbar.value = 75;
        break;

      case 4:
        strengthbar.value = 100;
        break;
    }
  }

  function handle(e) {
    if (e.key === "Enter") {
      action();
    }
    return false;
  }
  function action() {
    let params = new URLSearchParams("");
    params.set("firstName", firstName);
    params.set("lastName", lastName);
    params.set("userName", userName);
    params.set("pictureUrl", pictureUrl);
    params.set("passWord", password);
    let Url = "http://localhost:8080/user/create?" + params.toString();

    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch(Url, requestOptions)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate("/");
        }
        return response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <div className="main">
        <div className="background"></div>
        <div className="login-component " id="login-component">
          <h1>Login</h1>
          <div className="email-container">
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
                placeholder="  firstname"
                className="input"
                onChange={(val) => {
                  setFirstName(val.target.value);
                }}
                onKeyDown={handle}
              />
              <FaUserAlt className="icon" />
            </form>
          </div>
          <div className="password-container">
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
                id="password-input"
                placeholder="  lastname"
                className="input"
                onChange={(val) => {
                  setLastName(val.target.value);
                }}
                onKeyDown={handle}
              />
              <FaLock className="icon" />
            </form>
          </div>
          <div className="email-container">
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
                onChange={(val) => {
                  setUsername(val.target.value);
                }}
                onKeyDown={handle}
              />
              <FaUserAlt className="icon" />
            </form>
          </div>
          <div className="email-container">
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
                placeholder="  picture url"
                className="input"
                onChange={(val) => {
                  setPictureUrl(val.target.value);
                }}
                onKeyDown={handle}
              />
              <FaUserAlt className="icon" />
            </form>
          </div>
          <div className="password-container">
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
                onChange={(val) => {
                  setPassWord(val.target.value);
                }}
                onKeyDown={handle}
              />
              <FaLock className="icon" />
            </form>
          </div>
          <div className="password-container">
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
                placeholder="  repeat password"
                className="input"
                onChange={(val) => {
                  setPassWordTwo(val.target.value);
                }}
                onKeyDown={handle}
              />
              <FaLock className="icon" />
            </form>
          </div>
          <div className="options"></div>
          <form
            onSubmit={
              (action,
              (event) => {
                event.preventDefault();
              })
            }
          >
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

export default Register;
