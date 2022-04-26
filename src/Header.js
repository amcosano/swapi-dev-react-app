import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <div class="header">
      <h1>{title}</h1>
    </div>
  );
}
