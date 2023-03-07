import React from "react";
import {useState, useEffect} from "react"
import ReviewCard from "./ReviewCard"




function MyReviews ({currentUser}) {

    const [reviews, setReviews] = useState([])

    useEffect(() => fetchReviews(), [])

    function fetchReviews () {
        fetch("/reviews")
        .then(r => r.json())
        .then(setReviews)
    }

    const deleteReview = (id) => setReviews(current => current.filter(review => review.id !== id)) 


    const renderReviewCard = reviews.filter(review => review.user.id === currentUser.id).map (review =>
        <ReviewCard
        review={review}
        key={review.id}
        deleteReview={deleteReview}
        />
        )





    return (
        <div>
            {renderReviewCard}
        </div>
    );
};


export default MyReviews;
