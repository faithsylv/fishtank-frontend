import './App.scss';
import Nav from './common/Nav';
import { useContext, useState } from "react";
import { UserProvider }  from '../contexts/UserContext';


function App() {

  return (
    <div className="App">
      <UserProvider>
      <section>
        <Nav />
        <div className='wave-container'>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
      </section>
      </UserProvider>
    </div>
  );
}

export default App;
