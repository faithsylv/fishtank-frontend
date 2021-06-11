import React, { Component } from 'react';
import WhaleWatchContainer from './whale-watch/Container'
import NewsletterContainer from './newsletter/Container';

import ray from './humpback-tail.jpg'

class Home extends Component {

  render() {
    return (
      <div className="home grid-container">
        <div className="top-row">
          <NewsletterContainer isSubscribed = { this.props.isSubscribed } setIsSubscribed = { this.props.setIsSubscribed }/>
          <div className='home-grid2'>
          <h2 className='home-exclamation'>SAVE THE FISH WITH US</h2>
          <p> Manta ray, crazy snowcrab swimming at, catshark soldierfish threadfin. Parrotfish at crazy houndshark with pipefish snake eel. Bursa trigger funny filefish. Parrotfish mystery snail. Foxface cardinalfish seabass pebblesnail faucet snail or rock lobster spotted sweetlips.Weasel shark. Seahorse rock lobster, papershell.</p></div>
          <div className='home-grid3'><img src={ ray } alt="image of a manta ray" className='homepage-img'/></div>
          <p className='home-grid4'>Weasel shark. Seahorse rock lobster, papershell shark or scorpionfish is, faucet snail king crab weasel shark. Coral hogfish snake eel goatfish and Black clown goby fanatic jumping at a nurse shark. Black clown goby, tilefish catshark sea grape starfish, banana wrasse starfish wobbegong shark, grouper batfish ear snail are at the bottom. Peppered moray stingray grouper our kelp. Banana wrasse in yellow pseudochromis non mermai.</p>
        </div>
        <WhaleWatchContainer />
      </div>
    );
  }
}

export default Home;
