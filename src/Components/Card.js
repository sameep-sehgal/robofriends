import React from 'react';

const Card = ({name,id,email})=>{
    return(
        <div className="tc bg-light-green ma3 br3 grow dib bw2 shadow-5">
            <img alt="Robot" src={`https://robohash.org/${id}?200x200`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}
export default Card;
