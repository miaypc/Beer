import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import BeerCard from "../Components/BeerCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "./SearchPage.scss";

const SearchPage = () => {
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [beers, setBeers] = useState([]);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("punk");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBeers();
  }, [query]);

  useEffect(() => {
    setFilteredBeers(
      search === ""
        ? beers.slice(0, 3)
        : beers.filter(beer => {
            return beer.description.toLowerCase().includes(search);
          })
    );
  }, [search, beers]);

  const getBeers = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers `)
      .then(response => response.json())
      .then(data => {
        setBeers(
          data.filter(
            item => item.image_url !== "https://images.punkapi.com/v2/keg.png"
          )
        );
      })
      .then(setLoading(false));
  };
  const updateSearch = event => {
    setSearch(event.target.value.toLowerCase());
  };
  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <Navbar />
      <SearchBar onSearch={updateSearch} />
      <div className="search-page-container">
        {loading ? (
          <h1>Loading ...</h1>
        ) : (
          filteredBeers.map(beer => (
            <Link to={`/beers/${beer.id}`}>
              <BeerCard
                name={beer.name}
                img={beer.image_url}
                description={beer.description}
              />{" "}
            </Link>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
