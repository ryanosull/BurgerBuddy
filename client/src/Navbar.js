import React from "react"; //, {useState, useEffect}
import "./Navbar.css";
import {NavLink, useHistory} from "react-router-dom";



function Navbar (args) { //currentUser (with ID) being passed in


    //README
    // this code commented out because i fetched user info in app, and passed user down. which is the best way to go about this? 

    // const [user, setUser] = useState(null) // user state initialized as null


    // useEffect( () => {
    // fetch(`/users/${args.currentUser}`,	{
    //     headers: {
    //     'Content-Type': 'application/json',
    //     'auth-token': localStorage.uid
    //     } 
    // } )
    // .then(resp => resp.json())
    // .then(data => setUser(data))
    // }, [args.currentUser]);

    // console.log("navbar user", user);


    // console.log("navbar currentUser:", args.currentUser) //this works



    const history = useHistory()


    // function handleLogout () {              //10/25
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


    const handleLogout = () => {
		localStorage.removeItem('uid') // remove 'uid' from localStorage
		// setCurrentUser(null) // reset user state to 'null'
        //then history to landing page
	}


    return (
        <div id="navbarCont">
            {/* <h1 className="heyBuddy">Hey, &nbsp;{user.first_name}</h1> */}
            {args.userInfo && <h1 className="heyBuddy">Hey, &nbsp;{args.userInfo.first_name}</h1>}

            <NavLink to="/myreviews" className="navButtons" >My Reviews</NavLink>

            <NavLink to="/newreview" className="navButtons" >New Review</NavLink>

            <NavLink to="/myprofile" className="navButtons" >Profile</NavLink>
            
            <NavLink onClick={handleLogout} to="/" className="navButtons" >Logout</NavLink>
        </div>
    )
};

export default Navbar;