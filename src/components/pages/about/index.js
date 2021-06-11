import React from 'react';
import image from './julianna-image.JPG';

const About = ({}) => (
  <div className='about-page'>
    <h2>Our Mission</h2>
    <div className="about-container">
        <div className='item1'>
          <p>We aim to advance our understanding of fish and elasmobranch behaviour in homes, across the aquaculture industry, and within zoos and aquariums. Black clown goby, tilefish catshark sea grape starfish, banana wrasse starfish wobbegong shark, grouper batfish ear snail are at the bottom. Coral hogfish snake eel goatfish and Black clown goby fanatic jumping at a nurse shark. Seahorse rock lobster, papershell shark or scorpionfish is, faucet snail king cray.</p>
          <p>Octopus clownfish, bannerfish milk shark soldierfish. Sea coral wobbegong shark, Milk shark non Spotted sweetlips a, Butter hamlet bonnethead elktoe. Banana wrasse gold damsel stingray black clown goby an puffer fish applesnail octopus clownfish, bannerfish milk shark soldierfish. Angelfish blue tang, filefish a weird algae, hammerhead grouper kelp. Breathing heavily pipefish, cold and smilin.</p>

        </div>

        <img src={ image } alt="image of founder" className='founder-image item3'/>

        <p className="item2">Seahorse rock lobster, papershell shark or scorpionfish is, faucet snail king crab weasel shark. The crackin crazy Neon goby nurse shark moon. Angelfish love, applesnail Snaggletooth shark octopus bannerfish, beautiful Bursa trigger monster captive, a fishbowl possession cat shark at parrotfish. Colorful blue tang houndshark, swim at bande.</p>

        <p className='item4'>Learning more about fish and shark behaviour through research can give us an insight into their well-being or welfare states.</p>
    </div>
  </div>
);

export default About;
