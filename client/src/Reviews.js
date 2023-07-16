import React from "react";
import {useState, useEffect} from "react"
import ReviewCard from "./ReviewCard"
import "./Reviews.css"



function Reviews (args) {

    const [reviews, setReviews] = useState([])

    // useEffect(() => fetchReviews(), [])

    // function fetchReviews () {
    //     fetch("/reviews")
    //     .then(r => r.json())
    //     .then(setReviews)
    // }



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
    }, [args.currentUser]);


    const modifiedArray = (id) => setReviews(current => current.filter(review => review.id !== id)) 

    function handleDelete(){
        setReviews(modifiedArray) //setCurrentUser
    }


    const renderReviewCard = reviews.filter(review => review.user.id === args.currentUser.id).map (review =>
        <ReviewCard
        review={review}
        key={review.id}
        handleDelete={handleDelete}
        modifiedArray={modifiedArray}
        setReviews={setReviews}
        />
        )


    return (

        <div id="reviewContainer" >
            {user.reviews.length > 0 ? renderReviewCard : <h1 id="noBurger">Go get yourself a burger, {user.first_name}.</h1>}
        </div>
    
    );
};


export default Reviews;
