import React from "react";
import {useState, useEffect} from "react";
import "./NewReviewForm.css";


function NewReviewForm () {

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
            extras: extras
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

            <label for="restaurants" className="newBurgFormHeader" id="restaurants">Select a restaurant: </label>
            <select name="restaurants" >
                {restaurants.map (restaurant =>
                    <option>{restaurant.name}</option>
                    )}

            </select>


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