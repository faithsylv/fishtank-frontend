import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about'

import LoginForm from '../registrations/LoginForm';
import SignupForm from '../registrations/SignupForm';

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

class Nav extends Component {

  constructor () {
    super();
    this.state = {
      showLogInModal: false,
      showSignUpModal: ''
    };
    this.handleOpenLogInModal = this.handleOpenLogInModal.bind(this);
    this.handleCloseLogInModal = this.handleCloseLogInModal.bind(this);
    this.handleOpenSignUpModal = this.handleOpenSignUpModal.bind(this);
    this.handleCloseSignUpModal = this.handleCloseSignUpModal.bind(this);
  }

  handleOpenLogInModal () {

    if (this.state.showSignUpModal === true) {
      this.setState( { showSignUpModal: false } )
    }

   this.setState({ showLogInModal: true });
  }

  handleCloseLogInModal () {
   this.setState({ showLogInModal: false });
 }

  handleOpenSignUpModal () {

    if (this.state.showLogInModal === true) {
      this.setState( { showLoginModal: false } )
    }
    this.setState({ showSignUpModal: true });
  }

  handleCloseSignUpModal () {
   this.setState({ showSignUpModal: false });
 }

  render() {

    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/research-project">Open Source Research</Link>
            </li>
            <li>
              <Link to="/research-project/contribute">Contribute</Link>
            </li>
          </ul>

          <div>
            <button onClick={this.handleOpenLogInModal} className = 'login-button'>Log In</button>
            <Modal
              isOpen={this.state.showLogInModal}
              className="Modal login"
              overlayClassName="Overlay"
              onRequestClose={this.handleCloseLogInModal}
              contentLabel='login popup'
            >
              <button onClick={this.handleCloseLogInModal} className='modal-close'>X</button>
              <LoginForm handleClose={ this.handleCloseLogInModal }/>

              <div>
               Not a member?  <a onClick={this.handleOpenSignUpModal}>Sign Up</a>
              </div>

            </Modal>

            <button onClick={this.handleOpenSignUpModal} className = 'login-button'>Sign Up</button>
            <Modal
              isOpen={this.state.showSignUpModal}
              className="Modal login"
              overlayClassName="Overlay"
              onRequestClose={this.handleCloseSignUpModal}
              contentLabel='login popup'
            >
              <button onClick={this.handleCloseSignUpModal} className='modal-close'>X</button>
              <SignupForm handleClose={ this.handleCloseSignUpModal }/>

              <div>
               Already a member?  <a onClick={this.handleOpenLogInModal}>Log In</a>
              </div>

            </Modal>
          </div>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default Nav;
