import { React, useState } from "react";
import { useForm } from "react-hook-form";

function Upload() {
  const { register, handleSubmit } = useForm("");
  const [title, setTitle] = useState("");
  const [descrition, setDescritpion] = useState("");
  const [userId, setUserId] = useState("");
  const [videoId, setVideoId] = useState("");

  const sendFile = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("id", videoId);

    const res = await fetch("http://localhost:8080/uploadVideo", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };
  function createVideo() {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
    };
    let params = new URLSearchParams("");
    params.set("title", title);
    params.set("description", descrition);
    params.set("userId", userId);
    let Url = "http://localhost:8080/createNewVideo?" + params.toString();

    fetch(Url, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setVideoId(result);
        console.log(videoId);
      })
      .catch((error) => console.log("error", error));
  }

  function action() {
    createVideo();
    sendFile();
  }
  return (
    <>
      <form onSubmit={handleSubmit(action)}>
        <input type="file" {...register("file")} />
        <input type="submit" />
      </form>
      <form
        onSubmit={
          (action,
          (event) => {
            event.preventDefault();
          })
        }
      >
        <input
          type="text"
          id="username-input"
          placeholder="  picture url"
          className="input"
          onChange={(val) => {
            setTitle(val.target.value);
          }}
        />
        <input
          type="text"
          id="username-input"
          placeholder="  description"
          className="input"
          onChange={(val) => {
            setDescritpion(val.target.value);
          }}
        />
        <input
          type="text"
          id="username-input"
          placeholder="  userId"
          className="input"
          onChange={(val) => {
            setUserId(val.target.value);
          }}
        />
      </form>
    </>
  );
}

export default Upload;
