import React from "react";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const [image, setImage] = useState(null);
  const [filteredImage, setFilteredImage] = useState(null);
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
  const handleClick=async ()=>{
    //  fetch from api and set resultantImage to the recieved image
  }

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
              <img src={image} className="input-img" />
              <button className="upload-btn" onClick={handleClick}>Convert Image</button>
            </div>
          </div>
        ) : null}
        {resultantRecieved ? (
          <div className="resultant-sect">
            <h1 className="heading3">Resultant Image</h1>
            <img src={filteredImage} className="output-img" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
