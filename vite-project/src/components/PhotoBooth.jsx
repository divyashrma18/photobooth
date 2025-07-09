import React, { useState } from "react";
import Webcam from "react-webcam";
import PhotoStudio from "./PhotoStudio";
import "./PhotoBooth.css";

const PhotoBooth = () => {
  const [coinInserted, setCoinInserted] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showStudio, setShowStudio] = useState(false);

  const handleInsertClick = () => setCoinInserted(true);

  const handleCoinClick = () => {
    setCurtainOpen(true);

    setTimeout(() => {
      setShowStudio(true);
    }, 1000);
  };

  if (showStudio) {
    return <PhotoStudio />;
  }

  return (
    <div className="booth-container">
      <div className="booth-header">Dv PhotoBooth</div>

      <div className="booth-body">
        <div className="coin-slot">
          {!coinInserted ? (
            <p className="insert-text" onClick={handleInsertClick}>
              INSERT
              <br />
              COIN HERE
            </p>
          ) : (
            <div className="coin" onClick={handleCoinClick}></div>
          )}
        </div>

        <div className="curtain-wrapper">
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            className="webcam-preview"
          />
          <div className={`curtain ${curtainOpen ? "open" : ""}`} />
        </div>
      </div>
    </div>
  );
};

export default PhotoBooth;
