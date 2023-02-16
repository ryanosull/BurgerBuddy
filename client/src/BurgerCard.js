import React from "react";
import "./BurgerCard.css";








function BurgerCard ({burger}) {





    console.log(burger)



    return (
        <div id="burgerCard" >
            <h4 className="burgerStuff" >{burger.bun}</h4>
            <h4 className="burgerStuff" >{burger.protein}</h4>
            <h4 className="burgerStuff" >{burger.cheese}</h4>
            <h4 className="burgerStuff" >{burger.veggies}</h4>
            <h4 className="burgerStuff" >{burger.condiments}</h4>
            <h4 className="burgerStuff" >{burger.extras}</h4>
        </div>
    );
};


export default BurgerCard;