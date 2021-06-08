import React, {useContext } from 'react';
import { useHistory} from "react-router-dom";
import { UserContext } from '../../contexts/UserContext';


const Logout = (props) => {

  const [userContext, setUserContext] = useContext(UserContext);

  let history = useHistory();

  const logoutHandler = () => {
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

    <button onClick={logoutHandler} className = 'logout-button'>Log Out</button>

  );
};

export default Logout;
