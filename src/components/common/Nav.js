import React, { useCallback, useEffect, useState, useContext } from 'react';
import { HashRouter as Router, Switch, Route, Link, useHistory} from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';

import Home from '../pages/home';
import About from '../pages/about';
import Pets from '../pages/pets'
import Research from '../pages/research';
import Contribute from '../pages/research/Contribute'

import LoginForm from '../registrations/LoginForm';
import SignupForm from '../registrations/SignupForm';
import NewMemberForm from '../registrations/NewMemberForm';
import Logout from './Logout'

import logo from './SharkLogo.png'

import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

const Nav = (props) => {

  const [userContext, setUserContext] = useContext(UserContext);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleOpenLogInModal = () => {

    if (showSignUpModal === true) {
      setShowSignUpModal(false)
    }

   setShowLogInModal(true);
  }

  const handleCloseLogInModal = () => {
   setShowLogInModal(false);
 }

  const handleOpenSignUpModal = () => {

    if (showLogInModal === true) {
      setShowLogInModal(false);
    }
    setShowSignUpModal(true);
  }

  const handleCloseSignUpModal = () => {
   setShowSignUpModal(false);
 }

  const verifyUser = useCallback(() => {
  console.log('verifying...');

  fetch(process.env.REACT_APP_API_ENDPOINT + "users/refreshToken", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  }).then(async response => {
    console.log('response is: ',response);
    if (response.ok) {
      const data = await response.json()
      setUserContext(oldValues => {
        return { ...oldValues, token: data.token }
      })
    } else {
      setUserContext(oldValues => {
        return { ...oldValues, token: null }
      })
    }
    // call refreshToken every 5 minutes to renew the authentication token.
    setTimeout(verifyUser, 5 * 60 * 1000)
  })
  }, [setUserContext])

  useEffect(() => {
    console.log('verifying user');
    verifyUser()
  }, [verifyUser])

  return (
    <Router>
      <div>
        <h1 className='site-title'>
          <span>F</span>
          <span>i</span>
          <span>s</span>
          <span>h</span>
          <span>T</span>
          <span>a</span>
          <span>n</span>
          <span>k</span>
        </h1>
        <div className="navbar grid-container">
          <div className='nav1'>
            <img src={logo} alt="Fish Tank Logo as Line Drawing of Shark" className='logo'/>
          </div>
          <div className='nav2'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/pets">For Pets!</Link>
              </li>
              <li>
                <Link to="/research-project">Research Project</Link>
              </li>
              {userContext.token ?
              <li>
                <Link to="/research-project/contribute">Contribute to Project</Link>
              </li> : ''}
              <li>
                <Link to="/contact">Get in Touch</Link>
              </li>
            </ul>
          </div>
          <div className='nav3'>
            {userContext.token ? '' :
            <button onClick={handleOpenLogInModal} className = 'login-button'>Log In</button>}

            {userContext.token ? '' :
            <button onClick={handleOpenSignUpModal} className = 'signup-button'>Sign Up</button>}

            {userContext.token ?
            <Logout /> : ''}
          </div>

        </div>
        <div>
          <Modal
            isOpen={showLogInModal}
            className="Modal login"
            overlayClassName="Overlay"
            onRequestClose={handleCloseLogInModal}
            contentLabel='login popup'
          >
            <button onClick={handleCloseLogInModal} className='modal-close'>X</button>
            <LoginForm handleClose={ handleCloseLogInModal }/>

            <div>
             Not a member?  <a onClick={handleOpenSignUpModal} className='modal-link'>Sign Up</a>
            </div>

          </Modal>

          <Modal
            isOpen={showSignUpModal}
            className="Modal login"
            overlayClassName="Overlay"
            onRequestClose={handleCloseSignUpModal}
            contentLabel='login popup'
          >
            <button onClick={handleCloseSignUpModal} className='modal-close'>X</button>
            <SignupForm handleClose={ handleCloseSignUpModal }/>

            <div>
             Already a member? <a onClick={handleOpenLogInModal} className='modal-link'>Log In</a>
            </div>

          </Modal>
        </div>

        <Switch>
          <Route exact path="/">
            <Home isSubscribed = { isSubscribed } setIsSubscribed = { setIsSubscribed }/>
          </Route>
          <Route exact path="/new-member-form">
            <NewMemberForm />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/Pets">
            <Pets />
          </Route>
          <Route exact path="/research-project">
            <Research />
          </Route>
          <Route exact path="/research-project/contribute">
            <Contribute />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default Nav;
