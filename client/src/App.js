import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Reviews from "./Reviews";
import NewReviewForm from "./NewReviewForm";
import LandingPage from "./LandingPage";
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

  if (!currentUser) return (
    //jsx 47min in lecture
    <LandingPage setCurrentUser={setCurrentUser} /> 
  )

  // if (currentUser) return (
  //   <Navbar />
  // )

  // if (!currentUser) {
  //   <LandingPage />
  // } else {
  //   <Navbar />
  // }


  //navbar needs to be conditionally rendered so that it only appears once a user is logged in. dont forget to change "buddy" to {user.first_name}.



  return (
    <div className="app">
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>

      <Route exact path='/'>
        <LandingPage setCurrentUser={setCurrentUser} />
      </Route>

        <Route path="/myreviews">
          <Reviews currentUser={currentUser} />
        </Route>

        <Route path="/newreview" >
          <NewReviewForm  />
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
