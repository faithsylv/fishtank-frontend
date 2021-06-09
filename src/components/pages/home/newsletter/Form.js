import React, {useState} from 'react';

//{thing && whattoshowifthingistrue}

const NewsletterForm = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const url = "https://gmail.us6.list-manage.com/subscribe/post?u=2a8a179301b38771923fd1ba3&amp;id=95a737af7c";

  const formSubmitHandler = (event) => {

    event.preventDefault();
    setIsSubmitting(true);
    props.setIsSubscribed(true);

    document.getElementById('newsletter-form').submit();

  }

  return (
  <div class='newsletter-container'>
    <form action={ url } onSubmit={formSubmitHandler} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" id='newsletter-form' novalidate>
      <input
       className = "input-item first-name"
       id="mce-FNAME"
       placeholder = "First Name"
       name ="FNAME"
       value = { firstName }
       onInput = { event => setFirstName(event.target.value) }
       disabled={ props.isSubscribed }
       required
      />
      <input
       className = "input-item last-name"
       id="mce-LNAME"
       placeholder = "LastName"
       name = "LNAME"
       value = { lastName }
       onInput= { event => setLastName(event.target.value) }
       disabled={ props.isSubscribed }
       required
      />
      <input
         className = "input-item email"
         id="mce-EMAIL"
         placeholder = "email"
         type ="email"
         name ="EMAIL"
         value = { email }
         onInput = { event => setEmail(event.target.value) }
         disabled={ props.isSubscribed }
         required
      />

    <button className = "form-button" type="submit" disabled={ props.isSubscribed }>
      {props.isSubscribed ? 'Subscribed' : 'Subscribe'}
    </button>
    </form>
  </div>
  )
}

export default NewsletterForm;
