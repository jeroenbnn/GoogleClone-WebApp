import React from "react";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";
import MainLogo from "../assets/MainLogo.svg";
import Searchbar from "../components/Searchbar";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <Link to="https://mail.google.com/mail/u/0/#inbox">Gmail</Link>
        <Link to="https://www.google.com/imghp?hl=en&ogbl">Images</Link>
      </div>
      <div className="homepage__body">
        <img style={{ height: 92, width: 272 }} src={MainLogo} alt="Logo" />
        <div className="homepage__inputContainer">
          <Searchbar />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
