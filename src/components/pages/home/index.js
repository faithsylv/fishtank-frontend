import React, { Component } from 'react';
import WhaleWatchContainer from './whale-watch/Container'
import NewsletterContainer from './newsletter/Container';

class Home extends Component {

  render() {
    return (
      <div className="home grid-container">
        <NewsletterContainer isSubscribed = { this.props.isSubscribed } setIsSubscribed = { this.props.setIsSubscribed }/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed vero, aperiam deleniti, quasi dolores nam laborum enim, ducimus ea hic, officiis cum nihil blanditiis eligendi aspernatur commodi quidem amet velit!</p>
        <WhaleWatchContainer />
      </div>
    );
  }
}

export default Home;
