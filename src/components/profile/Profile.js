import React from "react";
import "./profile.css";
import NavBar from "../navbar/NavBar";
function Profile() {
  function setAsActive(elemt) {}
  return (
    <div className="profile">
      <NavBar></NavBar>
      <div className="banner-container">
        <img
          src="http://localhost/koenigssee-st.-bartholomews-church-istock_25714100_xlarge-2.jpg"
          alt=""
          className="banner-img"
        />
      </div>
      <div className="profile-container">
        <div className="user-container">
          <div className="name">
            <img
              src="http://localhost/landscape-mountain-snow-winter-mountain-range-weather-snowy-skiing-season-winter-sport-sports-alps-canada-ski-wintry-piste-winter-mood-snow-landscape-ski-touring-nordic-skiing-ski-mountaineering-ski-equipment-mount.jpg"
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
      <div className="preview-video">
        <div className="pre-image-container">
          <img
            src="http://localhost/image__Sigurd_Treske_wueste_namibia_namib.jpg"
            alt="best video"
            className="best-video"
          />
        </div>
        <div className="text-cont">
          <div className="title">
            <h2>Choosing the best Audio Player Software For Your Computer</h2>
          </div>
          <div className="descript">
            <h5>
              Suiasui asu soaso dipd paoowid isid wii9d spasj ksjediwe ksjdk
            </h5>
          </div>
          <div className="details">
            <p className="details">11K views | 6 Months ago</p>
          </div>
        </div>
      </div>
      <div className="videos-byChannel">Get all videos from user</div>
    </div>
  );
}

export default Profile;
