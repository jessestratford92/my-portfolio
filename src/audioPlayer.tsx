import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Music = require('./assets/music/NilsFrahm_Says.mp3')

function handlePlay() {
  console.log('The song is playing');
}

function handlePause() {
  console.log('The song is paused');
}

const AudioPlayer: React.FC = () => {
  return (
    <div>
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

