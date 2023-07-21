import React, {useState,useEffect} from "react";
import "./Navbar.css";
import {NavLink, useHistory} from "react-router-dom";



function Navbar (args) {
//pass in {curentUser} ^

//need users passed down here. NavBar should read: Hey, {user.first_name}
    //make a fetch to users/:id 

    const [user, setUser] = useState(null) // user state initialized as null


    useEffect( () => {
    fetch(`/users/${args.currentUser}`,	{
        headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.uid
        } 
    } )
    .then(resp => resp.json())
    .then(data => setUser(data))
    }, []);

    console.log("navbar", user);










    const history = useHistory()


    // // 07/01 on logout, remove uid local storage - see pdawg rev. 1 2:05
    // function handleLogout () {
    //     // window.alert("test")
    //     fetch('/logout', {
    //         method: 'DELETE'
    //     })
    //     .then((res) => {
    //         if (res.ok){
    //             args.setCurrentUser(null)// not sure if this is necessary after storage.remove
    //             history.push("/")
    //             //remove uid from local storage
    //         }
    //     })
    // };



    return (
        <div id="navbarCont">
            <h1 className="heyBuddy">Hey, &nbsp;{"user.first_name"}</h1>

            <NavLink to="/myreviews" className="navButtons" >My Reviews</NavLink>

            <NavLink to="/newreview" className="navButtons" >New Review</NavLink>

            <NavLink to="/myprofile" className="navButtons" >Profile</NavLink>
            
            {/* <NavLink onClick={handleLogout} to="/" className="navButtons" >Logout</NavLink> */}
        </div>
    );
};

export default Navbar;