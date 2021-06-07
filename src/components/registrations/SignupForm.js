import React, {useState} from 'react';
import { UserContext } from '../../contexts/UserContext';
import $ from 'jquery';

const SignupForm = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [userContext, setUserContext] = useState(UserContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = event => {
    event.preventDefault();
    setIsSubmitting(true);

    $('.form-button').html("Signing you up...");

    setError("");

    const genericErrorMessage = "Something went wrong! Please try again later."

    fetch(process.env.REACT_APP_API_ENDPOINT + "users/signup", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ firstName, lastName, username: email, password }),
    })
      .then(async response => {
        setIsSubmitting(false);
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!");
          } else if (response.status === 401) {
            setError("Invalid email and password combination.");
          } else if (response.status === 500) {
            console.log(response);
            const data = await response.json();
            if (data.message) setError(data.message || genericErrorMessage);
          } else {
            setError(genericErrorMessage);
          }
        } else {
          const data = await response.json();
          setUserContext(oldValues => {
            return { ...oldValues, token: data.token }
          })
        }
      })
        .catch(error => {
          setIsSubmitting(false);
          setError(genericErrorMessage);
        })
  }

  return (
    <div className="login-component">
      <form onSubmit={ formSubmitHandler } className="login-form">
        <label>
          <input
           className = "input-item first-name"
           placeholder = "First Name"
           name ="first-name"
           value = { firstName }
           onInput = { event => setFirstName(event.target.value) }
          />
        </label>
        <label>
          <input
           className = "input-item last-name"
           placeholder = "LastName"
           name = "last-name"
           value = { lastName }
           onInput= { event => setLastName(event.target.value) }
          />
        </label>
        <label>
          <input
           className = "input-item email"
           placeholder = "email"
           type ="email"
           name ="email"
           value = { email }
           onInput = { event => setEmail(event.target.value) }
          />
        </label>
        <label>
          <input
           className = "input-item password"
           placeholder = "password"
           type = "password"
           name = "password"
           value = { password }
           onInput= { event => setPassword(event.target.value) }
          />
        </label>
        <button className = "form-button" type="submit" disabled={ isSubmitting }>
         Sign up
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
