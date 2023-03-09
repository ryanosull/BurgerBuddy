import React from "react";
import {useState, useEffect, useContext} from "react";
import "./NewReviewForm.css";
import { UserContext } from "./context/user";

function NewReviewForm () {

    const {user, setUser} = useContext(UserContext);
    const [restaurants, setRestaurants] = useState([])
    

    useEffect(() => fetchRestaurants(), [])

    function fetchRestaurants() {
        fetch("/restaurants")
        .then(r => r.json())
        .then(setRestaurants)
    }

///////////////////////////restaurants


    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state_abbr, setState_abbr] = useState("")
    const [zip, setZip] = useState("")

    function handleSubmitRestaurant (e) {
        e.preventDefault()

        let newResty = {
            name: name,
            address: address,
            city: city, 
            state_abbr: state_abbr,
            zip: zip
        }

        setName("")
        setAddress("")
        setCity("")
        setState_abbr("")
        setZip("")

        let restyPost = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newResty)
        }

        fetch("/restaurants", restyPost)
        .then(r => r.json())
        .then(newResty => setRestaurants([...restaurants, newResty]))
    }

///////////////////////////burgers
    const [burgers, setBurgers] = useState([])

    const [bun, setBun] = useState("")
    const [protein, setProtein] = useState("")
    const [cheese, setCheese] = useState("")
    const [veggies, setVeggies] = useState("")
    const [condiments, setCondiments] = useState("")
    const [extras, setExtras] = useState("")

    const [bur, setBur] = useState([])

    function handleSubmitBurger(e) {
        e.preventDefault()

        let newBurg = {
            bun: bun,
            protein: protein, 
            cheese: cheese,
            veggies: veggies, 
            condiments: condiments,
            extras: extras,
            restaurant_id: bur
            // restaurant_id: "" //this is going to be the value field of selected resty. value={resty.id}
            // //at the selected of the restaurant:
            // //
        }



        setBun("")
        setProtein("")
        setCheese("")
        setVeggies("")
        setCondiments("")
        setExtras("")

        let postRequest = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBurg)
        } //in video, fetch ends before first .then. how is this working?

        function burID(e) {
            setBur(e.target.value)
        }

        fetch("/burgers", postRequest)
        .then(r => r.json())
        .then(newBurg => setBurgers([...burgers, newBurg]))


    }
////////////////////////////reviews

    const [reviews, setReviews] = useState("") 

    const [content, setContent] = useState("")
    const [rating, setRating] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")

    function handleSubmitReview(e) {
        e.preventDefault()

        let newReview = {
            content: content, 
            rating: rating,
            price: price, 
            image: image
        }

        setContent("")
        setRating("")
        setPrice("")
        setImage("")

        let reviewPost = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
        }

        fetch("/reviews", reviewPost)
        .then(r => r.json())
        .then(newReview => console.log([...reviews, newReview]))


    }




//////////////////////////////

    return ( 
        <div>

            <label for="restaurants" className="newBurgFormHeader" id="restaurants">Select a restaurant:</label>
            <select name="restaurants" id="restyDropdown" >
                <option>Choose here</option>
                {restaurants.map (restaurant =>
                    <option id="fontTest" value={restaurant.id} >{restaurant.name}</option>
                    )}
            </select>
            <h2 className="newBurgFormHeader" >Or add a new restaurant</h2>

            <form onSubmit={handleSubmitRestaurant} >
            <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="restaurant name" value={name}  />
                <input onChange={(e) => setAddress(e.target.value)} type="text" name="address" placeholder="address" value={address}  />
                <input onChange={(e) => setCity(e.target.value)} type="text" name="city" placeholder="city" value={city}  />
                <input onChange={(e) => setState_abbr(e.target.value)} type="text" name="state_abbr" placeholder="state (CA, TX, NY, etc.)" value={state_abbr}  />
                <input onChange={(e) => setZip(e.target.value)} type="text" name="zip" placeholder="zip code" value={zip}  />
                <button type="submit" >Add your restaurant! 🍴</button>
            </form>


            <h2 className="newBurgFormHeader" >Describe your burger!</h2>
            <form onSubmit={handleSubmitBurger} >
                <input onChange={(e) => setBun(e.target.value)} type="text" name="bun" placeholder="what kind of bun?" value={bun} />
                <input onChange={(e) => setProtein(e.target.value)} type="text" name="protein" placeholder="how about protein?" value={protein} />
                <input onChange={(e) => setCheese(e.target.value)} type="text" name="cheese" placeholder="cheese, please" value={cheese} />
                <input onChange={(e) => setVeggies(e.target.value)} type="text" name="veggies" placeholder="hopefully some veggies" value={veggies} />
                <input onChange={(e) => setCondiments(e.target.value)} type="text" name="condiments" placeholder="any condiments?" value={condiments} />
                <input onChange={(e) => setExtras(e.target.value)} type="text" name="extras" placeholder="any extras?" value={extras} />

                <button type="submit" >Add your burger! 🍔</button>
            </form>

            <form onSubmit={handleSubmitReview}>
                <h2 className="newBurgFormHeader" >Leave your review!</h2>
                
                <input onChange={(e) => setContent(e.target.value)} type="text" name="content" placeholder="content" value={content} />

                <input onChange={(e) => setRating(e.target.value)} type="number" name="rating" placeholder="rating (1-10)" value={rating} min="0" />

                <input onChange={(e) => setPrice(e.target.value)} type="number" name="price" placeholder="price" step="0.01" min="0" value={price} />

                <input onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="imageURL" value={image} />

                <button type="submit" >Add your review! 🍔</button>
            </form>

        </div>
    );
};


export default NewReviewForm;

// when a resty is selected we will use the value of resty.id to associate with burger, but when a new resty is created we must use the value of newresty.id 

// review will be created last. the order should be:
//first, choose or create a resty
//next, describe your burger
//finally, leave a review 
// how to associate burger with resty, review with burger?
//when selected we can use the resty.id as the value, and then under the hood (not on frontend) we take the value of the selection add it to the post of burger
//see dropdown option and newBurg object in POST