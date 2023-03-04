import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Sphere from "./sphere";
import Sphere2 from "./sphere2";
import NewParticleField from "./newParticleField";

const Music = require("./assets/music/NilsFrahm_Says.mp3");

function handlePlay() {
  console.log("The song is playing");
}

function handlePause() {
  console.log("The song is paused");
}

const AudioPlayer: React.FC = () => {
  const [showSphere, setShowSphere] = useState(false);
  const [showNewParticleFeild, setShowNewParticleFeild] = useState(true);

  const toggleComponent = () => {
    setShowNewParticleFeild(!showNewParticleFeild);
    setShowSphere(!showSphere);
  };
  return (
    <div className="smartphone">
      <div className="main-audio-player">
        <div className="animationBox">
          {showNewParticleFeild ? (
            <Sphere width={800} height={600} />
          ) : (
            <Sphere2 width={800} height={600} />
          )}
        </div>
        <div className="song-info">
          <h1 className="song-title">Nils Frahm</h1>
          <h1 className="artist-name">Says</h1>
        </div>
        <ReactAudioPlayer
          src={Music}
          autoPlay
          controls
          onPlay={handlePlay}
          onPause={handlePause}
          style={{ width: "100%", height: "50px" }}
          onEnded={() => console.log("The song has ended")}
        />
        <div className="container">
          <div className="center">
            <button onClick={toggleComponent}>
              <span className="change-artwork">ANIMATE</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
