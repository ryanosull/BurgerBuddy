import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";



function Navbar ({currentUser}) {
//pass in {curentUser} ^

//need users passed down here. NavBar should read: Hey, {user.first_name}

    function handleLogout () {
        // window.alert("test")
        fetch('/logout', {
            method: 'DELETE'
        })
    }

    

    return (
        <div id="navbarCont">
            <h1 className="heyBuddy">Hey, &nbsp;{currentUser.first_name}</h1>

            <NavLink to="/myreviews" className="navButtons" >My Reviews</NavLink>

            <NavLink to="/newreview" className="navButtons" >New Review</NavLink>
            
            <NavLink onClick={handleLogout} to="/" className="navButtons" >Logout</NavLink>
        </div>
    );
};

export default Navbar;