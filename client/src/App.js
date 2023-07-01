import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Reviews from "./Reviews";
import NewReviewForm from "./NewReviewForm";
import LandingPage from "./LandingPage";
import Profile from "./Profile";
import "./App.css";




function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch("/authorized")
    .then(r => {
      if (r.ok) {
        r.json().then(user => setCurrentUser(user))
      } else {
        r.json().then(() => setCurrentUser(null))
      }
    })
  }, [])

  console.log(currentUser)
  // comment the c.log above out when you come back to this. 


  function editUserInfo (userData) {
    setCurrentUser(userData)
  }


  if (!currentUser) return (
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
