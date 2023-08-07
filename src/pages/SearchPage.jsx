import React from "react";
import "../styles/SearchPage.css";
import { useStateValue } from "../context";
import useGoogleSearch from "../useGoogleSearch";
import Logo from "../assets/MainLogo.svg";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import SettingsIcon from "../assets/icon.png";
import "../styles/SearchPage.css";

function SearchPage() {
  const [{ term }] = useStateValue();
  const { data } = useGoogleSearch(term);
  return (
    <div className="searchpage">
      <div className="searchpage__header">
        <div className="searchpage__headerBodyItem">
          <div style={{ display: "flex" }}>
            <Link to="/">
              <img
                className="searchpage__logo"
                src={Logo}
                style={{ height: 30, width: 92 }}
                alt="Logo"
              />
            </Link>
            <Searchbar hideButtons />
          </div>
          <div className="searchpage__topRightButtons">
            <button className="searchpage__settingsButton">
              <img src={SettingsIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="searchpage__headerBodyItem1">
          <div className="searchpage__options">
            <div className="searchpage__option">
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/images"
              >
                Images
              </Link>
            </div>
            <div className="searchpage__option">
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/videos"
              >
                Videos
              </Link>
            </div>
            <div className="searchpage__option">
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/maps"
              >
                Maps
              </Link>
            </div>
            <div className="searchpage__option">
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/news"
              >
                News
              </Link>
            </div>
            <div className="searchpage__option">
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/shopping"
              >
                Shopping
              </Link>
            </div>
            <div className="searchpage__option">
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/books"
              >
                Books
              </Link>
            </div>
            <div className="searchpage__option">
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/flights"
              >
                Flights
              </Link>
            </div>
            <div className="searchpage__option">
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to="/finance"
              >
                Finance
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div key={Math.random()}>
        {term && (
          <div style={{ color: "white" }} className="searchpage__results">
            <p className="searchpage__resultsCount">
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>
            {data?.items.map((item) => (
              <div key={item.cacheId} className="searchpage__result">
                <a
                  href={item.link}
                  style={{
                    color: "#bdc1c6",
                    fontSize: 13,
                    fontWeight: 500,
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <div
                        style={{
                          backgroundColor: "#fff",
                          height: 30,
                          width: 30,
                          borderRadius: 50,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          className="searchpage__resultImage"
                          src={item.pagemap?.cse_image[0]?.src}
                          alt=""
                        />
                      </div>
                    )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <p style={{ fontSize: 14, color: "#dadce0" }}>
                      {item.pagemap?.metatags[0]["og:title"]}
                    </p>
                    <p style={{ fontSize: 12 }}>{item.displayLink}</p>
                  </div>
                </a>
                <a href={item.link}>
                  <h2
                    className="searchpage__resultTitle"
                    style={{ fontSize: 20, fontWeight: 500 }}
                  >
                    {item.title}
                  </h2>
                </a>
                <p style={{ color: "#bdc1c6", fontSize: 13 }}>{item.snippet}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
