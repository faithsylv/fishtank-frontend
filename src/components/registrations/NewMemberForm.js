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
      <form onSubmit={ formSubmitHandler } className="new-member-form">
        <label>
        Where are you located?
        <select id="question1" name="question1" onChange = { event => setQuestion1(event.target.value) } className='dropdown' required>
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
        Would you like to participate in enrichment research on fish and elasmobranchs?
        <select id="question2" name="question2" onChange = { event => setQuestion2(event.target.value) } className='dropdown' required>
          <option value="">Please Select One</option>
          <option value="1">Yes</option>
          <option value="1">No</option>
        </select>
        </label>

        <label>
        Do you currently practice enrichment with fish or elasmobranchs, and if so, how often?
        <select id="question3" name="question3" onChange = { event => setQuestion3(event.target.value) } className='dropdown' required>
          <option value="">Please Select One</option>
          <option value="1">Yes - daily</option>
          <option value="1">Yes - weekly</option>
          <option value="1">Yes - monthly</option>
          <option value="1">Yes - annually</option>
          <option value="1">Yes - rarely</option>
          <option value="2">No</option>
        </select>
        </label>

        <label>
        How many individuals are in your care?
        <select id="question4" name="question4" onChange = { event => setQuestion4(event.target.value) } className='dropdown' required>
          <option value="">Please Select One</option>
          <option value="1">1 - 10</option>
          <option value="2">10 - 50</option>
          <option value="2">10 - 50</option>
          <option value="2">50 +</option>
          <option value="2">None</option>
        </select>
        </label>

        <label>
        Which species are in your care?
        <select id="question5" name="question5" onChange = { event => setQuestion5(event.target.value) } className='dropdown' required>
          <option value="">Please Select One</option>
          <option value="1">Sharks</option>
          <option value="2">Skates</option>
          <option value="3">Rays</option>
          <option value="3">Sawfish</option>
        </select>
        </label>

        <label>
        Are you able to commit to taking two 10-minute videos and scoring them using Microsoft Excel?
        <select id="question6" name="question6" onChange = { event => setQuestion6(event.target.value) } className='dropdown' required>
          <option value="">Please Select One</option>
          <option value="1">Yes</option>
          <option value="2">Possibly - I need to know more.</option>
          <option value="3">No</option>
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
