import React, { useContext, useState} from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const LoginForm = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [userContext, setUserContext] = useState(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formSubmitHandler = event =>  {
    event.preventDefault();
    setIsSubmitting(true);

    $('.form-button').html("Logging in...");

    setError("");

    const genericErrorMessage = "Something went wrong! Please try again.";
    console.log(process.env.REACT_APP_API_ENDPOINT + "users/login");
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then(async response => {
        setIsSubmitting(false)
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!")
          } else if (response.status === 401) {
            setError("Invalid email and password combination.")
          } else {
            setError(genericErrorMessage)
          }
        } else {
          const data = await response.json()
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
          Log In
        </button>
      </form>

      <div>
       Not a member?  <Link to='/signup'>Sign up!</Link>
      </div>

    </div>
  );
}

export default LoginForm;
