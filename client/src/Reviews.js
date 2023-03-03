import React from "react";
import {useState, useEffect} from "react"
import ReviewCard from "./ReviewCard"




function MyReviews () {

    const [reviews, setReviews] = useState([])

    useEffect(() => fetchReviews(), [])

    function fetchReviews () {
        fetch("/reviews")
        .then(r => r.json())
        .then(setReviews)
    }

    const renderReviewCard = reviews.map (review =>
        <ReviewCard
        review={review}
        key={review.id}
        />
        )



    return (
        <div>
            {renderReviewCard}
        </div>
    );
};


export default MyReviews;
