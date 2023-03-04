import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ParticleField from './ParticleField';
import Sphere from './sphere'

const Music = require('./assets/music/NilsFrahm_Says.mp3')

function handlePlay() {
  console.log('The song is playing');
}

function handlePause() {
  console.log('The song is paused');
}

const AudioPlayer: React.FC = () => {

  const [showParticleFeild, setShowParticleFeild] = useState(true);
  const [showSphere, setShowSphere] = useState(false);

  const toggleComponent = () => {
    setShowParticleFeild(!showParticleFeild);
    setShowSphere(!showSphere);

  };
  return (
    <div className="smartphone">
      <div className="main-audio-player">
          <div className="album-artwork">
          {showParticleFeild ? <ParticleField particleCount={1000} particleSize={1} color={'white'}/> : <Sphere width={800} height={600}/>}
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
          style={{ width: '100%', height: '50px' }}
          onEnded={() => console.log('The song has ended')}
        />
        <div className="container">
              <div className="center">
                 <button onClick={toggleComponent}>
                    <span className="change-artwork">CHANGE ALBUM ARTWORK</span>
                  </button>
          </div>
        </div>
      </div>
    </div>
  )}

  export default AudioPlayer

