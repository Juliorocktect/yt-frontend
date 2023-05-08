import React from "react";
import Search from "./search/Search";
import "./NavBar.css";
import { useEffect, useState } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { getElementError } from "@testing-library/react";

function NavBar() {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  const [isPicAvailable, setIsAvailable] = useState("false");
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 64) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  /*
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/user/getCurrentUser", requestOptions)
      .then((response) => response)
      .then((result) => {
        setCurrentUser(result);
        setIsAvailable("true");
      })
      .catch((error) => console.log("error", error));
    document.getElementById(
      "propic"
    ).innerHTML = `<img src="${currentUser.pictureUrl}" alt="" srcset="" className="propicpic" />`;
  }, [isPicAvailable]);
  */

  function navigateSearch() {
    navigate("/search");
  }

  function collapseMenu() {}

  return (
    <>
      <div className={fix ? "fixed" : "navBar"}>
        <div className="nav">
          <div className="Navlogo">
            <a href="/">
              <img src="http://localhost/MyLogo.png" alt="" />
            </a>
          </div>
          <div className="flex-end">
            <div className="link-container">
              <ul>
                <li>Home</li>
                <li>Following</li>
                <li>Liked</li>
              </ul>
            </div>
            <div className="button-container">
              <FaSearch className="search-icon" onClick={navigateSearch} />
              <BsFillPersonFill className="search-icon" />
              <AiOutlineMenu className="menu-hamburger" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
