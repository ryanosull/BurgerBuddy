import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";

function App() {

  //****************

  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/authorized")
    .then(resp => {
      if (resp.ok) {
        resp.json().then(user => {setUser(user)})
      } else {
        resp.json().then(() => setUser(null))
      }
    })
  }, [])

  // if (!user) return (
  //   //jsx 47min in lecture
  //   <>
  //   <Login /> 
  //   </>
  // )


    console.log("test")



  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;




{/* <BrowserRouter>
    
<div className="App">
  <Switch>
    <Route path="/testing">
      <h1>Test Route</h1>
    </Route>
    <Navbar/>
    <Route path="/">
      <h1>Page Count: {count}</h1>
    </Route>
  </Switch>
</div>
<Login />
<br />
<Signup />
</BrowserRouter> */}