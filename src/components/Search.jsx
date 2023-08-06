import React, { useState } from "react";
import SearchVector from "../assets/Magnify.svg";
import MicVector from "../assets/Mic.svg";
import SearchByImgVector from "../assets/SearchByImgVector.svg";
import "../styles/Search.css";

function Search() {
  const [input, setInput] = useState("");
  const search = (e) => {
    e.preventDefault();
  };
  return (
    <div className="search">
      <div className="search__inputContainer">
        <img src={SearchVector} alt="Search" />
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
        <img
          className="search__inputButton"
          src={MicVector}
          alt="Search by voice"
        />
        <img
          className="search__inputButton"
          src={SearchByImgVector}
          alt="Search by img"
        />
      </div>
      <div className="search__buttonContainer">
        <button onClick={search} className="search__button">
          Google Search
        </button>
        <button className="search__button">I'm Feeling Lucky</button>
      </div>
    </div>
  );
}

export default Search;
