import React from "react";
import "./Navbar.css";



function Navbar () {









    return (
        <div id="navbarCont">
            <h1 className="heyBuddy">Hey, buddy</h1>
            <h3 className="navButtons" >My Reviews</h3>
            <h3 className="navButtons" >New Restaurant</h3>
            <h3 className="navButtons" >New Burger</h3>
            <h3 className="navButtons" >Logout</h3>
        </div>
    );
};

export default Navbar;