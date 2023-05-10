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
      <div className="containerOfRecomandations">
        <VideoPlayer className="player"></VideoPlayer>
        <div className="rest-container">
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
        <div className="recomandation-section">
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
          <div className="video-container" id="video-container">
            <a href="/player/${video.id}" id="thumbnail" data-duration="12:40">
              <img
                src="http://localhost/canyon_overlook_zion_landscape_black_and_white-wallpaper-3840x2400.jpg"
                alt=""
                className="thumbnail-image"
                id="thumbnail-image"
              />
            </a>
            <div className="video-bottom-section" id="video-bottom-section">
              <a href="/profile/${video.userId}">
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
                  id="mask"
                  alt=""
                />
              </a>
              <div className="video-details" id="video-details">
                <a href="/player/asd" className="video-title" id="video-title">
                  SsIooO
                </a>
                <a
                  href="/profile/asd"
                  className="video-channel-name"
                  id="video-channel-name"
                >
                  sio
                </a>
                <div className="video-metadata" id="video-metadata">
                  <span>asd</span>•<span>1 week ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
