import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Monneynft.css";

function Slidermoney() {
  return (
    <div className="text-center">
      <OwlCarousel items={1} loop={true} autoplayTimeout={3000}>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-10 col-md-11 ">
            <div className="hero-name">
              <div className="title">
                <h3>Hero's Name</h3>
              </div>
            </div>

            <div className="hero-name01">
              <div className="row">
                <div className="col-lg-5 title-hero-name">
                  <h5 className="text-light text-center">
                    Thuộc tính vật phẩm
                  </h5>

                  <div className="items-content-money">
                    <img
                      src="https://gunbow-project.vercel.app/img/icons/lighting.png"
                      alt="..."
                    />
                    <span>Năng lượng: 19</span>
                  </div>

                  <div className="items-content-money">
                    <img
                      src="https://gunbow-project.vercel.app/img/icons/swords.png"
                      alt="..."
                    />
                    <span>Công: 8</span>
                  </div>

                  <div className="items-content-money">
                    <img
                      src="https://gunbow-project.vercel.app/img/icons/shield.png"
                      alt="..."
                    />
                    <span>Thủ: 12</span>
                  </div>

                  <div className="items-content-money">
                    <img
                      src="https://gunbow-project.vercel.app/img/icons/speedometer.png"
                      alt="..."
                    />
                    <span>Tốc: 28</span>
                  </div>

                  <div className="items-content-money">
                    <img
                      src="https://gunbow-project.vercel.app/img/icons/four-leaf.png"
                      alt="..."
                    />
                    <span>May mắn: 38</span>
                  </div>

                  <div className="items-content-money">
                    <p>Bị động: Attribute Passive</p>
                  </div>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-5">
                  <div className="items-content-money-right">
                    <img className="img-items1"
                      src="https://gunbow-project.vercel.app/img/SQF/khunghero.png"
                      alt="..."
                    />
                    <img className="img-items2"
                      src="https://gunbow-project.vercel.app/img/shopitems/2.png"
                      alt="..."
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Slidermoney;
