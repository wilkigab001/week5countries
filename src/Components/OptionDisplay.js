import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
  let currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials);
  return (
    <div className="stack">
      {currentPotentials.map((country, index) => {
        return (
          <h2 key={country.name.official} className="country-options">
            {country.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
