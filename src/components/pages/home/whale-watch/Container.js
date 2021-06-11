import React, { useState, useEffect } from 'react';
import axios from 'axios';

import WhaleSighting from './Sighting';

const WhaleWatchContainer = (props) => {

  const [whaleSightings, setWhaleSightings] = useState([]);

  const getSightingReports = () => {
    console.log('getting latest sightings...');
    return axios.get('https://hotline.whalemuseum.org/api.json').then((response) => {
      setWhaleSightings(response.data.filter((whale) => whale.description !== "Imported by The Whale Museum."
      ))
    }).catch(error => {
    console.log(error.response)
    });
  }

  useEffect(() => {
    getSightingReports();
     let timer1 = setInterval(() => getSightingReports(), 30000);
     return () => {
       clearTimeout(timer1);
     };
   },
   []
 );

  return (
    <div className='whale-container home-grid5'>
      <h2>Whale Watch!</h2>

      {whaleSightings.map((whale) => (
        <WhaleSighting whale={ whale } />
      ))}

    </div>
  )
};

export default WhaleWatchContainer;
