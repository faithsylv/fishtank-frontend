import React from 'react';

const WhaleSighting = (props) => {
  return (
    <div className='whale-sighting'>
    <h3>{ props.whale.species }</h3>
    <h4>{ props.whale.location }</h4>
    <h4>{ props.whale.sighted_at }</h4>
    <p>{ props.whale.description }</p>
    </div>
  );
};

export default WhaleSighting;
