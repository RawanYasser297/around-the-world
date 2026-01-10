// src/components/CountryList/CountryCard.jsx
import React from "react";

export default function CountryCard({
  capital,
  flags,
  name,
  region,
  population,
}) {
  return (
    <div className="w-[264px] h-[326px] bg-bg  shadow-card rounded-lg overflow-hidden p-2.5">
      <img
        src={flags['png']}
        alt={`${name} flag`}
        className="w-full h-40 object-cover"
      />
      <div className="p-md">
        <h3 className="text-lg font-semibold text-text mb-4"> {name}</h3>
        <p className="text-sm  mb-2">
          Population: <span className="font-light">{population}</span>
        </p>
        <p className="text-sm  mb-2">
          Region: <span className="font-light">{region}</span>
        </p>
        <p className="text-sm  mb-2">
          Capital: <span className="font-light">{capital}</span>
        </p>
      </div>
    </div>
  );
}
