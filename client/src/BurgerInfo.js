import React from "react";
import "./BurgerInfo.css";








function BurgerInfo ({review}) {









    return (
        <div>
        <h6 className="test">bun: &nbsp;{review.burger.bun}</h6>

        <h6 className="test" >protein:&nbsp; {review.burger.protein}</h6>

        <h6 className="test" >cheese:&nbsp; {review.burger.cheese}</h6>
        <h6 className="test" >veggies:&nbsp; {review.burger.veggies}</h6>
        <h6 className="test" >condiments:&nbsp; {review.burger.condiments}</h6>
        <h6 className="test" >extras:&nbsp; {review.burger.extras}</h6>
        </div>
    );
};

export default BurgerInfo


// <div>
// {burgers.map(burger =>
//     <p>{burger.bun}</p>
//     )}
// </div>