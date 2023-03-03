import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";



function Navbar () {









    return (
        <div id="navbarCont">
            <h1 className="heyBuddy">Hey, buddy</h1>

            <NavLink to="/myburgers" className="navButtons" >My Reviews</NavLink>

            <NavLink to="/newrestaurant" className="navButtons" >New Restaurant</NavLink>

            <NavLink to="/newburger" className="navButtons" >New Burger</NavLink>
            
            <NavLink to="/logout" className="navButtons" >Logout</NavLink>
        </div>
    );
};

export default Navbar;