import './App.scss';
import Nav from './common/Nav';
import { useContext, useState } from "react";
import { UserProvider }  from '../contexts/UserContext';


function App() {

  return (
    <div className="App">
      <UserProvider>
        <Nav />
      </UserProvider>

    </div>
  );
}

export default App;
