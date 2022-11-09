import React from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
  let currentDisplay = useSelector(selectDisplay);
  return (
    <div className="stack">
      <h1>{currentDisplay.name.official}</h1>
      <h2>{currentDisplay.name.common}</h2>
      <table className="overview-table">
        <tr>
          <td>Whose your Borders?</td>
          <td>
            {currentDisplay.borders
              ? currentDisplay.borders.map((e, i, arr) => {
                  if (i + 1 === arr.length) {
                    return `${e}`;
                  } else {
                    return `${e},`;
                  }
                })
              : "no borders found"}
          </td>
        </tr>
        <tr>
          <td>Capitol City: </td>
          <td>
            {currentDisplay.capital.map((e) => {
              <td>{e}</td>;
            })}
          </td>
        </tr>
        <tr>
          <td> Population: </td>
          <td>{currentDisplay.population}</td>
        </tr>
        <tr>
          <td>Continents: </td>
          <td>{currentDisplay.continents}</td>
        </tr>
        <tr>
          <td>Independent: </td>
          <td>{currentDisplay.independent ? "true" : "no"}</td>
        </tr>
        <tr>
          <td>LandLocked: </td>
          <td>{currentDisplay.landlocked ? "Yes" : "No"}</td>
        </tr>
        <tr>
          <td>Member of our Great UN?</td>
          <td>
            {currentDisplay.unMember ? "You know it" : "Not in the slightest"}
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Overview;
