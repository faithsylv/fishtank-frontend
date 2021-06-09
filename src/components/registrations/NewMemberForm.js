import React, { useContext, useState} from 'react';
import { UserContext } from '../../contexts/UserContext';
import {useHistory} from 'react-router-dom';

import $ from 'jquery';


const NewMemberForm = (props) => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [userContext, setUserContext] = useContext(UserContext);


  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [question4, setQuestion4] = useState("");
  const [question5, setQuestion5] = useState("");
  const [question6, setQuestion6] = useState("");

  let history = useHistory();

  const formSubmitHandler = event =>  {
    event.preventDefault();
    setIsSubmitting(true);

    $('.form-button').html("Saving...");

    setError("");

    const genericErrorMessage = "Something went wrong! Please try again.";

    fetch(process.env.REACT_APP_API_ENDPOINT + 'users/update', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
      body: JSON.stringify({ question1, question2, question3, question4, question5, question6}),
    })
      .then(async response => {
        console.log('posted...')
        console.log(userContext)
        setIsSubmitting(false)
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please make a selection for each question ")
          } else {
            setError(genericErrorMessage)
          }
        } else {
          const data = await response.json()
          console.log('response should be true for new member form submit:', data);
          console.log('redirecting');
          history.push("/research-project/contribute");
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
        What brought you to our website?
        <select id="question1" name="question1" onChange = { event => setQuestion1(event.target.value) } required>
          <option value="">Please Select One</option>
          <option value="1">A colleague / friend mentioned it</option>
          <option value="2">Found on search engine</option>
          <option value="3">Social media</option>
        </select>
        </label>

        <label>
        What is your role?
        <select id="question2" name="question2" onChange = { event => setQuestion2(event.target.value) } required>
          <option value="">Please Select One</option>
          <option value="1">PhD candidate / student</option>
          <option value="1">Marine Biologist</option>
          <option value="3">Field Researcher</option>
          <option value="4">Hobbyist</option>
          <option value="5">In industry</option>
        </select>
        </label>

        <label>
        Are you directly involved with field work and have access to fish to contribute to this project?
        <select id="question3" name="question3" onChange = { event => setQuestion3(event.target.value) } required>
          <option value="">Please Select One</option>
          <option value="1">Yes</option>
          <option value="2">No</option>
        </select>
        </label>

        <label>
        Are you interested primarily in large or small fish?
        <select id="question4" name="question4" onChange = { event => setQuestion4(event.target.value) } required>
          <option value="">Please Select One</option>
          <option value="1">Large</option>
          <option value="2">Small</option>
        </select>
        </label>

        <label>
        Where are you located?
        <select id="question5" name="question5" onChange = { event => setQuestion5(event.target.value) } required>
          <option value="">Please Select One</option>
          <option value="1">Europe</option>
          <option value="2">North America</option>
          <option value="3">South America</option>
          <option value="4">Africa</option>
          <option value="5">Russia</option>
          <option value="6">Asia</option>
          <option value="7">Australia / New Zealand / Pacific Island Nations</option>
          <option value="8">Antarctica</option>
        </select>
        </label>

        <label>
        What is your role?
        <select id="question6" name="question6" onChange = { event => setQuestion6(event.target.value) } required>
          <option value="">Please Select One</option>
          <option value="1">PhD candidate / student</option>
          <option value="2">Marine Biologist</option>
          <option value="3">Field Researcher</option>
          <option value="4">Hobbyist</option>
          <option value="5">In industry</option>
        </select>
        </label>

        <button className = "form-button" type="submit" disabled={ isSubmitting }>
         Submit
        </button>
      </form>
    </div>
  );
}

export default NewMemberForm;
