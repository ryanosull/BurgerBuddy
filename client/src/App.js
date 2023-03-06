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
    <LandingPage /> 
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
      <Navbar currentUser={currentUser} />
      <Switch>

      <Route exact path='/'>
        <LandingPage />
      </Route>

        <Route path="/myreviews">
          <Reviews />
        </Route>

        <Route path="/newreview" >
          <NewReviewForm  />
        </Route>

        <Route  path="*">
          <div id="four">
            <h1 id="status">404</h1>
            <p id="message">This page doesn't exist, buddy.</p>
          </div>
        </Route>

      </Switch>

      

    </div>
  );
}

export default App;
