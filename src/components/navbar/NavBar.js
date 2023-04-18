import React from "react";
import Search from "./search/Search";
import { useEffect, useState } from "react";
import { useActionData, useNavigate } from "react-router-dom";

function NavBar() {
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();
  const [isPicAvailable, setIsAvailable] = useState("false");
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/user/getCurrentUser", requestOptions)
      .then((response) => response)
      .then((result) => {
        setCurrentUser(result);
        setIsAvailable("true");
      })
      .catch((error) => console.log("error", error));
    document.getElementById(
      "propic"
    ).innerHTML = `<img src="${currentUser.pictureUrl}" alt="" srcset="" className="propicpic" />`;
  }, [isPicAvailable]);

  return (
    <>
      <div className="NavBar">
        <Search></Search>
        <div className="profile">
          <div className="pro-picutre" id="propic"></div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
