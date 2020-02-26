import React, { useEffect, useState } from "react";


export default function SearchBar({ search, getSearch, onChange, updateSearch }) {
  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
        <input className="input" type="text" placeholder="Type something" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
