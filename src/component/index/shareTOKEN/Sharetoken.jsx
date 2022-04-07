import React from "react";
import Chartlive from "./Chartlive";
import "./Sharetoken.css";

export default function Sharetoken() {
  return (
    <section className="share-token">
      <div className="container">
        <div className="bg-title">Phân bổ token</div>
        <div className="content">
          Hệ sinh thái SQF sau này mở rộng ra nhiều thứ thú vị hơn. Theo đó,
          Token SQF có thể có nhiều ứng dụng hơn trong tương lai.
        </div>

        <div className="row row-token-chart">
          <div className="col-lg-4">
            <div className="title-token-left">
              <h5>ĐỘI NGŨ</h5>
              <p>10%</p>
            </div>
            <div className="title-token-left">
              <h5>SEED ROUND</h5>
              <p>3%</p>
            </div>
            <div className="title-token-left">
              <h5>PRIVATE ROUND</h5>
              <p>12%</p>
            </div>
            <div className="title-token-left">
              <h5>PUBLIC ROUND</h5>
              <p>7%</p>
            </div>
            <div className="title-token-left">
              <h5>ĐỐI TÁC & CỐ VẤN</h5>
              <p>10%</p>
            </div>
            <div className="title-token-left">
              <h5>MARKETING</h5>
              <p>27,2%</p>
            </div>
            <div className="title-token-left">
              <h5>TĂNG TRƯỞNG HỆ SINH THÁI</h5>
              <p>20%</p>
            </div>
            <div className="title-token-left">
              <h5>THANH KHOẢN</h5>
              <p>0.8%</p>
            </div>
            <div className="title-token-left">
              <h5>DỰ TRỮ</h5>
              <p>10%</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="chart-token">
              <Chartlive />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="title-token-right">
              <h5>TÊN TOKEN</h5>
              <p>Sancti Quest on Frontline</p>
            </div>
            <div className="title-token-right">
              <h5>BIỂU TƯỢNG</h5>
              <p>SQF</p>
            </div>
            <div className="title-token-right">
              <h5>TOKEN CUNG CẤP</h5>
              <p>333.333.333.333 SQF</p>
            </div>
            <div className="title-token-right">
              <h5>MẠNG BLOCKCHAIN</h5>
              <p>Binance Smart Chain ( BSC )</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
