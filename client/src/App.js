// import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// import Login from "./Login";
// import Signup from "./Signup";
import Navbar from "./Navbar";
import Burgers from "./Burgers";
import NewBurgerForm from "./NewBurgerForm";




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






  return (
    <div className="app">
      <Navbar />
      <Switch>

        <Route path="/myburgers">
          <Burgers />
        </Route>

        <Route path="/newburger" >
          <NewBurgerForm  />
        </Route>

        <Route path="*">
          <h1></h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
