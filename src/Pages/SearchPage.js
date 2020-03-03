import React, { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import BeerCard from "../Components/BeerCard";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import "./SearchPage.scss";
import DuckAnimation from "../Components/Duck";
import DiscreteSlider from "../Components/DiscreteSlider";

const SearchPage = () => {
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [beers, setBeers] = useState([]);
  const [abv, setAbv] = useState(0);

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("punk");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBeers();
  }, [query]);

  useEffect(() => {
    setFilteredBeers(
      search === "" && abv === 0
        ? beers.slice(0, 3)
        : beers.filter(beer => {
            return (
              beer.abv <= abv &&
              (beer.name.toLowerCase().includes(search) ||
                beer.description.toLowerCase().includes(search))
            );
          })
    );
  }, [search, beers, abv]); //useEffect will change each time the value in array changes

  const getBeers = async () => {
    const response = await fetch(`https://api.punkapi.com/v2/beers `)
      .then(response => response.json())
      .then(data => {
        setBeers(
          data.filter(
            item =>
              item.image_url !== "https://images.punkapi.com/v2/keg.png" &&
              item.name !== "The End Of History"
          )
        );
      })
      .then(setTimeout(() => setLoading(false), 2500));
  };
  const updateSearch = event => {
    setSearch(event.target.value.toLowerCase());
  };
  const updateAbv = (event, value) => {
    setAbv(value);
  };

  const getSearch = event => {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div>
      <Navbar />
      <div className="search-page-container">
        {loading ? (
          <div className="search-page-loading-container">
            <p className="search-page-loading-text">Loading...</p>
            <DuckAnimation />
          </div>
        ) : (
          <>
            <SearchBar onSearch={updateSearch} />
            <DiscreteSlider onChange={updateAbv} />
            {filteredBeers.map(beer => (
              <Link
                to={`/beers/${beer.id}`}
                style={{ textDecoration: "none", color: "#2d2d2d" }}
              >
                <BeerCard
                  name={beer.name}
                  img={beer.image_url}
                  description={beer.description}
                  abv={beer.abv}
                  srm={beer.srm}
                  ibu={beer.ibu}
                />
              </Link>
            ))}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchPage;
