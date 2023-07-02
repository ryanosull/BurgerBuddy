import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Reviews from "./Reviews";
import NewReviewForm from "./NewReviewForm";
import LandingPage from "./LandingPage";
import Profile from "./Profile";
import "./App.css";




function App() {

  const [currentUser, setCurrentUser] = useState(null) //set to null so currentUser is falsey before truthy

  // useEffect(() => {
  //   fetch("/authorized")
  //   .then(r => {
  //     if (r.ok) {
  //       r.json().then(user => setCurrentUser(user))
  //     } else {
  //       r.json().then(() => setCurrentUser(null))
  //     }
  //   })
  // }, [])

    // useEffect( () => {
    //   if (localStorage.uid)
    //     fetch( "/auto_login", { headers: {
    //       'content/type': 'application/json',
    //       'auth-token': localStorage.uid
    //     } } )
    //     .then(r => r.json())
    //     .then(setCurrentUser)
    //   else
    //     console.log("No user info found.", "useEffect in App" )
    // }, []);


  useEffect( () => {
    if (localStorage.uid)
      console.log("User found:", localStorage.uid)
    else
      console.log("No user info found")
    }, [])

    fetch ("/login", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: "bob@example.com",
        password: "Bob12345!"
      })
    } )
      .then(resp => resp.json())
      .then(user => {
        localStorage.uid = user.uid
        setCurrentUser(user.id)
      })





  console.log(currentUser, "currentUser, App")
  // comment the c.log above out when you come back to this. 


  function editUserInfo (userData) {
    setCurrentUser(userData)
  }


  if (!currentUser) return ( // interesting behavior: (!currentUser || currentUser === null)
    //jsx 47min in lecture
    <LandingPage setCurrentUser={setCurrentUser} /> 
  )


  return (
    <div className="app">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>

      <Route exact path='/'>
        <LandingPage setCurrentUser={setCurrentUser} />
      </Route>

        <Route path="/myreviews">
          <Reviews currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>

        <Route path="/newreview" >
          <NewReviewForm  />
        </Route>

        <Route path="/myprofile" >
          <Profile currentUser={currentUser} editUserInfo={editUserInfo}  />
        </Route>

        <Route  path="*">
          <center>
            <div id="four">
              <p id="status">404</p>
              <p id="message">This page doesn't exist, buddy.</p>
            </div>
          </center>
        </Route>

      </Switch>

    </div>
  );
}

export default App;
