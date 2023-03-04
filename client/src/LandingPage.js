import React from "react";
import "./LandingPage.css";
import Signup from "./Signup"
import Login from "./Login";








function LandingPage() {









    return (
        <div>
            <div id="burger" >
                <img id="spinBurger" src="https://media0.giphy.com/media/1zjPUNnijun6Jryjm3/giphy.gif?cid=6c09b9524y8r9c52ixjuiwg059yqvc6wxpe4ikv0fez4ygu6&rid=giphy.gif&ct=s" alt="" ></img>
            </div>
            <div id="signup">
                <Signup />
            </div>
            <div id="login">
                <Login />
            </div>
            
        </div>
    );
};

export default LandingPage;

//https://gifdb.com/images/high/animated-spinning-burger-emoji-uk2y78rq1c1r80oy.gif