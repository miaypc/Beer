import React, { useEffect, useState } from "react";
import "./SearchBar.scss"

export default function SearchBar({ search, getSearch, onChange, updateSearch }) {
  return (
    <div>
      <section className="searchbar-container">
        <form onSubmit={getSearch} className="search-form">
          <input className="input" type="text" placeholder="Type something" value={search} onChange={updateSearch} />
          <i class="fas fa-search"></i>
        </form>
      </section>
    </div>
  );
}
