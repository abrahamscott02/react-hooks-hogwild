import React from "react";

const HogTile =({ name, image, handleClick }) => {
    return (
        <div className="hogTile" onClick={handleClick}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
        </div>
    )
}

export default HogTile;