import React, { Component } from 'react';
import LoginForm from '../../registrations/LoginForm';

class Home extends Component {

  render() {
    return (
      <div>
        <LoginForm />

        I'm the homepage!
      </div>
    );
  }
}

export default Home;
