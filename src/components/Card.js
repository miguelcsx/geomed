import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg">
      <img src={image} alt={name} className="w-32 h-32 mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
    </div>
  );
};

export default Card;
