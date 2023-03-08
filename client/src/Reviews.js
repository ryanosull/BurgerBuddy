import React from "react";
import {useState, useEffect} from "react"
import ReviewCard from "./ReviewCard"
import "./Reviews.css"



function MyReviews ({currentUser}) {

    const [reviews, setReviews] = useState([])

    useEffect(() => fetchReviews(), [])

    function fetchReviews () {
        fetch("/reviews")
        .then(r => r.json())
        .then(setReviews)
    }

    const modifiedArray = (id) => setReviews(current => current.filter(review => review.id !== id)) 

    function handleDelete(){
        setReviews(modifiedArray)
    }


    const renderReviewCard = reviews.filter(review => review.user.id === currentUser.id).map (review =>
        <ReviewCard
        review={review}
        key={review.id}
        handleDelete={handleDelete}
        />
        )

        // if (reviews.filter( review => review.user.id !== currentUser.id)) return (
        //     <h1 id="noBurger">Go get yourself a burger, {currentUser.first_name}.</h1>
        // )

        //conditional not working here


    return (

        <div>
            {renderReviewCard}
        </div>
    
    );
};


export default MyReviews;
