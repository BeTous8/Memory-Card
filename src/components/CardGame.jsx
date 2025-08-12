import React, {useState} from "react";
import Card from "./Card.jsx";

export default function CardGame({cards, handleClick}) {

    return (
        <>
            <div className="card-container">
                {cards.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        name={card.name}
                        image={card.image}
                        wasSelected={card.wasSelected}
                        handleClick={handleClick}
                    />
                ))}
            </div>
        
        </>
    ) 

}