import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Reviews from "./Reviews";
import NewReviewForm from "./NewReviewForm";
import LandingPage from "./LandingPage";
import Profile from "./Profile";
import "./App.css";


function App() { // 7/21 likely do not needs App(args)

    const [currentUser, setCurrentUser] = useState(null)

	useEffect( () => {
    if (localStorage.uid)
		fetch('/auto_login', {headers: {
			'Content-Type': 'application/json',
			'auth-token': localStorage.uid
		} } )
		.then(resp => resp.json())
		.then(setCurrentUser)
    else
		console.log("User not found")
	}, []);


    console.log("app.js - currentUser:", currentUser)
  // comment the c.log above out when you come back to this. 


    function editUserInfo (userData) {
    setCurrentUser(userData)
    };


  if (currentUser === null) return ( // interesting behavior: (!currentUser || currentUser === null)
    <LandingPage setCurrentUser={setCurrentUser} /> 
)


	return (
		<div className="app">
		<Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />

		<Switch>

			<Route exact path='/'>
				<LandingPage currentUser={currentUser} setCurrentUser={setCurrentUser} />
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
	)
};

export default App;
