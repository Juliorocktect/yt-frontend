import React, { useEffect, useState } from "react";
import NavBar from "../navbar/NavBar";
import { Navigate, useHref, useNavigate } from "react-router-dom";
import "./Video.css";

function Video() {
  const [videos, setVideos] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [isPicAvailable, setIsPicAvailable] = useState("false");
  const [reload, setReload] = useState();
  const navigate = useNavigate("");

  useEffect(() => {
    fetch(
      "http://localhost:8080/user/getProfilePicture/642470a2e5b043025ec8676d", //add variable instead of id and get the id from video
      requestOptions
    )
      .then((response) => response.text())
      .then(function (result) {
        console.log(result);
        setProfilePic(result);
        setIsPicAvailable("true");
      })
      .catch((error) => console.log("error", error));

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://192.168.178.95:8080/getTenVideos", requestOptions)
      .then((response) => response.json())
      .then(function (result) {
        console.log(result);
        setVideos(result);

        let output = "";
        result.forEach(function (video) {
          output += `
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
                  src="http://localhost/landscape-mountain-snow-winter-mountain-range-weather-snowy-skiing-season-winter-sport-sports-alps-canada-ski-wintry-piste-winter-mood-snow-landscape-ski-touring-nordic-skiing-ski-mountaineering-ski-equipment-mount.jpg"
                  alt=""
                  className="channel-icon"
                  id="channel-icon"
                />
                <img
                  src="http://localhost/landscape-mountain-snow-winter-mountain-range-weather-snowy-skiing-season-winter-sport-sports-alps-canada-ski-wintry-piste-winter-mood-snow-landscape-ski-touring-nordic-skiing-ski-mountaineering-ski-equipment-mount.jpg"
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
          document.getElementById("video-section").innerHTML = output;
        });
      })
      .catch((error) => console.log("error", error));
  }, [isPicAvailable]);

  return (
    <main>
      <NavBar />
      <div id="video-section"></div>
    </main>
  );
}

export default Video;
