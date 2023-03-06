import React, {useState, useEffect} from "react";
import "./ReviewCard.css";
import BurgerInfo from "./BurgerInfo";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'; 








function ReviewCard ({review}) {

    //filter and sort: sortyby: hi to low price, high to low rating
    //filter: 

    const [burgerInfo, setBurgerInfo] = useState(false)

    const [burgers, setBurgers] = useState([])

    useEffect(() => fetchBurgers(), [])

    function fetchBurgers () {
        fetch("/burgers")
        .then(r => r.json())
        .then(setBurgers)
    }

    // const review = {reviews.image}

    // console.log(burger)
    // console.log(burger)
    
    // function handleClick () {
    //     alert("hello asshole")
    // }

    console.log(review)


    return (
        <div id="reviewCard">
            <Card
                body
                color="warning"
                style={{
                    width: '18rem'
                }}
                >
                <img
                    id="reviewCardImg"
                    alt="Sample"
                    src={review.image}
                />
                <CardBody>
                    <CardTitle tag="h5">
                    Restaurant: {review.burger.restaurant_id}
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Rating: {review.rating}/10
                    </CardSubtitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Protein: {review.burger.protein.toUpperCase()}
                    </CardSubtitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Price: ${review.price}
                    </CardSubtitle>
                    <CardText>
                    {review.content}
                    </CardText>
                    <Button onClick={() => setBurgerInfo(!burgerInfo)}>
                        {burgerInfo && <BurgerInfo burgers={burgers}  />}
                    View Burger Info
                    </Button>
                    <Button>Edit Review</Button>
                    <Button>Delete Review</Button>
                </CardBody>
            </Card>
        </div>
    );
};


export default ReviewCard;




// <div id="burgerCard" >
// <h4 className="burgerStuff" >{burger.bun}</h4>
// <h4 className="burgerStuff" >{burger.protein}</h4>
// <h4 className="burgerStuff" >{burger.cheese}</h4>
// <h4 className="burgerStuff" >{burger.veggies}</h4>
// <h4 className="burgerStuff" >{burger.condiments}</h4>
// <h4 className="burgerStuff" >{burger.extras}</h4>

// </div>