import React from "react";
import "../styles/Homepage.css";
import { Link } from "react-router-dom";
import Dots from "../assets/Vector.svg";
import Photo from "../assets/profilePhoto.png";
import MainLogo from "../assets/MainLogo.svg";
import Search from "../components/Search";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <Link to="https://mail.google.com/mail/u/0/#inbox">Gmail</Link>
        <Link to="https://www.google.com/imghp?hl=en&ogbl">Images</Link>
        <button className="homepage__button-apps">
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
      <div className="homepage__body">
        <img style={{ height: 92, width: 272 }} src={MainLogo} alt="Logo" />
        <div className="homepage__inputContainer">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
