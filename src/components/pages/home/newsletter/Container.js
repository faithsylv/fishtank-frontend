import React from 'react';
import { render } from 'react-dom';
import NewsletterForm from './Form';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const NewsletterContainer = (props) => {

  const url = "https://gmail.us6.list-manage.com/subscribe/post?u=2a8a179301b38771923fd1ba3&amp;id=95a737af7c";

  return (
    <div>
      <p>Interested in fish and shark welfare? Sign up for our Newsletter to get involved. We will never send more than a few emails a month, and you can unsubscribe any time.</p>
      <MailchimpSubscribe
        url={url}
        isSubscribed = { props.isSubscribed }
        render={({ subscribe, status, message }) => (
          <NewsletterForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            isSubscribed = { props.isSubscribed }
            setIsSubscribed = { props.setIsSubscribed }
          />
        )}
      />
      </div>
  )

};

export default NewsletterContainer;
