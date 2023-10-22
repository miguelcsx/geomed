import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card"; // Import your Card component

const Cards = ({ cardData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {cardData.map((card, index) => (
                <Link to={card.url} key={index}>
                    <Card name={card.name} image={card.image} />
                </Link>
            ))}
        </div>
    );
};

export default Cards;
