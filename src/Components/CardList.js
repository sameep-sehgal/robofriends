import React from 'react';
import Card from "./Card";

const CardList=({Robots})=>{
    const cardArray = Robots.map(robot =>{
        return <Card name={robot.name} id={robot.id} email={robot.email}/>
    })
    return(
        <div className="tc">
            {cardArray}
        </div>
                        
    );
}

export default CardList;