import { Component } from "react";
import "./Slider.css";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import React from "react";

function Slider() {
  let current = 0;
  const ids = ["image-slider1", "image-slider2", "image-slider3"];

  function activate(id) {
    document.getElementById(id).classList.remove("disabled");
  }
  function disable(id) {
    document.getElementById(id).classList.add("disabled");
  }
  function moveLeft(id){
    document.getElementById(id).classList.remove('right');
    document.getElementById(id).classList.add('left');
  }
  function moveCenter(id){
    document.getElementById(id).classList.remove('left');
    document.getElementById(id).classList.remove('right');
  }
  function moveRight(id){
    document.getElementById(id).classList.remove('left');
    document.getElementById(id).classList.add('right');
  }
  function next() {
    /*if (current == ids.length-1) {
      current = 0;
      activate(ids[current]);
      moveCenter(ids[current]);
      //disable(ids[2]);
      moveRight(ids[2]);
    } else {
      current++;
      //disable(ids[current-1]);
      activate(ids[current]);
      moveCenter(ids[current]);
      moveRight(ids[current-1]);
      moveLeft(ids[current])
    }*/
    if (current == 2){
      current = 0;
        moveCenter(ids[current]);
        moveLeft(ids[1]);
        moveRight(ids[2]);
    }
    else if(current == 1){
      moveCenter(ids[2]);
      moveLeft(ids[0]);
      moveRight(ids[1])
      current++;
    }
    else if(current == 0){
      moveLeft(ids[2]);
      moveRight(ids[0]);
      moveCenter(ids[1]);
      current++;
    }
    console.log(current);
  }
  function before() {
    /*if (current == 0) {
      current = ids.length-1;
      activate(ids[2]);
      disable(ids[0]);
    } else {
      current--;
      activate(ids[current]);
      disable(ids[current + 1]);
    }
    */
    if (current == 2){
        moveCenter(ids[0]);
        moveLeft(ids[1]);
        moveRight(ids[2]);
        current--;
    }
    else if(current == 1){
      moveCenter(ids[2]);
      moveLeft(ids[0]);
      moveRight(ids[1])
      current--;
    }
    else if(current == 0){
      moveLeft(ids[2]);
      moveRight(ids[0]);
      moveCenter(ids[1]);
      current = 2;
    }
  }
  return (
    <div className="slider">
      <button className="slider-button" onClick={before}>
        <MdArrowBackIos className="slider-arrow" />
      </button>
      <div className="img-slider-container">
        <img
          className="image-slider"
          id="image-slider1"
          src="https://wallup.net/wp-content/uploads/2016/01/65540-nature-forest-river.jpg"
        />
        <img
          className="image-slider left"
          id="image-slider2"
          src="https://free4kwallpapers.com/uploads/originals/2015/10/04/nature._.jpg"
        />
        <img
          className="image-slider right"
          id="image-slider3"
          src="https://i2.wp.com/techbeasts.com/wp-content/uploads/2016/01/green_mountain_nature_wallpaper_hd.jpg"
        />
      </div>
      <button className="slider-button" onClick={next}>
        <MdArrowForwardIos className="slider-arrow" />
      </button>
    </div>
  );
}

export default Slider;
