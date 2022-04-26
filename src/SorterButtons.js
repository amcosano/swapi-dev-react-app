import React from "react";
import "./SorterButtons.css";

export default function SorterButtons({ sortByName, sortByHeight }) {
  return (
    <div className="sorter">
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByHeight}>Sort by Height</button>
    </div>
  );
}
