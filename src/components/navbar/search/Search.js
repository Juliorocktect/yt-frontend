import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  BsFillInboxFill,
  BsBellFill,
  BsFillPersonFill,
  BsFillCloudUploadFill,
} from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import "./Search.css";
import { useNavigate, useLocation } from "react-router-dom";

function Search() {
  let sui = "";
  let text = "";
  const navigate = useNavigate();
  const location = useLocation();
  const [searchResult, setSearchResult] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [PicAvailable, setPicIsAvailable] = useState("false");
  const [currentUser, setCurrentUser] = useState("");

  function getSearch(text) {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "http://localhost:8080/user/getProfilePicture/642470a2e5b043025ec8676d", //add variable instead of id and get the id from video
      requestOptions
    )
      .then((response) => response.text())
      .then(function (result) {
        console.log(result);
        setProfilePic(result);
      })
      .catch((error) => console.log("error", error));

    fetch("http://localhost:8080/search/" + text, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setSearchResult(result);
        if (searchResult[0] == null) {
          alert("No search results");
        }
        result.forEach(function (video) {
          sui += `
          <a href="/player/${video.id}"> 
            <div id="component">
            <div id="pic">
              <img id="pic" src="${video.thumbnailUrl}" alt="thumbnail-preview" className="preview" />
            </div>
            <div id="bottom">
              <div id="profielpic">
                <img  src="${profilePic}" alt="pic" id='profile-pic'/>
                <img  src="${profilePic}" alt="pic" id='mask' />
              </div>
                <div id='content' onClick={navigateToPlayer(${video.id})}>
                  <h1>${video.title}</h1>
                  <p>${video.description}</p>
                </div>
            </div>
          </div>
          </a>
          `;
        });
        document.getElementById("output-search").innerHTML = sui;
      })
      .catch((error) => console.log("error", error));
  }

  useEffect(() => {
    if (location.name != "/search") {
      deRender();
    } else {
      renderSearch();
    }
  }, []);
  function onSubmit() {
    navigate("/search");
    getSearch(text);
  }

  function getData(val) {
    text = val.target.value;
  }
  function deRender() {
    document.getElementById("search").classList.add("derender");
  }
  function renderSearch() {
    document.getElementById("search").classList.remove("derender");
  }
  function handle(e) {
    if (e.key === "Enter") {
      getSearch(text);
      if (location.pathname != "/search") {
        navigate("/search");
      }
    }
    return false;
  }

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/user/getCurrentUser", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCurrentUser(result);
        let picUrl = `
        <img src="${currentUser.pictureUrl}" alt="" srcset="" id="propicpic"/>
        <img src="${currentUser.pictureUrl}" alt="" srcset="" id="mask"/>`;
        console.log(result);
        document.getElementById("propic").innerHTML = picUrl;
        setPicIsAvailable("true");
      })
      .catch((error) => console.log("error", error));
  }, [PicAvailable]);
  function navigateSearch() {
    navigate("/search");
  }
  return (
    <>
      <div className="nav">
        <div className="logo">
          <a href="/">
            <h1 className="logo">logo</h1>
          </a>
        </div>
        <div className="button-container">
          <FaSearch className="search-icon" onClick={navigateSearch} />
          <div className="btn-container"></div>
          <AiOutlineMenu className="menu-hamburger" />
        </div>
      </div>
      <div className="search" id="search">
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Search"
            className="search-input "
            onChange={getData}
            onKeyDown={handle}
          />
          <FaSearch className="search-icon" onClick={navigateSearch} />
        </form>
      </div>
      <div className="propic" id="propic"></div>
      <div id="output-search"></div>
    </>
  );
}

export default Search;
