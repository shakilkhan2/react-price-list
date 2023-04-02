import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <div>
      <h2 className="mt-2 py-3 font-bold text-5xl bg-purple-300 text-purple-950 text-center">
        Awesome Prices Here..
      </h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 p-4">
        {prices.map((price) => (
          <PriceCard key={price.id} p={price}></PriceCard>
        ))}
      </div>
    </div>
  );
};

export default PriceList;
