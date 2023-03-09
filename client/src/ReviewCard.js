import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom'
import "./ReviewCard.css";
import BurgerInfo from "./BurgerInfo";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Row, Col, Label, Input } from 'reactstrap'; 
// import  { useHistory, useParams } from 'react-router-dom'


function ReviewCard ( args) {



    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    ////////////////

    const history = useHistory()



    const [burgerInfo, setBurgerInfo] = useState(false)
    // const [errors, setErrors] = useState(null)
    // const history = useHistory()
    // const params = useParams()

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => fetchRestaurants(), [])

    function fetchRestaurants () {
        fetch("/restaurants")
        .then(r => r.json())
        .then(setRestaurants)
    }

    const [formData, setFormData] = useState({
        content:'',
		rating: '',
        price:'',
        image:''
    })

    const {content, rating, price, image} = formData

    function editReview(){

        const editedReview = {
            content,
            rating,
            price,
            image
        }

        fetch(`/reviews/${args.review.id}`, {
            method: "PATCH",
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(editedReview)
        })
        .then(res => {
            if (res.ok){
                res.json().then(reviewData =>{
                    //callback
                    history.push('/myreviews')
                })
            }
        })
        toggle()
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }




    function handleDeleteClick() {
        fetch(`/reviews/${args.review.id}`, {
            method: 'DELETE'
        })
        args.handleDelete(args.review.id)
        args.setReviews(args.modifiedArray)

    };

    const restyName = restaurants.map(restaurant => restaurant.id === args.review.burger.restaurant_id ? restaurant.name : null)



    return (
        <div id="reviewCard">
            <Card id="card" body>
                <img id="reviewCardImg" alt="dude where's my burger?"src={args.review.image}/>
                <CardBody>
                    <div>
                        <CardTitle className="test" tag="h5">Restaurant: {restyName}</CardTitle>
                        <CardSubtitle className="test mb-2" tag="h6" >Rating:&nbsp; {args.review.rating}/10</CardSubtitle>
                        <CardSubtitle className="test mb-2" tag="h6" >Protein:&nbsp; {args.review.burger.protein.toUpperCase()}</CardSubtitle>
                        <CardSubtitle className="test mb-2" tag="h6" > Price:&nbsp; ${args.review.price} </CardSubtitle>
                    </div>
                    <CardText id="content">{args.review.content}</CardText>
                    <div id="cardButtons" >
                        <Button onClick={() => setBurgerInfo(!burgerInfo)} id="info" >{burgerInfo && <BurgerInfo review={args.review}  />}View Burger Info</Button>




                        {/* <Button id="edit" >Edit Review</Button> */}
        <Button id="edit"  onClick={toggle}>Edit review</Button>
        <Modal id="editReviewModal" isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader id="editReviewModalHeader" toggle={toggle}>Edit your review below. ✍️</ModalHeader>
        <ModalBody>

        <Form >
            <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col>
                <Label className=""for="exampleEmail">Content</Label>
                <Input type='text' name='content' value={content} onChange={handleChange}  placeholder={args.review.content} />
            </Col>
            <Col>
                <Label className=""for="examplePassword">Rating</Label>
                <Input type='number' min="0" max="10" step="1" name='rating' value={rating} onChange={handleChange}  placeholder={args.review.rating}/>
            </Col>
            <Col>
                <Label className=""for="examplePassword">Price</Label>
                <Input type='number' name='price' value={price} min="0" step="0.01" onChange={handleChange}  placeholder={args.review.price}/>
            </Col>
            <Col>
                <Label for="">Image</Label>
                <Input type='text' name='image' value={image} onChange={handleChange}  placeholder="image"/>
            </Col>

            </Row>
        </Form>

        

        </ModalBody>

        <ModalFooter>
            <Button id="saveChanges" type='submit' onClick={editReview}>Save changes</Button>{' '}
            <Button id="cancelButtonModal" onClick={toggle}>Cancel</Button>

        </ModalFooter>
        </Modal>




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