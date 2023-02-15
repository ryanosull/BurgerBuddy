import React from "react";



function Navbar () {



    function handleLogOut () {
        fetch('/logout', {
            method: 'DELETE'
        })
    }





    return (
        <div>
            navbarrrrrrrrrrrrrrrr
        </div>
    );
};

export default Navbar;