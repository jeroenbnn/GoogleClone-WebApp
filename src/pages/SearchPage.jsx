import React from "react";
import "../styles/SearchPage.css";
import { useStateValue } from "../context";
// import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import Logo from "../assets/MainLogo.svg";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import SettingsIcon from "../assets/icon.png";
import Dots from "../assets/Vector.svg";
import "../styles/SearchPage.css";
import Photo from "../assets/profilePhoto.png";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  // const { data } = useGoogleSearch(term);
  const data = Response;
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
            <Search hideButtons />
          </div>
          <div className="searchpage__topRightButtons">
            <button className="searchpage__settingsButton">
              <img src={SettingsIcon} alt="" />
            </button>
            <button className="searchpage__appsButton">
              <img style={{ height: 16 }} src={Dots} alt="Dots" />
              <img style={{ height: 16 }} src={Dots} alt="Dots" />
              <img style={{ height: 16 }} src={Dots} alt="Dots" />
            </button>
            <button className="homepage__button-profile">
              <img
                style={{ height: 32, borderRadius: 50 }}
                src={Photo}
                alt="ProfilePhoto"
              />
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
    </div>
  );
}

export default SearchPage;
