import React from "react";
import "./Aboutsqf.css";

export default function Aboutsqf() {
  return (
    <>
      <div className="about-sqf"></div>
      <div className="bg-title">Mua SQF</div>
      <div className="container">
        <div className="content">
          Một vấn đề nan giải của các dự án gamefi là kiểm soát sự lạm phát của
          các trò chơi. Lạm phát có thể xảy ra với token, NFT, vật phẩm,… khiến
          dự án dần mất giá trị. Giải quyết vấn đề đó, SQF đã thiết kế cơ chế 1
          mã thông báo thay vì 2 mã thông báo (mã thông báo chính và mã thông
          báo thưởng) như các dự án khác. Trong SQF, mã thông báo không phải là
          yếu tố chính lưu trữ giá trị của dự án mà là NFT. Kinh tế của trò chơi
          xoay quanh NFT và NFT sẽ là nơi lưu trữ giá trị. Có thể nói NFT là
          linh hồn của dự án.
        </div>
        <div className="number-title">SỐ DƯ: 0 USDT</div>

        <div className="form-group mt-3 d-flex justify-content-center align-items-center col-12">
          <label className="control-label col-lg-2 col-md-2 col-xs-3">
            <span>Số lượng:</span>
          </label>
          <input
            type="number"
            className="form-input col-lg-8 col-md-8 col-xs-6 fg1"
            name="amount"
            placeholder="Amount USDT"
            step="any"
            autoComplete="off"
          />
          <label className="control-label col-lg-2 col-md-2 col-xs-3">
            <span>USDT</span>
          </label>
        </div>

        <div className="form-group label-text mt-3 d-flex justify-content-center align-items-center col-12 ">
          <label className="label-control col-lg-2 col-md-2 col-xs-3">
            <span>Nhận :</span>
          </label>
          <input
            className="form-input col-lg-8 col-md-8 col-xs-6 fg1"
            disabled=""
           
          />
          <label className="label-control label-text col-lg-2 col-md-2 col-xs-3">
            <span>SQF</span>
          </label>
        </div>

        <div className="button-sqf">
          <button className="item1-sqf">Mua SQF</button>
        </div>

      </div>
    </>
  );
}
