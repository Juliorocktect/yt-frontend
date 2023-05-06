import React, { useState, useRef, useEffect } from "react";
import VideoPlayer from "./video-player/VideoPlayer";
import "./Player.css";
import { useParams } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { MdThumbUpAlt } from "react-icons/md";

function Player() {
  const [isVideoAvailable, setVideoAvailable] = useState("false");
  const [isProfileAvailable, setIsProfileAvailable] = useState("false");
  const [comments, setComments] = useState("");
  const [video, setVideo] = useState("");
  const [profile, setProfile] = useState("");
  const id = useParams();
  var videoUrl = "http://localhost:8080/video/" + id.id;

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    console.log(videoUrl);
    document.getElementById("vid").innerHTML = `<source src="${videoUrl}"/>`;
    let commentOutput = "";

    fetch("http://localhost:8080/getVideoPerId/" + id.id, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVideo(result);
        setVideoAvailable("true");
        setComments(video.comments);
        document.getElementById("likes").innerHTML = video.likes;
        document.getElementById("video-title").innerHTML = video.title;
      })
      .catch((error) => console.log("error", error));
    for (let i = 0; i > 26; i++) {
      console.log(comments[i]);
    }

    fetch(
      "http://localhost:8080/user/getProfilePicture/642470a2e5b043025ec8676d",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setProfile(result);
        setIsProfileAvailable("true");
      })
      .catch((error) => console.log("error", error));
    if (isProfileAvailable) {
      document.getElementById(
        "user-pic"
      ).innerHTML = `<img id="profile-picture" src='${profile}' alt="profile-pic"/>`;
    }
  }, [isVideoAvailable, isProfileAvailable]);

  function like() {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };

    fetch("http://localhost:8080/like?id=" + id.id, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setProfile(result);
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div className="body">
      <div className="recomandation-section">
        <div className="video-element">
          <a href="/player/asd">
            <div id="component">
              <div id="pic">
                <img
                  id="pic"
                  src="http://localhost/landscape-mountain-snow-winter-mountain-range-weather-snowy-skiing-season-winter-sport-sports-alps-canada-ski-wintry-piste-winter-mood-snow-landscape-ski-touring-nordic-skiing-ski-mountaineering-ski-equipment-mount.jpg"
                  alt="thumbnail-preview"
                  className="preview"
                />
              </div>
              <div id="bottom">
                <div id="profielpic">
                  <img
                    src="http://localhost/koenigssee-st.-bartholomews-church-istock_25714100_xlarge-2.jpg"
                    alt="pic"
                    id="profile-pic"
                  />
                  <img
                    src="http://localhost/koenigssee-st.-bartholomews-church-istock_25714100_xlarge-2.jpg"
                    alt="pic"
                    id="mask"
                  />
                </div>
                <div id="content">
                  <h1>Titel</h1>
                  <p>Beschreibung</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="video-element">
          <a href="/player/asd">
            <div id="component">
              <div id="pic">
                <img
                  id="pic"
                  src="http://localhost/landscape-mountain-snow-winter-mountain-range-weather-snowy-skiing-season-winter-sport-sports-alps-canada-ski-wintry-piste-winter-mood-snow-landscape-ski-touring-nordic-skiing-ski-mountaineering-ski-equipment-mount.jpg"
                  alt="thumbnail-preview"
                  className="preview"
                />
              </div>
              <div id="bottom">
                <div id="profielpic">
                  <img
                    src="http://localhost/koenigssee-st.-bartholomews-church-istock_25714100_xlarge-2.jpg"
                    alt="pic"
                    id="profile-pic"
                  />
                  <img
                    src="http://localhost/koenigssee-st.-bartholomews-church-istock_25714100_xlarge-2.jpg"
                    alt="pic"
                    id="mask"
                  />
                </div>
                <div id="content">
                  <h1>Titel</h1>
                  <p>Beschreibung</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="video-element">
          <a href="/player/asd">
            <div id="component">
              <div id="pic">
                <img
                  id="pic"
                  src="http://localhost/landscape-mountain-snow-winter-mountain-range-weather-snowy-skiing-season-winter-sport-sports-alps-canada-ski-wintry-piste-winter-mood-snow-landscape-ski-touring-nordic-skiing-ski-mountaineering-ski-equipment-mount.jpg"
                  alt="thumbnail-preview"
                  className="preview"
                />
              </div>
              <div id="bottom">
                <div id="profielpic">
                  <img
                    src="http://localhost/koenigssee-st.-bartholomews-church-istock_25714100_xlarge-2.jpg"
                    alt="pic"
                    id="profile-pic"
                  />
                  <img
                    src="http://localhost/koenigssee-st.-bartholomews-church-istock_25714100_xlarge-2.jpg"
                    alt="pic"
                    id="mask"
                  />
                </div>
                <div id="content">
                  <h1>Titel</h1>
                  <p>Beschreibung</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="video-element">
          <a href="/player/asd">
            <div id="component">
              <div id="pic">
                <img
                  id="pic"
                  src="http://localhost/landscape-mountain-snow-winter-mountain-range-weather-snowy-skiing-season-winter-sport-sports-alps-canada-ski-wintry-piste-winter-mood-snow-landscape-ski-touring-nordic-skiing-ski-mountaineering-ski-equipment-mount.jpg"
                  alt="thumbnail-preview"
                  className="preview"
                />
              </div>
              <div id="bottom">
                <div id="profielpic">
                  <img
                    src="http://localhost/koenigssee-st.-bartholomews-church-istock_25714100_xlarge-2.jpg"
                    alt="pic"
                    id="profile-pic"
                  />
                  <img
                    src="http://localhost/koenigssee-st.-bartholomews-church-istock_25714100_xlarge-2.jpg"
                    alt="pic"
                    id="mask"
                  />
                </div>
                <div id="content">
                  <h1>Titel</h1>
                  <p>Beschreibung</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <VideoPlayer className="player"></VideoPlayer>
      <div className="title-container">
        <div className="title-container-container">
          <h1 id="video-title"></h1>
        </div>
        <div className="container">
          <div className="views">
            <AiOutlineEye className="icon" />
            <p id="views"></p>
          </div>
          <div className="likes">
            <BsFillHeartFill className="like-icon" />
            <p id="likes"></p>
          </div>
        </div>
      </div>
      <div className="UserContainer">
        <div id="user-pic" className="user-pic"></div>
        <div className="UserName"></div>
        <button className="subscribe-button">Subscribe</button>
      </div>

      <div className="comment-section">
        <div className="comment">
          <div className="user-img"></div>
          <div className="content">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
