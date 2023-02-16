import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";



function Navbar () {









    return (
        <div id="navbarCont">
            <h1 className="heyBuddy">Hey, buddy</h1>

            <NavLink to="/myburgers" className="navButtons" >My Burgers</NavLink>

            <h3 className="navButtons" >New Restaurant</h3>

            <NavLink to="/newburger" className="navButtons" >New Burger</NavLink>
            
            <h3 className="navButtons" >Logout</h3>
        </div>
    );
};

export default Navbar;