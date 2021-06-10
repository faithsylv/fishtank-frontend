import React, { useCallback, useContext, useEffect } from "react"
import { UserContext } from "../../../contexts/UserContext"
import FileUpload from './FileUpload';

const Contribute = () => {
  const [userContext, setUserContext] = useContext(UserContext)

  const fetchUserDetails = useCallback(() => {
    fetch(process.env.REACT_APP_API_ENDPOINT + "users/me", {
      method: "GET",
      credentials: "include",
      // Pass authentication token as bearer token in header
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userContext.token}`,
      },
    }).then(async response => {
      if (response.ok) {
        const data = await response.json()
        setUserContext(oldValues => {
          console.log('user data is:', data)
          return { ...oldValues, details: data }
        })
      } else {
          setUserContext(oldValues => {
            return { ...oldValues, details: null }
          })
      }
    })
  }, [setUserContext, userContext.token])

  useEffect(() => {
    // fetch only when user details are not present
    if (!userContext.details) {
      fetchUserDetails()
    }
  }, [userContext.details, fetchUserDetails])


  return (
    <div>
      <h1>Contribute to Our Research Project</h1>

        {!userContext.details ? '' :
        <p>
          Welcome {userContext.details.firstName} {userContext.details.lastName}
        </p>
        }

      <FileUpload />

    </div>
  )
};
export default Contribute;
