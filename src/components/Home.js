import React from "react";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [image, setImage] = useState(null);
  // const [filteredImage, setFilteredImage] = useState(null);
  const POST_URL="http://127.0.0.1:8000/api/v1/post-image/";
  const [isError, setIsError] = useState(false);
  const [status, setStatus] = useState(false);
  const [resultantRecieved, setResultantRecieved] = useState(false);
  const [resultantImage, setResultantImage] = useState(null);
  const validExtensions = ["image/jpg", "image/jpeg", "image/png"];
  const [error, setError] = useState("");
  const onImageChange = (event) => {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      if (
        validExtensions.findIndex(
          (extension) => extension === event.target.files[0].type
        ) !== -1
      ) {
        let img = event.target.files[0];
        setImage(URL.createObjectURL(img));
        setIsError(false);
        setStatus(true);
      } else {
        setIsError(true);
        setError("Invalid file type. Please upload an Image!");
      }
    }
  };
  const handleClick = async () => {
    //  fetch from api and set resultantImage to the recieved image
    var formdata = new FormData();
    formdata.append(
      "image",
      image,
      "Sent.png"
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    const filteredImage=await fetch(POST_URL, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  setResultantImage(filteredImage);

  return (
    <div className="main-sect">
      <div className="inp-sect">
        {isError ? <p className="error-msg">{error}</p> : null}
        <h1 className="heading1">Select Image</h1>
        <div className="choose-sect">
          Choose an Image
          <input
            type="file"
            name="myImage"
            onChange={onImageChange}
            className="file-choose"
          />
        </div>
        {status ? (
          <div>
            <div className="inpimg-sect">
              <h1 className="heading2">Uploaded Image</h1>
              <img src={image} className="input-img" alt="img"/>
              <button className="upload-btn" onClick={handleClick}>
                Convert Image
              </button>
            </div>
          </div>
        ) : null}
        {resultantRecieved ? (
          <div className="resultant-sect">
            <h1 className="heading3">Resultant Image</h1>
            <img src={resultantImage} className="output-img" alt="img"/>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
