import React, {useContext, useState } from 'react';
import { useHistory} from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';

//set separate logout component as useHistory isn't available withing component where Router tree is set up, so cannot redirect to home unless separate.
const Logout = (props) => {

  const [userContext, setUserContext] = useContext(UserContext);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  let history = useHistory();

  const logoutHandler = () => {
    setIsLoggingOut(true);
   fetch(process.env.REACT_APP_API_ENDPOINT + "users/logout", {
     credentials: "include",
     headers: {
       "Content-Type": "application/json",
       Authorization: `Bearer ${userContext.token}`,
     },
     }).then(async response => {
       setUserContext(oldValues => {
         return { ...oldValues, details: undefined, token: null }
       })
       window.localStorage.setItem("logout", Date.now())
       history.push('/');
     })
   }

   return(

    <button onClick={logoutHandler} className = 'logout-button'>
      {isLoggingOut ? 'Logging Out...' : 'Log Out'}
    </button>

  );
};

export default Logout;
