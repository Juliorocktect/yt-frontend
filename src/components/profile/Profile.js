import React from "react";
import "./profile.css";

function Profile() {
  function setAsActive(elemt) {}
  return (
    <div className="profile">
      <div className="banner-container">
        <img
          src="http://localhost/images/cristina-gottardi-CSpjU6hYo_0-unsplash%20(1).jpg"
          alt=""
          className="banner-img"
        />
      </div>
      <div className="profile-container">
        <div className="user-container">
          <div className="name">
            <img
              src="http://localhost/images/kellen-riggin-U-Xa6K3Rfxk-unsplash.jpg"
              alt=""
              className="user-image"
            />
            <div className="inf">
              <h1>Julio</h1>
              <p className="subscribers">245K Subcribed</p>
            </div>
          </div>
        </div>
        <button className="subscribe-field">Subscribe</button>
      </div>
      <div className="naviagtion-container">
        <ul>
          <li className="list-item" id="home" onClick={setAsActive("home")}>
            Home
          </li>
          <li className="list-item">Playlists</li>
          <li className="list-item">About</li>
        </ul>
      </div>
      <div className="preview-video">Get Most Popular Video</div>
      <div className="videos-byChannel">Get all videos from user</div>
    </div>
  );
}

export default Profile;
