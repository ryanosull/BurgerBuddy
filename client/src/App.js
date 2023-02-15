import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);
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

  if (!user) return (
    //jsx 47min in lecture
    <>
    <Login /> 
    </>
  )


    console.log("test")



  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h1>Page Count: {count}</h1>
          </Route>
        </Switch>
      </div>
      <Navbar />
      <Login />
      <br />
      <Signup />
      
    </BrowserRouter>
  );
}

export default App;