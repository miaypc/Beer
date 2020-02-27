import React, { useEffect, useState } from "react";
import "./SearchBar.scss"

export default function SearchBar({ search, onSearch }) {
  return (
    <div>
      <section className="searchbar-container">
        <input className="input" type="text" placeholder="Type something" value={search} onChange={onSearch} />
        <i id="icon" class="fa fa-search"></i>

      </section>
    </div>
  );
}
