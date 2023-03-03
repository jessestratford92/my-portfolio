import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ParticleField from './ParticleField';

const Music = require('./assets/music/NilsFrahm_Says.mp3')

function handlePlay() {
  console.log('The song is playing');
}

function handlePause() {
  console.log('The song is paused');
}

const AudioPlayer: React.FC = () => {
  return (
    <div className="main-audio-player">
        <div className="album-artwork">
            <ParticleField particleCount={1000} particleSize={1} color={'white'}/>
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
      </div>
  )}

  export default AudioPlayer

