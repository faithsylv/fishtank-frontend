import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';


const Research = () => {
    const [userContext, setUserContext] = useContext(UserContext)
  return (
    <div>
      <p>  This project aims to advance our understanding of elasmobranch behaviour in captive institutions. We will do this by bringing together a selection of large, forward-thinking institutions in Australia, alongside species experts and welfare scientists to work collectively.</p>
      <p>A starting point is to initiate a simple but impactful study across interested institutions to (1) determine baseline levels for elasmobranch movement and behaviour in zoos and aquariums and (2) observe and document elasmobranch response to enrichment.</p>
      <p>  This enhanced knowledge will support zoos and aquariums in providing innovative environments and enrichments for these animals to express behavioural diversity.</p>
      <p>This study proposes to bring together a selection of large, forward-thinking institutions in Australia, alongside species experts and welfare scientists to work collectively to advance our understanding of these animals.</p>
      <p>  A project advisory group would be established with representation from each organisation and the relevant scientists. This group will help shape the direction of the program and identify priority species or areas of interest to focus in on.</p>
      <p>To kickstart this program, a good starting point is to focus on developing our understanding of baseline behaviour in a range of species (multiple individuals across institutions). We would then conduct a simple enrichment study to evaluate any behavioural changes across animals in an effort to provide zoos and aquariums with a robust and innovative program that can be applied to animals in their care.
      </p>
      <p>  To kickstart this program, a good starting point is to focus on developing our understanding of baseline behaviour in a range of species (multiple individuals across institutions). We would then conduct a simple enrichment study to evaluate any behavioural changes across animals in an effort to provide zoos and aquariums with a robust and innovative program that can be applied to animals in their care.
      </p>
      <p>If this initial study is successful, the program of work can be built on to further advance understanding in this area.
      </p>
      { userContext.token ?
      <Link to="/research-project/contribute">Contribute to Project</Link> : ''
      }

    </div>

  )
};

export default Research;
