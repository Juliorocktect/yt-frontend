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
import NavBar from "../NavBar";

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
        if (searchResult.length === 0) {
          console.log("no value present");
        }
        result.forEach(function (video) {
          sui += `
          <div className="video-container" id="video-container">
          <a href="/player/${video.id}" id="thumbnail" data-duration="${video.likes}">
            <img
              src="${video.thumbnailUrl}"
              alt=""
              className="thumbnail-image"
              id="thumbnail-image"
            />
          </a>
          <div className="video-bottom-section" id="video-bottom-section">
            <a href="/profile/${video.userId}">
              <img
                src="${profilePic}"
                alt=""
                className="channel-icon"
                id="channel-icon"
              />
              <img
                src="${profilePic}"
                id="mask"
                alt=""
              />
            </a>
            <div className="video-details" id="video-details">
              <a href="/player/asd" className="video-title" id="video-title">
                ${video.title}
              </a>
              <a href="/profile/asd" className="video-channel-name" id="video-channel-name">
                ${video.userId}
              </a>
              <div className="video-metadata" id="video-metadata">
                <span>${video.likes}</span>•<span>${video.views}</span>
              </div>
            </div>
          </div>
        </div>
          `;
        });
        document.getElementById("output-search").innerHTML = sui;
      })
      .catch((error) => console.log("error", error));
  }

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
      <NavBar></NavBar>
      <div className="search" id="search">
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Search"
            className="search-input "
            onChange={getData}
            onKeyDown={handle}
          />
        </form>
      </div>
      <div className="propic" id="propic"></div>
      <div id="output-search"></div>
    </>
  );
}

export default Search;
