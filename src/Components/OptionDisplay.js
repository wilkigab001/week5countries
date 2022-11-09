import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";

const OptionDisplay = () => {
  let dispatch = useDispatch();
  let currentPotentials = useSelector(selectPotentials);
  console.log(currentPotentials);
  return (
    <div className="stack">
      {currentPotentials.map((country, index) => {
        return (
          <h2
            key={country.name.official}
            className="country-options"
            onClick={() => {
              dispatch(setDisplayCountry(currentPotentials[index]));
            }}
          >
            {country.name.common}
          </h2>
        );
      })}
    </div>
  );
};

export default OptionDisplay;
