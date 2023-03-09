import React from "react";
import {useState, useEffect} from "react"
import ReviewCard from "./ReviewCard"
import "./Reviews.css"



function MyReviews ({currentUser, setCurrentUser}) {

    const [reviews, setReviews] = useState([])

    useEffect(() => fetchReviews(), [])

    function fetchReviews () {
        fetch("/reviews")
        .then(r => r.json())
        .then(setReviews)
    }

    

    const modifiedArray = (id) => setReviews(current => current.filter(review => review.id !== id)) 

    function handleDelete(){
        setReviews(modifiedArray) //setCurrentUser
    }


    const renderReviewCard = reviews.filter(review => review.user.id === currentUser.id).map (review =>
        <ReviewCard
        review={review}
        key={review.id}
        handleDelete={handleDelete}
        modifiedArray={modifiedArray}
        setReviews={setReviews}
        />
        )

        // if (reviews.filter( review => review.user.id !== currentUser.id)) return (
        //     <h1 id="noBurger">Go get yourself a burger, {currentUser.first_name}.</h1>
        // ) 

        //conditional not working here

        

    return (

        <div id="reviewContainer" >
            {currentUser.reviews.length > 0 ? renderReviewCard : <h1 id="noBurger">Go get yourself a burger, {currentUser.first_name}.</h1>}
        </div>
    
    );
};


export default MyReviews;
