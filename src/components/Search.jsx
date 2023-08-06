import React, { useState } from "react";
import SearchVector from "../assets/Magnify.svg";
import MicVector from "../assets/Mic.svg";
import SearchByImgVector from "../assets/SearchByImgVector.svg";
import "../styles/Search.css";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../context";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate("/search");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
  };
  return (
    <form className="search">
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
      {!hideButtons ? (
        <div className="search__buttonContainer">
          <button type="submit" onClick={search} className="search__button">
            Google Search
          </button>
          <button className="search__button">I'm Feeling Lucky</button>
        </div>
      ) : (
        <div className="search__buttonContainer--hidden">
          <button type="submit" onClick={search} className="search__button">
            Google Search
          </button>
          <button className="search__button">I'm Feeling Lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;
