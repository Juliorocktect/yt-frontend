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
          <a id="link" href="/player/${video.id}"> 
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
                  <div>${video.description}</div>
                </div>
            </div>
          </div>
          </a>
          `;
          document.getElementById("output").innerHTML = output;
        });
      })
      .catch((error) => console.log("error", error));
  }, [isPicAvailable]);

  return (
    <main>
      <NavBar />
      <div id="output"></div>
    </main>
  );
}

export default Video;
