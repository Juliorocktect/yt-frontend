import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Upload() {
  const { register, handleSubmit } = useForm("");
  const [title, setTitle] = useState("");
  const [descrition, setDescritpion] = useState("");
  const [userId, setUserId] = useState("");

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("id", "64245c89d489cb04f9b93af6");

    const res = await fetch("http://localhost:8080/uploadVideo", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
    alert(JSON.stringify(`${res.message}, status: ${res.status}`));
  };
  function getTitle(val) {
    setTitle(val.traget.value);
  }
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file")} />
        <input type="submit" />
        <input
          type="text"
          id="username-input"
          placeholder="  username"
          className="input"
          onChange={getTitle}
        />
      </form>
    </>
  );
}

export default Upload;
