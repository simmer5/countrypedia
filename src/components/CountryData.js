import React from "react";

const CountryData = ({ country }) => {
  console.log("Cia country data", country);
  console.log("Cia country data type", typeof country);
  return (
    <div>
      <h1>{country.name}</h1>
      <img src={country.flag} style={{ width: 250 }} alt={country.name} />
      <h2>Capital: {country.capital}</h2>
      <div>Languages: {country.languages.map((name) => name.name + " ")}</div>
      <div>Region: {country.region}</div>
      <div>
        Borders:{" "}
        {country.borders.length !== 0
          ? country.borders.map((border) => border + " ")
          : "Island"}
      </div>
    </div>
  );
};

export default CountryData;
