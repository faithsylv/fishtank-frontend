import React from 'react';
import YouTube from 'react-youtube';

const Pets = () => {

  const opts = {
     height: '390',
     width: '640',
     playerVars: {
       autoplay: 1,
     },
   };

   const _onReady = (event) => {
    event.target.pauseVideo();
  }

  return (
    <div>
      <div><YouTube videoId="lQDxasFKQCA" opts={opts} onReady={_onReady} /></div>
      <div><YouTube videoId="cyjHHmc7QB0" opts={opts} onReady={_onReady} /></div>
    </div>
  
  );
}


export default Pets;
