import React, {useState, useEffect} from "react";



// took this out 07/06 and it fucked shit up

const UserContext = React.createContext();

function UserProvider({ children }) { //args 7/21

    const [user, setUser] = useState(null);
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider

    // 7/21
  // useEffect( () => {
  //   fetch(`/users/${args.currentUser}`,	{
  //       headers: {
  //       'Content-Type': 'application/json',
  //       'auth-token': localStorage.uid
  //       } 
  //   } )
  //   .then(resp => resp.json())
  //   .then(data => setUser(data))
  //   }, []);



    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
    }
export { UserContext, UserProvider };