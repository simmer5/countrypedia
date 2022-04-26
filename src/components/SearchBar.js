import React from "react";

const SearcBar = ({ searchTerm, onChange }) => {
  return (
    <div>
      <input type="text" value={searchTerm} onChange={onChange} />
    </div>
  );
};

export default SearcBar;
