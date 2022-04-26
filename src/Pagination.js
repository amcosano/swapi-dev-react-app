import React from "react";
import "./Pagination.css";

export default function Pagination({ nextPage, prevPage }) {
  return (
    <div className="pagination">
      {prevPage && <button onClick={prevPage}>Previous</button>}
      {nextPage && <button onClick={nextPage}>Next</button>}
    </div>
  );
}
