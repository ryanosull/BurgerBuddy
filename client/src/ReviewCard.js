import React from "react";
import "./ReviewCard.css";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'; 








function ReviewCard ({review}) {


    // const review = {reviews.image}

    // console.log(burger)
    // console.log(burger)
    


    return (
        
    <Card
        body
        color="warning"
        style={{
            width: '15rem'
        }}
        >
        <img
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
            Protein: {review.burger.protein}
            </CardSubtitle>
            <CardText>
            {review.content}
            </CardText>
            <Button>
            View burger info
            </Button>
        </CardBody>
    </Card>
        
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