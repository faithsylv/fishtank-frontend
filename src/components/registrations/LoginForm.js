import React, { useContext, useState} from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {

  let history = useHistory();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [userContext, setUserContext] = useContext(UserContext);

  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("chicken");

  const formSubmitHandler = event =>  {
    event.preventDefault();
    setIsSubmitting(true);

    setError("");

    const genericErrorMessage = "Something went wrong! Please try again.";

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
          console.log('data', data);
          setUserContext(oldValues => {
            return { ...oldValues, token: data.token }
          })
          props.handleClose();
          history.push("/research-project/contribute");
          //TODO: redirect to research-project/contribute page
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
        <input
           className = "input-item email"
           placeholder = "email"
           type ="email"
           name ="email"
           value = { email }
           onInput = { event => setEmail(event.target.value) }
           required
        />
        <input
           className = "input-item password"
           placeholder = "password"
           type = "password"
           name = "password"
           value = { password }
           onInput= { event => setPassword(event.target.value) }
           required
        />
        <button className = "form-button" type="submit" disabled={ isSubmitting }>
          {isSubmitting ? 'Logging In...' : 'Log In'}
        </button>
      </form>

    </div>
  );
}

export default LoginForm;
