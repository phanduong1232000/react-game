import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import text from "../../../data.json";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg background fixed-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src="https://gunbow-project.vercel.app/img/logo.png"
              className="img-fluid"
              alt="..."
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  {text.header.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/marketplace" className="nav-link active">
                {text.header.marketplace}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link active">
                {text.header.news}
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/" className="nav-link active">
                {text.header.staking}
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/" className=" nav-link active play-item">
                {text.header.play_game}
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/" className=" nav-link active play-item">
                  <i className="fa-solid fa-wallet mr-2 "></i>  {text.header.wallet_connect}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
