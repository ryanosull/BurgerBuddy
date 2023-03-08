import React, {useState} from "react";
import "./ReviewCard.css";
import BurgerInfo from "./BurgerInfo";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'; 
// import  { useHistory, useParams } from 'react-router-dom'


function ReviewCard ({review, handleDelete}) {

    //filter and sort: sortyby: hi to low price, high to low rating
    //filter: 

    const [burgerInfo, setBurgerInfo] = useState(false)
    // const [errors, setErrors] = useState(null)
    // const history = useHistory()
    // const params = useParams()

    // const [burgers, setBurgers] = useState([])

    // useEffect(() => fetchBurgers(), [])

    // function fetchBurgers () {
    //     fetch("/burgers")
    //     .then(r => r.json())
    //     .then(setBurgers)
    // }
////// ^ not even using


    // const review = {reviews.image}

    // console.log(burger)
    // console.log(burger)
    
    // function handleClick () {
    //     alert("hello asshole")
    // }

    // className="mb-2 text-muted"

    function handleDeleteClick() {
        fetch(`/reviews/${review.id}`, {
            method: 'DELETE'
        })
        handleDelete(review.id)
    };


    return (
        <div id="reviewCard">
            <Card id="card" body>
                <img id="reviewCardImg" alt="dude where's my burger?"src={review.image}/>
                <CardBody>
                    <div>
                        <CardTitle className="test" tag="h5">Restaurant: {review.burger.restaurant_id}</CardTitle>
                        <CardSubtitle className="test mb-2" tag="h6" >Rating:&nbsp; {review.rating}/10</CardSubtitle>
                        <CardSubtitle className="test mb-2" tag="h6" >Protein:&nbsp; {review.burger.protein.toUpperCase()}</CardSubtitle>
                        <CardSubtitle className="test mb-2" tag="h6" > Price:&nbsp; ${review.price} </CardSubtitle>
                    </div>
                    <CardText id="content">{review.content}</CardText>
                    <div id="cardButtons" >
                        <Button onClick={() => setBurgerInfo(!burgerInfo)} id="info" >{burgerInfo && <BurgerInfo review={review}  />}View Burger Info</Button>
                        <Button id="edit" >Edit Review</Button>
                        <Button id="delete" onClick={handleDeleteClick} >Delete Review</Button>
                    </div>

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