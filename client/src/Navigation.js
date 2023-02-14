import React from "react";



function Navigation () {



    function handleLogOut () {
        fetch('/logout', {
            method: 'DELETE'
        })
    }





    return (
        <div>
            navigation
        </div>
    );
};

export default Navigation