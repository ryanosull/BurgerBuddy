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



/////////
    const [burgers, setBurgers] = useState([])

    const [bun, setBun] = useState("")
    const [protein, setProtein] = useState("")
    const [cheese, setCheese] = useState("")
    const [veggies, setVeggies] = useState("")
    const [condiments, setCondiments] = useState("")
    const [extras, setExtras] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        let newBurg = {
            bun: bun,
            protein: protein, 
            cheese: cheese,
            veggies: veggies, 
            condiments: condiments,
            extras: extras,
            restaurant_id: "" //this is going to be the value field of selected resty. value={resty.id}
            //at the selected of the restaurant:
            //
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

        fetch("/burgers", postRequest)
        .then(r => r.json())
        .then(newBurg => setBurgers([...burgers, newBurg]))


    }
//////////////






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

            <form>
                <input onChange={""} type="text" name="name" placeholder="" value={""}  />
                <input onChange={""} type="text" name="address" placeholder="" value={""}  />
                <input onChange={""} type="text" name="city" placeholder="" value={""}  />
                <input onChange={""} type="text" name="state_abbr" placeholder="" value={""}  />
                <input onChange={""} type="text" name="zip" placeholder="" value={""}  />
            </form>


            <h2 className="newBurgFormHeader" >Describe your burger!</h2>
            <form onSubmit={handleSubmit} >
                <input onChange={(e) => setBun(e.target.value)} type="text" name="bun" placeholder="what kind of bun?" value={bun} />
                <input onChange={(e) => setProtein(e.target.value)} type="text" name="protein" placeholder="how about protein?" value={protein} />
                <input onChange={(e) => setCheese(e.target.value)} type="text" name="cheese" placeholder="cheese, please" value={cheese} />
                <input onChange={(e) => setVeggies(e.target.value)} type="text" name="veggies" placeholder="hopefully some veggies" value={veggies} />
                <input onChange={(e) => setCondiments(e.target.value)} type="text" name="condiments" placeholder="any condiments?" value={condiments} />
                <input onChange={(e) => setExtras(e.target.value)} type="text" name="extras" placeholder="any extras?" value={extras} />

                <button type="submit" >Add your burger! 🍔</button>
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