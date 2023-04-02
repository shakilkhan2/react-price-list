import React from "react";

const PriceCard = ({ p }) => {
  return (
    <div className="ml-16 md:ml-0 rounded-lg w-80 h-96 border border-purple-600 bg-purple-200 mt-8 mx-2 p-4">
      <img className="h-48 rounded-lg" src={p.image} alt="" />
      <a href="">{p.category}</a>
      <h3 className="text-2xl font-bold text-purple-800">{p.name}</h3>
      <h4 className="text-lg font-bold">Price: ${p.price}</h4>
      <p className="text-base font-normal">{p.description}</p>
    </div>
  );
};

export default PriceCard;
