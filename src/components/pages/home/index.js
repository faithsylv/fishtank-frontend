import React, { Component } from 'react';
import NewsletterContainer from './newsletter/Container';

class Home extends Component {

  render() {
    return (
      <div>
        I'm the homepage!
        <NewsletterContainer isSubscribed = { this.props.isSubscribed } setIsSubscribed = { this.props.setIsSubscribed }/>
      </div>
    );
  }
}

export default Home;
