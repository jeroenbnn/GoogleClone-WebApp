import React from "react";
import "../styles/SearchPage.css";
import { useStateValue } from "../context";
// import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import Logo from "../assets/MainLogo.svg";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import "../styles/SearchPage.css";
import SettingsIcon from "../assets/SettingsIcon.svg";

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
          <div>
            <button>
              <img src={SettingsIcon} alt="" />
            </button>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
          </div>
        </div>
        <div className="searchpage__headerBodyItem">
          <div>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
          </div>
          <div>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
            <button style={{ height: 30, width: 30 }}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
