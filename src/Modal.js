import React from "react";
import "./Modal.css";

const INVALID_VALUE = {
  NA: "n/a",
  Unknown: "unknown",
  None: "none",
};

export default function Modal({ name, height, hairColor, gender, closeModal }) {
  let modelStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };
  return (
    <div className="modal">
      <div className="modal-content" style={modelStyle}>
        <span>
          <button className="close" onClick={closeModal}>
            X
          </button>
        </span>
        <h2>Detailed Info</h2>
        <p>Name: {name}</p>
        {[INVALID_VALUE.NA, INVALID_VALUE.Unknown, INVALID_VALUE.None].includes(
          height
        ) ? (
          ""
        ) : (
          <p>Height: {height}</p>
        )}
        {[INVALID_VALUE.NA, INVALID_VALUE.Unknown, INVALID_VALUE.None].includes(
          hairColor
        ) ? (
          ""
        ) : (
          <p>Hair Color: {hairColor}</p>
        )}
        {[INVALID_VALUE.NA, INVALID_VALUE.Unknown, INVALID_VALUE.None].includes(
          gender
        ) ? (
          ""
        ) : (
          <p>Gender: {gender}</p>
        )}
      </div>
    </div>
  );
}
