import React from "react";
import {useState, useEffect} from "react"
import BurgerCard from "./BurgerCard"




function Burgers () {

    const [burgers, setBurgers] = useState([])

    useEffect(() => fetchBurgers(), [])

    function fetchBurgers () {
        fetch("/burgers")
        .then(r => r.json())
        .then(setBurgers)
    }

    const renderBurgerCard = burgers.map (burger =>
        <BurgerCard
        burger={burger}
        key={burger.id}
        />
        )



    return (
        <div>
            {renderBurgerCard}
        </div>
    );
};


export default Burgers;
