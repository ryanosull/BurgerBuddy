// import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// import Signup from "./Signup";
import Navbar from "./Navbar";
import Reviews from "./Reviews";
import NewReviewForm from "./NewReviewForm";
import LandingPage from "./LandingPage";




function App() {

  //****************

  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   fetch("/authorized")
  //   .then(resp => {
  //     if (resp.ok) {
  //       resp.json().then(user => {setUser(user)})
  //     } else {
  //       resp.json().then(() => setUser(null))
  //     }
  //   })
  // }, [])

  // if (!user) return (
  //   //jsx 47min in lecture
  //   <>
  //   <Login /> 
  //   </>
  // )


  //navbar needs to be conditionally rendered so that it only appears once a user is logged in. dont forget to change "buddy" to {user.first_name}.



  return (
    <div className="app">
      <Navbar />
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
          <h1>404</h1>
        </Route>

      </Switch>

      

    </div>
  );
}

export default App;
