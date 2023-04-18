import React, { useState } from "react";
import {
  BsFillPlayFill,
  BsFillSkipEndFill,
  BsFillVolumeDownFill,
  BsPauseFill,
} from "react-icons/bs";
import { MdOutlineForward5 } from "react-icons/md";
import { useRef } from "react";
import "./VideoPlayer.css";

function VideoPlayer({ videoUrl }) {
  var video = useState("");

  function setVideo() {
    video = document.querySelector("my-video");
    console.log(videoUrl);
    video.innerHTML = `<source src="${videoUrl}" type="video" />;`;
  }
  return (
    <div className="app" id="player">
      <video controls autoPlay id="vid">
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
    </div>
  );
}

export default VideoPlayer;
