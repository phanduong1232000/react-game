import React from "react";
import Aboutsqf from "../buyTOKEN/Aboutsqf";
import "./Abouthome.css";
import text from "../../../data.json";

export default function Abouthome() {
  return (
    <section className="bg-about">
      <div className="container paddingtop-index">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-6 col-index">
            <div className="img-index">{text.sancti_quest_on_frontline}</div>
            <div className="title-index">
             {text.content}
            </div>
            <div className="items">
              <div className="item1">
                <a href="/#">
                  <i className="fa-solid fa-shop"></i> {text._marketplace}
                </a>
              </div>
              <div className="item2">
                <a href="/#">
                  <i className="fa-solid fa-credit-card"></i> {text._buy_token}
                </a>
              </div>
            </div>
            <div className="sqf-token">SQF TOKEN</div>

            <div className="token-item">
              <p className="title-token">SQF CONTRACT</p>
              <p className="item-token">
                0x7edc0ec89f987ecd85617b891c44fe462a325869
              </p>
            </div>
            <div className="token-item">
              <p className="title-token">COINMARKETCAP</p>
              <p className="item-token">
                https://coinmarketcap.com/currencies/bitcoin/
              </p>
            </div>
            <div className="token-item">
              <p className="title-token">COINGECKO</p>
              <p className="item-token">
                https://www.coingecko.com/vi/ty_gia/bitcoin
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <img
              className="img-token"
              src="https://gunbow-project.vercel.app/img/headIcon.png"
              alt="..."
            />
          </div>
        </div>
      </div>
      <Aboutsqf />
    </section>
  );
}
