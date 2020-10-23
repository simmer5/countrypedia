import React from "react";

const ShowAllCountries = ({ handleShow }) => {
  return (
    <div>
      <label htmlFor="all">Show All</label>
      <input type="checkbox" id="all" onChange={handleShow} />
    </div>
  );
};
export default ShowAllCountries;
