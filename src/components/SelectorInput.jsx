// src/components/Header/Selector.jsx
import React, { useState } from "react";

const options = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];
export default function SelectorInput({ setSelectedContinent }) {
  const [open, setOpen] = useState(false);

  const onChangeHandler = (e) => {
    setSelectedContinent(e.target.value);
  };

  return (
    <div className="relative w-52 mb-0.5">
      <select
        className="w-full px-4 py-3 rounded-md shadow bg-bg
      outline-none cursor-pointer appearance-none
    "
        defaultValue=""
        onClick={() => setOpen(!open)}
        onChange={(e) => onChangeHandler(e)}
      >
        <option value="" disabled hidden>
          Filter by Region
        </option>

        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {/* Arrow Icon */}

      <img
        className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-200 pointer-events-none"
        src={
          !open ? "/images/angle-small-up.svg" : "images/angle-small-down.svg"
        }
        alt=""
      />
    </div>
  );
}
