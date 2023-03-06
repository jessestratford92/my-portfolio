import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Sphere from "./sphere";
import Sphere2 from "./sphere2";

// const Music_1 = require("./assets/music/NilsFrahm_Says.mp3");
const Music_2 = require("./assets/music/Rival_Consoles _Untravel.mp3");

function handlePlay() {
  console.log("The song is playing");
}

function handlePause() {
  console.log("The song is paused");
}

const AudioPlayer: React.FC = () => {
  // Sphere Animations States
  const [showSphere, setShowSphere] = useState(true);

  // Toggle between two Animations
  const toggleComponent = () => {
    setShowSphere(!showSphere);
  };

  return (
    <div className="smartphone">
      <div className="main-audio-player">
        <div className="animationBox">
          {showSphere ? (
            <Sphere2 width={800} height={600} />
          ) : (
            <Sphere width={800} height={600} />
          )}
        </div>
        <div className="song-info">
          <h1 className="song-title">Rival Consols</h1>
          <h1 className="artist-name">Untravel</h1>
        </div>
        <ReactAudioPlayer
          className="audio-player-actual"
          src={Music_2}
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
