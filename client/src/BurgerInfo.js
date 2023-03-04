import React from "react";








function BurgerInfo ({burgers}) {









    return (
        <div>
            {burgers.map(burger =>
                <p>{burger.bun}</p>
                )}
        </div>
    );
};

export default BurgerInfo