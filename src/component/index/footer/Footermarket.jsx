import React, { useState } from "react";
import Swal from "sweetalert2";
import Market from "../../marketplace/Market";
import "./Footer.css";
export default function Footer() {
  const [isValid, setIsValid] = useState(false);
  const [name, setName] = useState();
  const handleChangeName = (e) => {
    const name = e.target.value;
    setName(name);
    setIsValid(isValid);
  };

  const emailRegex = /\S+@\S+\.\S+/;

  const handleClick = () => {
    if (emailRegex.test(name)) {
      setIsValid(true);
      Swal.fire("Chúc mừng", "Bạn đã gửi thông tin thành công!", "success");
    } else {
      setIsValid(false);
      Swal.fire("Rất tiếc", "Bạn vui lòng nhập đúng kí tự @email.com", "error");
    }
  };

  return (
    <div className="footer ">
      <section className="overlay-market">
        <Market />
        <div className="container">
          <div className="row row-footer d-flex justify-content-center align-items-center ">
            <div className="col-lg-6">
              <img
                src="https://gunbow-project.vercel.app/img/logo.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="content-footer-right">
                <h4>Đăng ký nhận thông tin</h4>
                <input
                  className="input-footer "
                  type="email"
                  required
                  onChange={handleChangeName}
                  placeholder="info@email.com"
                />
                <button className="button-footer" onClick={handleClick}>
                  <i className="fa-solid fa-paper-plane"></i>
                </button>

                <p>Game bắn súng tọa độ đỉnh cao nhất hệ mặt trời</p>
              </div>
              <div className="icon-footer">
                <a href="/#" className="icon-link">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="/#" className="icon-link">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="/#" className="icon-link">
                  <i className="fa-solid fa-paper-plane"></i>
                </a>
                <a href="/#" className="icon-link">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
