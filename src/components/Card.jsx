import React, {useState} from "react";



export default function Card({id, name, image, wasSelected, handleClick}) {
    return (
        <>
            <button className={wasSelected? "selected" : "notSelected"} onClick={handleClick}><img alt={name} src={image} />
                <p className="card-name">{name}</p>
            </button>
        
        </>
    )
}