import React from "react";
import Search from "./search/Search";
import "./NavBar.css";
import { useEffect, useState } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineHeart } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import {
  BsFillPersonFill,
  BsClipboardCheck,
  BsHouse,
  BsArrowRight,
  BsClock,
  BsBookmarks,
  BsHeart,
} from "react-icons/bs";
import { getElementError } from "@testing-library/react";

function NavBar() {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  const [isPicAvailable, setIsAvailable] = useState("false");
  const [fix, setFix] = useState(false);
  const [sidebar, setSidebar] = useState(false);

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

  function expandSideBar() {
    var sidebar = document.getElementById("sidebar");
    var rest = document.getElementById("invisible");
    var arrow = document.getElementById("arrow-container");
    rest.classList.add("invisible-sidebar-active");
    sidebar.classList.add("sidebar-active");
    arrow.classList.add("disabled");
    setSidebar(true);
  }
  if (sidebar) {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    const decrease = async () => {
      await delay(1500);
      console.log("executed");
      decreaseSideBar();
    };
  }
  function decreaseSideBar() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("sidebar-active");
    var rest = document.getElementById("invisible");
    rest.classList.remove("invisible-sidebar-active");
    setSidebar(false);
  }
  function expandMobileMenu() {
    const mobileMenu = document.getElementById("mobile-menu");
    if (mobileMenu.classList.contains("nav-mobile-menu-disabled")) {
      mobileMenu.classList.add("nav-mobile-menu");
      mobileMenu.classList.remove("nav-mobile-menu-disabled");
    } else {
      mobileMenu.classList.add("nav-mobile-menu-disabled");
      mobileMenu.classList.remove("nav-mobile-menu");
    }
  }

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
            <div className="button-container">
              <FaSearch className="search-icon" onClick={navigateSearch} />
              <BsFillPersonFill className="search-icon" />
              <input type="checkbox" id="checkbox" onClick={expandMobileMenu} />
              <label for="checkbox" class="toggle">
                <div class="bars" id="bar1"></div>
                <div class="bars" id="bar2"></div>
                <div class="bars" id="bar3"></div>
              </label>
            </div>
          </div>
        </div>
        <div className="nav-mobile-menu-disabled" id="mobile-menu">
          <ul>
            <li>
              <BsHouse className="mobile-icon" />
              <h1>Home</h1>
            </li>
            <li>
              <BsClipboardCheck className="mobile-icon" />
              <h1>Following</h1>
            </li>

            <li>
              <BsBookmarks className="mobile-icon" />
              <h1>Saved</h1>
            </li>
            <li>
              <AiOutlineHeart className="mobile-icon" />
              <h1>liked</h1>
            </li>
            <li>
              <BsClock className="mobile-icon" />
              <h1>History</h1>
            </li>
          </ul>
        </div>
        <div
          className="invisible-sidebar"
          id="invisible"
          onClick={decreaseSideBar}
        ></div>
        <div className="sidebar" id="sidebar">
          <div className="arrow-container" id="arrow-container">
            <BsArrowRight className="arrow" onClick={expandSideBar} />
          </div>
          <ul>
            <li>
              <BsHouse className="sidebar-icon" />{" "}
              <p className="sidebar-deactive sidebar-text">Home</p>
            </li>
            <li>
              <BsClipboardCheck />
              <p className="sidebar-deactive sidebar-text">Following</p>
            </li>
            <li>
              <BsBookmarks />
              <p className="sidebar-deactive sidebar-text">Saved</p>
            </li>
            <li>
              <AiOutlineHeart />{" "}
              <p className="sidebar-deactive sidebar-text">Like</p>
            </li>
            <li>
              <BsClock />
              <p className="sidebar-deactive sidebar-text">History</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
