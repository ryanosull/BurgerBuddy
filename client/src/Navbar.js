import React from "react";
import "./Navbar.css";
import {NavLink, useHistory} from "react-router-dom";



function Navbar ({currentUser, setCurrentUser}) {
//pass in {curentUser} ^

//need users passed down here. NavBar should read: Hey, {user.first_name}

    const history = useHistory()

    function handleLogout () {
        // window.alert("test")
        fetch('/logout', {
            method: 'DELETE'
        })
        .then((res) => {
            if (res.ok){
                setCurrentUser(null)
                history.push("/")
                
            }
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