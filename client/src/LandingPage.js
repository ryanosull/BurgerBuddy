import React from "react";
import "./LandingPage.css";
import Signup from "./Signup";
import Login from "./Login";
import spinBurger from "../src/assets/spinburger.webp"


function LandingPage(args) {


    return (
        <div>
            <h1 id="header">Hey, buddy</h1>
            <div id="burger" >
                <img id="spinBurger" src={spinBurger} alt="" ></img>
            </div>
            <div id="signup">
                <Signup setCurrentUser={args.setCurrentUser} />
            </div>
            <div id="login">
                <Login currentUser={args.currentUser} setCurrentUser={args.setCurrentUser} />
            </div>
            
        </div>
    );
};

export default LandingPage;

//https://gifdb.com/images/high/animated-spinning-burger-emoji-uk2y78rq1c1r80oy.gif

// spinburger: "https://media0.giphy.com/media/1zjPUNnijun6Jryjm3/giphy.gif?cid=6c09b9524y8r9c52ixjuiwg059yqvc6wxpe4ikv0fez4ygu6&rid=giphy.gif&ct=s"